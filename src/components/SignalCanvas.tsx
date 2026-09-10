"use client";

import React, { useEffect, useRef } from "react";

interface SignalCanvasProps {
  className?: string;
}

export function SignalCanvas({ className }: SignalCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Acoustic wave simulation parameters
    let time = 0;
    const waveCount = 5;
    const nodeCount = 48;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle background coordinate grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw phased-array ultrasound wave lines
      for (let w = 0; w < waveCount; w++) {
        const waveProgress = (w / waveCount + time * 0.15) % 1;
        const opacity = Math.sin(waveProgress * Math.PI) * 0.35;
        const phaseOffset = w * 0.4;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 229, 255, ${opacity})`;
        ctx.lineWidth = 1.2;

        for (let i = 0; i <= nodeCount; i++) {
          const x = (i / nodeCount) * width;
          const nx = i / nodeCount;
          // Ultrasound pulse envelope (Gaussian window modulation)
          const envelope = Math.exp(-Math.pow((nx - 0.5) * 3, 2));
          const freq1 = Math.sin(nx * 14 + time * 2 + phaseOffset);
          const freq2 = Math.cos(nx * 28 - time * 1.5 + phaseOffset);
          const y = height / 2 + (freq1 * 45 + freq2 * 20) * envelope;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // 3. Draw Transducer array sensors at bottom
      const sensorCount = 32;
      const sensorSpacing = width / (sensorCount + 1);
      for (let s = 1; s <= sensorCount; s++) {
        const sx = s * sensorSpacing;
        const sy = height - 16;
        const activity = Math.sin(s * 0.5 + time * 3);

        ctx.fillStyle = activity > 0.3 ? "rgba(0, 229, 255, 0.7)" : "rgba(255, 255, 255, 0.15)";
        ctx.fillRect(sx - 2, sy, 4, 8);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
