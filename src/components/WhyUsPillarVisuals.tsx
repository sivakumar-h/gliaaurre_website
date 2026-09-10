"use client";

import React from "react";

export function PillarVisual({ badge }: { badge: string }) {
  if (badge.includes("01")) {
    return (
      <div className="w-full h-16 relative flex items-center justify-center rounded-lg bg-surface-200/30 border border-border-subtle p-2">
        <svg className="w-full h-full" viewBox="0 0 200 45">
          <circle cx="40" cy="22" r="12" fill="none" stroke="rgba(0,229,255,0.4)" strokeWidth="1" />
          <circle cx="40" cy="22" r="4" fill="#00E5FF" />
          <line x1="52" y1="22" x2="160" y2="22" stroke="rgba(0,229,255,0.3)" strokeDasharray="3 3" />
          <text x="110" y="36" fill="#00E5FF" fontSize="7" fontFamily="monospace">CLINICAL FOCUS VECTOR</text>
        </svg>
      </div>
    );
  }

  if (badge.includes("02")) {
    return (
      <div className="w-full h-16 relative flex items-center justify-center rounded-lg bg-surface-200/30 border border-border-subtle p-2">
        <svg className="w-full h-full" viewBox="0 0 200 45">
          <path d="M 20 22 L 60 22 L 75 8 L 90 36 L 105 8 L 120 22 L 180 22" fill="none" stroke="#10B981" strokeWidth="1.5" />
          <text x="100" y="38" fill="#10B981" fontSize="7" fontFamily="monospace" textAnchor="middle">ANALOG TO DIGITAL PURITY</text>
        </svg>
      </div>
    );
  }

  if (badge.includes("03")) {
    return (
      <div className="w-full h-16 relative flex items-center justify-center rounded-lg bg-surface-200/30 border border-border-subtle p-2">
        <svg className="w-full h-full" viewBox="0 0 200 45">
          <rect x="30" y="10" width="60" height="20" rx="3" fill="none" stroke="rgba(245,158,11,0.5)" strokeWidth="1" />
          <rect x="110" y="10" width="60" height="20" rx="3" fill="none" stroke="rgba(245,158,11,0.5)" strokeWidth="1" />
          <line x1="90" y1="20" x2="110" y2="20" stroke="#F59E0B" strokeWidth="2" />
          <text x="60" y="23" fill="#F59E0B" fontSize="6.5" fontFamily="monospace" textAnchor="middle">SILICON</text>
          <text x="140" y="23" fill="#F59E0B" fontSize="6.5" fontFamily="monospace" textAnchor="middle">SOLVERS</text>
        </svg>
      </div>
    );
  }

  if (badge.includes("04")) {
    return (
      <div className="w-full h-16 relative flex items-center justify-center rounded-lg bg-surface-200/30 border border-border-subtle p-2">
        <svg className="w-full h-full" viewBox="0 0 200 45">
          <line x1="30" y1="22" x2="170" y2="22" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <circle cx="100" cy="22" r="8" fill="rgba(255,255,255,0.1)" stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="100" cy="22" r="2.5" fill="#00E5FF" />
          <text x="100" y="38" fill="#FFFFFF" fontSize="7" fontFamily="monospace" textAnchor="middle">ZERO-LATENCY TACTILITY</text>
        </svg>
      </div>
    );
  }

  return (
    <div className="w-full h-16 relative flex items-center justify-center rounded-lg bg-surface-200/30 border border-border-subtle p-2">
      <svg className="w-full h-full" viewBox="0 0 200 45">
        <circle cx="100" cy="20" r="14" fill="none" stroke="#00E5FF" strokeWidth="1.5" />
        <circle cx="100" cy="20" r="6" fill="rgba(0,229,255,0.3)" />
        <text x="100" y="38" fill="#00E5FF" fontSize="7" fontFamily="monospace" textAnchor="middle">LEAN PRECISION</text>
      </svg>
    </div>
  );
}