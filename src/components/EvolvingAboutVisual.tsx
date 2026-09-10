"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Radio, Zap, Cpu, Sparkles, Sliders } from "lucide-react";
import { cn } from "@/lib/utils";

const EVOLVING_STAGES = [
  {
    id: "stage-1",
    title: "Who We Are",
    domain: "PHYSICS & TRANSDUCER LAYER",
    subtitle: "Acoustic Transducer Physics",
    desc: "Engineers and signal architects operating directly at the boundary of acoustic wave propagation and transducer substrate design.",
    telemetry: "APERTURE: 128 CH // BANDWIDTH: 92% FRACTIONAL",
    icon: Radio,
  },
  {
    id: "stage-2",
    title: "What Drives Us",
    domain: "DYNAMIC RANGE & CLARITY",
    subtitle: "Eliminating the False Compromise",
    desc: "Eliminating the compromise between affordability and diagnostic clarity through fundamental analog noise floor suppression.",
    telemetry: "NOISE FLOOR: -132 dBFS // SNR BOOST: +18.4 dB",
    icon: Zap,
  },
  {
    id: "stage-3",
    title: "How We Think",
    domain: "FIRST-PRINCIPLES RIGOR",
    subtitle: "Eliminating Architectural Friction",
    desc: "Approaching challenges without legacy baggage. Stripping away unnecessary ornamentation to prioritize tactile clinical certainty.",
    telemetry: "LATENCY: < 0.8 ms // COGNITIVE LOAD: MINIMAL",
    icon: Sliders,
  },
  {
    id: "stage-4",
    title: "Our Approach",
    domain: "FULL-STACK CO-DESIGN",
    subtitle: "Signal to Silicon Synchronization",
    desc: "Co-designing transducer physics, analog front-ends, and real-time inverse solvers into a single unified deep-tech instrument.",
    telemetry: "PARADIGM: MONOLITHIC CO-DESIGN // CLARITY: OPTIMAL",
    icon: Sparkles,
  },
];

export function EvolvingAboutVisual() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = EVOLVING_STAGES[activeIdx];
  const Icon = active.icon;

  return (
    <div className="w-full border border-border-medium bg-surface-100/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl">
      {/* Header Tabs */}
      <div className="border-b border-border-subtle bg-surface-50 px-4 sm:px-8 py-3.5 flex items-center justify-between overflow-x-auto gap-3">
        <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-accent-cyan uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
          <span>EVOLVING ARCHITECTURE STATE</span>
        </div>

        <div className="flex items-center gap-1">
          {EVOLVING_STAGES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveIdx(idx)}
              className={cn(
                "px-3 py-1 text-[11px] font-mono rounded-lg transition-all whitespace-nowrap",
                activeIdx === idx
                  ? "bg-surface-200 border border-accent-cyan/60 text-accent-cyan font-medium"
                  : "text-slate-400 hover:text-white"
              )}
            >
              0{idx + 1}. {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* Main Visual Display */}
      <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center tech-grid-fine">
        <div className="lg:col-span-6 space-y-4">
          <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded border border-border-subtle bg-surface-200 text-slate-400 uppercase">
            {active.domain}
          </span>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg border border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan flex items-center justify-center">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-light text-white">
              {active.subtitle}
            </h3>
          </div>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            {active.desc}
          </p>
          <div className="pt-2 text-[11px] font-mono text-emerald-400">
            {active.telemetry}
          </div>
        </div>

        {/* Dynamic Abstract Geometry Canvas for Current Stage */}
        <div className="lg:col-span-6 h-56 flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.svg
              key={active.id}
              initial={{ opacity: 0, rotate: -5, scale: 0.95 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 5, scale: 1.05 }}
              transition={{ duration: 0.35 }}
              className="w-full h-full max-w-sm"
              viewBox="0 0 300 200"
            >
              <defs>
                <radialGradient id="aboutGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="150" cy="100" r="80" fill="url(#aboutGlow)" />
              {/* Concentric layered geometric frames */}
              <rect x="70" y="40" width="160" height="120" rx="6" fill="none" stroke="rgba(0,229,255,0.4)" strokeWidth="1.5" />
              <rect x="90" y="55" width="120" height="90" rx="4" fill="none" stroke="rgba(16,185,129,0.4)" strokeWidth="1.2" strokeDasharray="3 3" />
              <rect x="110" y="70" width="80" height="60" rx="3" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              <circle cx="150" cy="100" r="6" fill="#00E5FF" />
              <line x1="70" y1="40" x2="110" y2="70" stroke="rgba(0,229,255,0.3)" />
              <line x1="230" y1="40" x2="190" y2="70" stroke="rgba(0,229,255,0.3)" />
              <line x1="70" y1="160" x2="110" y2="130" stroke="rgba(0,229,255,0.3)" />
              <line x1="230" y1="160" x2="190" y2="130" stroke="rgba(0,229,255,0.3)" />
            </motion.svg>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}