import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface GliaLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function GliaLogo({ className, size = "md" }: GliaLogoProps) {
  // Sizing definitions for the standalone logo
  const sizeClasses = {
    sm: "h-6 w-auto",
    md: "h-8 sm:h-9 w-auto",
    lg: "h-10 sm:h-12 w-auto",
    xl: "h-14 sm:h-16 w-auto",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(0,229,255,0.7)] select-none",
        sizeClasses[size],
        className
      )}
    >
      {/* Precision 6-Node Phased Constellation SVG - Pure Vector, No Square Container */}
      <svg
        viewBox="0 0 96 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto max-h-full max-w-full text-white transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          <linearGradient id="gliaGlow" x1="0" y1="0" x2="96" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#F0F8FF" />
            <stop offset="100%" stopColor="#00E5FF" />
          </linearGradient>
          <filter id="nodeBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Top Row: 3 Star Nodes */}
        {/* Star 1,1 */}
        <path
          d="M20,4 Q20,16 32,16 Q20,16 20,28 Q20,16 8,16 Q20,16 20,4 Z"
          fill="url(#gliaGlow)"
          filter="url(#nodeBlur)"
        />
        {/* Star 1,2 */}
        <path
          d="M48,4 Q48,16 60,16 Q48,16 48,28 Q48,16 36,16 Q48,16 48,4 Z"
          fill="url(#gliaGlow)"
          filter="url(#nodeBlur)"
        />
        {/* Star 1,3 */}
        <path
          d="M76,4 Q76,16 88,16 Q76,16 76,28 Q76,16 64,16 Q76,16 76,4 Z"
          fill="url(#gliaGlow)"
          filter="url(#nodeBlur)"
        />

        {/* Bottom Row: 3 Star Nodes */}
        {/* Star 2,1 */}
        <path
          d="M20,28 Q20,40 32,40 Q20,40 20,52 Q20,40 8,40 Q20,40 20,28 Z"
          fill="url(#gliaGlow)"
          filter="url(#nodeBlur)"
        />
        {/* Star 2,2 */}
        <path
          d="M48,28 Q48,40 60,40 Q48,40 48,52 Q48,40 36,40 Q48,40 48,28 Z"
          fill="url(#gliaGlow)"
          filter="url(#nodeBlur)"
        />
        {/* Star 2,3 */}
        <path
          d="M76,28 Q76,40 88,40 Q76,40 76,52 Q76,40 64,40 Q76,40 76,28 Z"
          fill="url(#gliaGlow)"
          filter="url(#nodeBlur)"
        />
      </svg>
    </div>
  );
}