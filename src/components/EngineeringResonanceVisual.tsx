"use client";

import React, { useState, useEffect } from "react";

export function EngineeringResonanceVisual() {
  const [activeBar, setActiveBar] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBar((b) => (b + 1) % 24);
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full p-4 rounded-xl border border-border-subtle bg-surface-100/80 backdrop-blur-md space-y-3">
      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span className="flex items-center gap-1.5 text-accent-cyan">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
          ACOUSTIC SPECTRUM RESONANCE
        </span>
        <span className="text-emerald-400">ETHOS: 100% SYNCHRONIZED</span>
      </div>

      {/* Spectrum Equalizer Bars */}
      <div className="h-14 flex items-end justify-between gap-1 px-1">
        {Array.from({ length: 24 }).map((_, i) => {
          const heightPercent = 20 + Math.sin((i + activeBar * 0.3) * 0.8) * 35 + 35;
          const isHigh = heightPercent > 70;
          return (
            <div
              key={i}
              className="w-full rounded-t transition-all duration-150"
              style={{
                height: `${heightPercent}%`,
                backgroundColor: isHigh ? "#00E5FF" : i % 2 === 0 ? "#10B981" : "rgba(0, 229, 255, 0.3)",
              }}
            />
          );
        })}
      </div>

      <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 border-t border-border-subtle pt-2">
        <span>2.5 MHz</span>
        <span>7.5 MHz (PEAK)</span>
        <span>18.0 MHz</span>
      </div>
    </div>
  );
}