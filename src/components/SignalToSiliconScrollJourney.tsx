"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Radio, Zap, Cpu, Sparkles, Layers, ArrowRight, ShieldCheck, Sliders } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";
import { cn } from "@/lib/utils";

const PHASES = [
  {
    id: "phase-1",
    step: "01",
    title: "Raw Physical Waveform",
    subtitle: "Acoustic Transducer Excitation",
    desc: "A broadband acoustic pressure wave enters the acquisition aperture. The analog signal carries subtle micro-volt harmonic reflections from tissue boundaries.",
    badge: "PHYSICAL LAYER",
    metric1: { label: "IMPULSE", val: "BROADBAND" },
    metric2: { label: "FREQUENCY", val: "2.5 – 18.0 MHz" },
    metric3: { label: "ATTENUATION", val: "TISSUE-MATCHED" },
    icon: Radio,
    color: "accent-cyan",
  },
  {
    id: "phase-2",
    step: "02",
    title: "Multichannel Data Stream",
    subtitle: "Parallel Signal Conditioning",
    desc: "The single acoustic waveform is decomposed across 128 synchronized analog channels, filtered with ultra-low noise preamplification to preserve subtle harmonics.",
    badge: "ANALOG FRONT-END",
    metric1: { label: "CHANNELS", val: "128 SYNC" },
    metric2: { label: "NOISE FLOOR", val: "-132 dBFS" },
    metric3: { label: "SAMPLING", val: "64 MSPS/CH" },
    icon: Zap,
    color: "emerald-400",
  },
  {
    id: "phase-3",
    step: "03",
    title: "Spatial Convergence",
    subtitle: "Coherent Synthetic Aperture",
    desc: "Individual data streams are mathematically aligned in space and time. Dynamic delay-and-sum beamforming converges parallel vectors into focused focal nodes.",
    badge: "BEAMFORMING DSP",
    metric1: { label: "ALIGNMENT", val: "SUB-NANOSECOND" },
    metric2: { label: "FOCUSING", val: "SYNTHETIC" },
    metric3: { label: "SNR BOOST", val: "+18.4 dB" },
    icon: Sliders,
    color: "amber-400",
  },
  {
    id: "phase-4",
    step: "04",
    title: "Silicon Substrate Matrix",
    subtitle: "Custom Low-Power Architecture",
    desc: "Convergence occurs directly on custom silicon. Dedicated computation units eliminate the thermal dissipation and latency of generic GPU processing.",
    badge: "SILICON ARCHITECTURE",
    metric1: { label: "PROCESSING", val: "CUSTOM ASIC/FPGA" },
    metric2: { label: "THERMAL", val: "PASSIVE DISSIPATION" },
    metric3: { label: "LATENCY", val: "< 0.8 ms" },
    icon: Cpu,
    color: "white",
  },
  {
    id: "phase-5",
    step: "05",
    title: "Intelligent Diagnostic System",
    subtitle: "Sub-Millimeter Tissue Clarity",
    desc: "The final transformation yields crystalline diagnostic clarity: deep penetration, sub-millimeter axial resolution, delivered in an ergonomic, instant-on tool.",
    badge: "INTELLIGENT CLARITY",
    metric1: { label: "RESOLUTION", val: "SUB-MILLIMETER" },
    metric2: { label: "CLARITY", val: "HIGH-FIDELITY" },
    metric3: { label: "EXPERIENCE", val: "ZERO COGNITIVE LOAD" },
    icon: Sparkles,
    color: "accent-cyan",
  },
];

