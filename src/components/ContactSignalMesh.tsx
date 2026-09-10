"use client";

import React, { useEffect, useRef } from "react";

export function ContactSignalMesh() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    let t = 0;
    const render = () => {
      t += 0.02;
      ctx.clearRect(0, 0, width, height);

      const rows = 12;
      const cols = 20;
      const dx = width / cols;
      const dy = height / rows;

      ctx.fillStyle = "rgba(0, 229, 255, 0.35)";
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const px = c * dx;
          const py = r * dy;

          const dist = Math.hypot(px - mouseX, py - mouseY);
          const influence = Math.max(0, 1 - dist / 180);
          const wave = Math.sin(c * 0.4 + r * 0.3 + t) * 4;

          const finalX = px + (mouseX - px) * influence * 0.15;
          const finalY = py + (mouseY - py) * influence * 0.15 + wave;

          ctx.beginPath();
          ctx.arc(finalX, finalY, 1.2 + influence * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-45"
      aria-hidden="true"
    />
  );
}