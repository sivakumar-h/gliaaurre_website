"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface AcousticField3DProps {
  className?: string;
}

export function AcousticField3D({ className }: AcousticField3DProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [webglSupported, setWebglSupported] = useState<boolean>(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setWebglSupported(false);
      return;
    }

    let isVisible = true;
    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;

    try {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      camera.position.set(0, -22, 28);
      camera.lookAt(0, 0, 0);

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn("WebGL not supported or context lost", e);
      setWebglSupported(false);
      return;
    }

    const isMobile = window.innerWidth < 768;
    const gridSegments = isMobile ? 32 : 64;
    const planeWidth = 70;
    const planeHeight = 70;

    // 1. Acoustic Phased Array Wireframe Surface
    const geometry = new THREE.PlaneGeometry(
      planeWidth,
      planeHeight,
      gridSegments,
      gridSegments
    );
    const posAttribute = geometry.attributes.position;
    const initialPositions = posAttribute.array.slice();

    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      wireframe: true,
      transparent: true,
      opacity: isMobile ? 0.15 : 0.22,
    });
    const waveMesh = new THREE.Mesh(geometry, wireframeMaterial);
    scene.add(waveMesh);

    // 2. Data Pulse Particles
    const particleCount = isMobile ? 120 : 350;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * planeWidth * 0.9;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * planeHeight * 0.9;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      particleSpeeds[i] = 0.4 + Math.random() * 0.8;
    }

    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: isMobile ? 0.8 : 1.1,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMaterial);
    scene.add(particles);

    // 3. Mouse Parallax Tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 4. Resize Handling
    const handleResize = () => {
      if (!container || !renderer) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // 5. Intersection Observer to Pause when out of view
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 6. Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible || !renderer) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;

      camera.position.x = currentMouseX * 5;
      camera.position.y = -22 + currentMouseY * 3;
      camera.lookAt(currentMouseX * 2, 0, 0);

      // Acoustic wave perturbation equation
      const positions = posAttribute.array as Float32Array;
      for (let i = 0; i < posAttribute.count; i++) {
        const u = initialPositions[i * 3];
        const v = initialPositions[i * 3 + 1];

        // Complex acoustic interference: Primary wavefront + High-frequency harmonic + Pulse ripple
        const dist = Math.sqrt(u * u + v * v);
        const wave1 = Math.sin(u * 0.12 + elapsedTime * 1.6) * 2.2;
        const wave2 = Math.cos(v * 0.14 - elapsedTime * 1.2) * 1.8;
        const pulse = Math.sin(dist * 0.22 - elapsedTime * 2.4) * 2.5 * Math.exp(-dist * 0.04);
        const mouseReact = Math.exp(-Math.pow(u - currentMouseX * 20, 2) * 0.01 - Math.pow(v - currentMouseY * 20, 2) * 0.01) * 3;

        positions[i * 3 + 2] = wave1 + wave2 + pulse + mouseReact;
      }
      posAttribute.needsUpdate = true;

      // Particle floating drift
      const pPositions = particleGeo.attributes.position.array as Float32Array;
      for (let j = 0; j < particleCount; j++) {
        pPositions[j * 3 + 2] += Math.sin(elapsedTime * particleSpeeds[j] + j) * 0.03;
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);

      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }
      geometry.dispose();
      wireframeMaterial.dispose();
      particleGeo.dispose();
      particleMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      aria-hidden="true"
      style={{ width: "100%", height: "100%" }}
    >
      {!webglSupported && (
        <div className="w-full h-full tech-grid-bg opacity-30 flex items-center justify-center">
          <div className="w-72 h-72 rounded-full bg-accent-cyan/5 blur-3xl" />
        </div>
      )}
    </div>
  );
}