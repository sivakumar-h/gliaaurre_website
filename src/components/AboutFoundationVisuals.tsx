"use client";

import React from "react";

export function FoundationVisual({ step }: { step: string }) {
  if (step === "01") {
    return (
      <div className="w-full h-20 relative flex items-center justify-center rounded-lg bg-surface-200/40 border border-border-subtle p-2">
        <svg className="w-full h-full" viewBox="0 0 200 60">
          {/* Transducer array substrate */}
          <rect x="20" y="20" width="160" height="20" rx="3" fill="rgba(0,229,255,0.1)" stroke="rgba(0,229,255,0.5)" strokeWidth="1" />
          {Array.from({ length: 6 }).map((_, i) => (
            <circle key={i} cx={35 + i * 26} cy="30" r="3" fill="#00E5FF" />
          ))}
          <path d="M 35 15 Q 100 5 165 15" fill="none" stroke="rgba(0,229,255,0.4)" strokeWidth="1" strokeDasharray="2 2" />
          <text x="100" y="52" fill="#00E5FF" fontSize="7" fontFamily="monospace" textAnchor="middle">
            PZT PIEZOELECTRIC SUBSTRATE
          </text>
        </svg>
      </div>
    );
  }

  if (step === "02") {
    return (
      <div className="w-full h-20 relative flex items-center justify-center rounded-lg bg-surface-200/40 border border-border-subtle p-2">
        <svg className="w-full h-full" viewBox="0 0 200 60">
          <line x1="20" y1="45" x2="180" y2="45" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <path d="M 25 42 Q 70 12 175 10" fill="none" stroke="#10B981" strokeWidth="2" />
          <circle cx="100" cy="14" r="3" fill="#10B981" />
          <text x="100" y="52" fill="#10B981" fontSize="7" fontFamily="monospace" textAnchor="middle">
            ACCESSIBILITY + UNCOMPROMISED PRECISION
          </text>
        </svg>
      </div>
    );
  }

  if (step === "03") {
    return (
      <div className="w-full h-20 relative flex items-center justify-center rounded-lg bg-surface-200/40 border border-border-subtle p-2">
        <svg className="w-full h-full" viewBox="0 0 200 60">
          {/* Signal with zero noise */}
          <path d="M 20 30 L 70 30 L 85 10 L 100 50 L 115 10 L 130 30 L 180 30" fill="none" stroke="#F59E0B" strokeWidth="1.8" />
          <circle cx="100" cy="50" r="2.5" fill="#F59E0B" />
          <text x="100" y="55" fill="#F59E0B" fontSize="7" fontFamily="monospace" textAnchor="middle">
            FIRST-PRINCIPLES NOISE SUPPRESSION
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div className="w-full h-20 relative flex items-center justify-center rounded-lg bg-surface-200/40 border border-border-subtle p-2">
      <svg className="w-full h-full" viewBox="0 0 200 60">
        <rect x="30" y="15" width="55" height="24" rx="3" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        <rect x="115" y="15" width="55" height="24" rx="3" fill="rgba(0,229,255,0.1)" stroke="rgba(0,229,255,0.5)" strokeWidth="1" />
        <line x1="85" y1="27" x2="115" y2="27" stroke="#00E5FF" strokeWidth="2" strokeDasharray="3 2" />
        <text x="57" y="29" fill="#FFFFFF" fontSize="6.5" fontFamily="monospace" textAnchor="middle">SILICON</text>
        <text x="142" y="29" fill="#00E5FF" fontSize="6.5" fontFamily="monospace" textAnchor="middle">ALGORITHMS</text>
        <text x="100" y="52" fill="#FFFFFF" fontSize="7" fontFamily="monospace" textAnchor="middle">
          FULL-STACK CO-DESIGN
        </text>
      </svg>
    </div>
  );
}