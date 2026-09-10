"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "hero", label: "00 // HORIZON" },
  { id: "what-were-making", label: "01 // MISSION" },
  { id: "signal-to-silicon", label: "02 // JOURNEY" },
  { id: "co-design", label: "03 // CO-DESIGN" },
  { id: "architecture", label: "04 // ARCHITECTURE" },
  { id: "careers-teaser", label: "05 // REVOLUTION" },
];

export function AcousticSpine() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, window.scrollY / (docHeight || 1)));
      const idx = Math.min(SECTIONS.length - 1, Math.floor(progress * SECTIONS.length));
      setActiveSection(idx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      aria-label="Page section navigation"
      className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col items-start gap-4 pointer-events-none"
    >
      <div className="text-[9px] font-mono tracking-widest text-slate-400 rotate-180 [writing-mode:vertical-lr] mb-2 uppercase">
        ACOUSTIC SIGNAL PIPELINE
      </div>

      <div className="relative pl-3 border-l border-border-subtle flex flex-col gap-5">
        {SECTIONS.map((sec, idx) => {
          const isActive = activeSection === idx;
          return (
            <div
              key={sec.id}
              className={cn(
                "flex items-center gap-2 text-[10px] font-mono transition-all duration-300",
                isActive
                  ? "text-accent-cyan font-semibold translate-x-1"
                  : "text-slate-400 opacity-60"
              )}
            >
              <span
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all duration-300",
                  isActive
                    ? "bg-accent-cyan ring-4 ring-accent-cyan/20 scale-125"
                    : "bg-surface-200"
                )}
              />
              <span className="tracking-wider">{sec.label}</span>
            </div>
          );
        })}
      </div>
    </aside>
  );
}