export function SignalToSiliconScrollJourney() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const activePhase = PHASES[activePhaseIndex];
  const Icon = activePhase.icon;

  return (
    <div className="space-y-8">
      {/* Journey Stepper Bar */}
      <div className="flex items-center justify-between border border-border-subtle bg-surface-100/90 backdrop-blur-md px-4 sm:px-6 py-3 rounded-xl overflow-x-auto gap-2">
        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-300 uppercase whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
          <span>JOURNEY: SIGNAL ➔ SILICON ➔ INTELLIGENCE</span>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto">
          {PHASES.map((p, idx) => {
            const isSelected = activePhaseIndex === idx;
            return (
              <button
                key={p.id}
                onClick={() => setActivePhaseIndex(idx)}
                className={cn(
                  "px-3 py-1 text-[10px] font-mono tracking-wider rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5",
                  isSelected
                    ? "bg-surface-200 border border-accent-cyan/60 text-accent-cyan shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-surface-200/50"
                )}
              >
                <span>{p.step}</span>
                <span className="hidden sm:inline">{p.title.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Stage Display */}
      <SpotlightCard className="p-0 overflow-hidden border-border-medium shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border-subtle">
          {/* Left Narrative Panel */}
          <div className="lg:col-span-5 p-6 sm:p-10 space-y-6 flex flex-col justify-between bg-surface-100/60">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded border border-border-subtle bg-surface-200 text-accent-cyan uppercase">
                  {activePhase.badge}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  STEP {activePhase.step} OF 05
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg border border-border-medium bg-surface-200 flex items-center justify-center text-accent-cyan">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                    {activePhase.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-400">
                    {activePhase.subtitle}
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed pt-2">
                {activePhase.desc}
              </p>
            </div>

            {/* Telemetry Metrics */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border-subtle">
              <div className="p-2.5 rounded-lg bg-surface-50/90 border border-border-subtle space-y-1">
                <div className="text-[9px] font-mono text-slate-400 truncate">
                  {activePhase.metric1.label}
                </div>
                <div className="text-[11px] font-mono text-accent-cyan font-medium truncate">
                  {activePhase.metric1.val}
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-surface-50/90 border border-border-subtle space-y-1">
                <div className="text-[9px] font-mono text-slate-400 truncate">
                  {activePhase.metric2.label}
                </div>
                <div className="text-[11px] font-mono text-white font-medium truncate">
                  {activePhase.metric2.val}
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-surface-50/90 border border-border-subtle space-y-1">
                <div className="text-[9px] font-mono text-slate-400 truncate">
                  {activePhase.metric3.label}
                </div>
                <div className="text-[11px] font-mono text-emerald-400 font-medium truncate">
                  {activePhase.metric3.val}
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Transformation Canvas / SVG */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between tech-grid-fine bg-background/60 min-h-[360px] relative overflow-hidden">
            {/* Top Telemetry Header */}
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>ACTIVE SYSTEM STATE: {activePhase.badge}</span>
              <span className="text-accent-cyan">CO-DESIGN: UNIFIED</span>
            </div>

            {/* Dynamic Stage Graphics */}
            <div className="w-full h-56 flex items-center justify-center relative my-auto">
              <AnimatePresence mode="wait">
                {activePhaseIndex === 0 && (
                  <motion.svg
                    key="p0"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.35 }}
                    className="w-full h-full max-w-lg"
                    viewBox="0 0 500 180"
                  >
                    <line x1="0" y1="90" x2="500" y2="90" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
                    {/* Entering Acoustic Pulse */}
                    <path
                      d="M0,90 L140,90 Q170,90 190,40 T220,10 T250,170 T280,30 T310,130 L340,90 L500,90"
                      fill="none"
                      stroke="#00E5FF"
                      strokeWidth="2.5"
                    />
                    <circle cx="220" cy="10" r="4" fill="#00E5FF" />
                    <circle cx="250" cy="170" r="4" fill="#00E5FF" />
                    <text x="250" y="15" fill="#94A3B8" fontSize="10" fontFamily="monospace" textAnchor="middle">
                      RAW PRESSURE WAVEFORM
                    </text>
                  </motion.svg>
                )}

                {activePhaseIndex === 1 && (
                  <motion.svg
                    key="p1"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.35 }}
                    className="w-full h-full max-w-lg"
                    viewBox="0 0 500 180"
                  >
                    {/* Multichannel Parallel Data Streams */}
                    {Array.from({ length: 9 }).map((_, i) => {
                      const y = 30 + i * 15;
                      return (
                        <g key={i}>
                          <line x1="60" y1={y} x2="440" y2={y} stroke="rgba(0,229,255,0.2)" strokeWidth="1" />
                          <circle cx={120 + (i * 35) % 280} cy={y} r="2.5" fill="#00E5FF" />
                          <circle cx={200 + (i * 45) % 200} cy={y} r="2" fill="#10B981" />
                        </g>
                      );
                    })}
                    <text x="250" y="175" fill="#38EF7D" fontSize="10" fontFamily="monospace" textAnchor="middle">
                      128 PARALLEL LOW-NOISE DIGITIZED CHANNELS
                    </text>
                  </motion.svg>
                )}

                {activePhaseIndex === 2 && (
                  <motion.svg
                    key="p2"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.35 }}
                    className="w-full h-full max-w-lg"
                    viewBox="0 0 500 180"
                  >
                    {/* Spatial Beam Convergence Rays */}
                    {Array.from({ length: 15 }).map((_, i) => (
                      <line
                        key={i}
                        x1={80 + i * 24}
                        y1="160"
                        x2="250"
                        y2="30"
                        stroke={i === 7 ? "#00E5FF" : "rgba(0,229,255,0.3)"}
                        strokeWidth={i === 7 ? "2" : "1"}
                      />
                    ))}
                    {/* Focal Point with concentric wavefront arcs */}
                    <circle cx="250" cy="30" r="6" fill="#00E5FF" />
                    <circle cx="250" cy="30" r="16" fill="none" stroke="rgba(0,229,255,0.4)" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="250" cy="30" r="28" fill="none" stroke="rgba(0,229,255,0.2)" strokeWidth="1" />
                    <text x="250" y="20" fill="#00E5FF" fontSize="10" fontFamily="monospace" textAnchor="middle" dy="-8">
                      COHERENT BEAM CONVERGENCE
                    </text>
                  </motion.svg>
                )}

                {activePhaseIndex === 3 && (
                  <motion.svg
                    key="p3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.35 }}
                    className="w-full h-full max-w-lg"
                    viewBox="0 0 500 180"
                  >
                    {/* Silicon Microchip Substrate Geometry */}
                    <rect x="150" y="25" width="200" height="130" rx="6" fill="rgba(19,22,28,0.9)" stroke="rgba(0,229,255,0.6)" strokeWidth="1.5" />
                    <rect x="180" y="45" width="140" height="90" rx="3" fill="rgba(0,229,255,0.06)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                    {/* Pins / Bus interconnects */}
                    {Array.from({ length: 8 }).map((_, i) => (
                      <g key={i}>
                        <line x1="120" y1={40 + i * 14} x2="150" y2={40 + i * 14} stroke="#00E5FF" strokeWidth="1.5" />
                        <line x1="350" y1={40 + i * 14} x2="380" y2={40 + i * 14} stroke="#10B981" strokeWidth="1.5" />
                      </g>
                    ))}
                    <text x="250" y="95" fill="#FFFFFF" fontSize="11" fontFamily="monospace" textAnchor="middle">
                      CUSTOM SILICON ASIC
                    </text>
                    <text x="250" y="112" fill="#94A3B8" fontSize="9" fontFamily="monospace" textAnchor="middle">
                      LOW-POWER DSP ENGINE
                    </text>
                  </motion.svg>
                )}

                {activePhaseIndex === 4 && (
                  <motion.svg
                    key="p4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.35 }}
                    className="w-full h-full max-w-lg"
                    viewBox="0 0 500 180"
                  >
                    {/* Resolved Intelligent Diagnostic System View */}
                    <defs>
                      <radialGradient id="systemGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <circle cx="250" cy="90" r="70" fill="url(#systemGlow)" />
                    <circle cx="250" cy="90" r="50" fill="none" stroke="#00E5FF" strokeWidth="2" />
                    <ellipse cx="250" cy="90" rx="80" ry="40" fill="none" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 4" />
                    <ellipse cx="250" cy="90" rx="40" ry="20" fill="none" stroke="#FFFFFF" strokeWidth="2" />
                    <text x="250" y="94" fill="#FFFFFF" fontSize="11" fontFamily="monospace" textAnchor="middle">
                      DIAGNOSTIC CLARITY
                    </text>
                    <text x="250" y="110" fill="#00E5FF" fontSize="9" fontFamily="monospace" textAnchor="middle">
                      SUB-MILLIMETER FIDELITY
                    </text>
                  </motion.svg>
                )}
              </AnimatePresence>
            </div>

            {/* Phase Navigation Controls */}
            <div className="flex items-center justify-between border-t border-border-subtle pt-3">
              <button
                onClick={() => setActivePhaseIndex((prev) => (prev > 0 ? prev - 1 : PHASES.length - 1))}
                className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
              >
                ← PREV PHASE
              </button>
              <div className="flex gap-1.5">
                {PHASES.map((_, i) => (
                  <span
                    key={i}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      activePhaseIndex === i ? "bg-accent-cyan scale-125" : "bg-surface-200"
                    )}
                  />
                ))}
              </div>
              <button
                onClick={() => setActivePhaseIndex((prev) => (prev < PHASES.length - 1 ? prev + 1 : 0))}
                className="text-xs font-mono text-accent-cyan hover:text-white transition-colors flex items-center gap-1"
              >
                <span>NEXT PHASE</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}