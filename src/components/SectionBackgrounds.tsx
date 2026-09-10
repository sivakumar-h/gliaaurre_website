"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// 1. Grid Wave Background with Traveling Ripples
export function GridWaveBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    let t = 0;
    const render = () => {
      t += 0.015;
      ctx.clearRect(0, 0, width, height);

      const gridSize = 48;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.035)";
      ctx.lineWidth = 1;

      // Draw subtle undulating grid
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        for (let y = 0; y < height; y += 12) {
          const wave = Math.sin(x * 0.02 + y * 0.015 + t) * 4;
          if (y === 0) ctx.moveTo(x + wave, y);
          else ctx.lineTo(x + wave, y);
        }
        ctx.stroke();
      }

      // Draw horizontal crosslines with traveling pulse
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        for (let x = 0; x < width; x += 12) {
          const wave = Math.cos(x * 0.015 + y * 0.02 - t) * 4;
          if (x === 0) ctx.moveTo(x, y + wave);
          else ctx.lineTo(x, y + wave);
        }
        ctx.stroke();
      }

      // Highlight moving pulse intersection nodes
      ctx.fillStyle = "rgba(0, 229, 255, 0.4)";
      for (let x = gridSize; x < width; x += gridSize * 2) {
        for (let y = gridSize; y < height; y += gridSize * 2) {
          const pulse = Math.sin((x + y) * 0.01 + t * 2);
          if (pulse > 0.7) {
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full pointer-events-none opacity-60", className)}
      aria-hidden="true"
    />
  );
}

// 2. Continuous Particle Data Stream Background
export function ParticleDataStreamBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const particleCount = 45;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.4 + Math.random() * 0.8,
      size: 1 + Math.random() * 2,
      opacity: 0.2 + Math.random() * 0.5,
      channel: Math.floor(Math.random() * 8),
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint vertical bus guides
      ctx.strokeStyle = "rgba(0, 229, 255, 0.025)";
      ctx.lineWidth = 1;
      const colStep = width / 12;
      for (let c = 1; c < 12; c++) {
        ctx.beginPath();
        ctx.moveTo(c * colStep, 0);
        ctx.lineTo(c * colStep, height);
        ctx.stroke();
      }

      // Draw upward data pulse particles
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        ctx.fillStyle = `rgba(0, 229, 255, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Subtle particle trace
        ctx.strokeStyle = `rgba(0, 229, 255, ${p.opacity * 0.4})`;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x, p.y + p.speed * 8);
        ctx.stroke();
      });

      animId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full pointer-events-none opacity-70", className)}
      aria-hidden="true"
    />
  );
}

// 3. Circuit & Semiconductor Trace Background
export function CircuitTraceBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-40",
        className
      )}
      aria-hidden="true"
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="circuitGrid"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            {/* Bus traces */}
            <path
              d="M0 60 H40 L60 40 H100 L120 60 M60 40 V10 M40 60 V100 H80 L100 120"
              fill="none"
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="1.2"
            />
            {/* Circuit Nodes */}
            <circle cx="40" cy="60" r="2.5" fill="rgba(0, 229, 255, 0.4)" />
            <circle cx="60" cy="40" r="2.5" fill="rgba(255, 255, 255, 0.3)" />
            <circle cx="80" cy="100" r="2" fill="rgba(16, 185, 129, 0.4)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuitGrid)" />
      </svg>
    </div>
  );
}

// 4. Acoustic Wave Interference Background
export function AcousticInterferenceBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-35",
        className
      )}
      aria-hidden="true"
    >
      <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
        <defs>
          <radialGradient id="acousticCenter1" cx="30%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="acousticCenter2" cx="70%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Source 1 Concentric Wavefronts */}
        <circle cx="300" cy="300" r="80" fill="none" stroke="rgba(0,229,255,0.15)" strokeWidth="1" />
        <circle cx="300" cy="300" r="160" fill="none" stroke="rgba(0,229,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="300" cy="300" r="240" fill="none" stroke="rgba(0,229,255,0.08)" strokeWidth="1" />
        <circle cx="300" cy="300" r="320" fill="none" stroke="rgba(0,229,255,0.05)" strokeWidth="1" />

        {/* Source 2 Concentric Wavefronts */}
        <circle cx="700" cy="300" r="80" fill="none" stroke="rgba(16,185,129,0.15)" strokeWidth="1" />
        <circle cx="700" cy="300" r="160" fill="none" stroke="rgba(16,185,129,0.1)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="700" cy="300" r="240" fill="none" stroke="rgba(16,185,129,0.08)" strokeWidth="1" />
        <circle cx="700" cy="300" r="320" fill="none" stroke="rgba(16,185,129,0.05)" strokeWidth="1" />

        {/* Interference Focal Axis */}
        <line x1="500" y1="50" x2="500" y2="550" stroke="rgba(255,255,255,0.08)" strokeDasharray="6 6" />
      </svg>
    </div>
  );
}