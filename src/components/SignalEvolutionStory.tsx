"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Cpu,
  Layers,
  Radio,
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  Sliders,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface StoryStage {
  id: string;
  step: string;
  category: "SIGNAL" | "PROCESSING" | "HARDWARE" | "SOFTWARE" | "INTELLIGENCE";
  title: string;
  description: string;
  telemetry: {
    label1: string;
    val1: string;
    label2: string;
    val2: string;
    label3: string;
    val3: string;
  };
  icon: React.ComponentType<{ className?: string }>;
}

const STAGES: StoryStage[] = [
  {
    id: "stage-1",
    step: "01",
    category: "SIGNAL",
    title: "Acoustic Signal Generation",
    description:
      "Every diagnostic begins as pure acoustic physics. We engineer broadband piezoelectric elements with precise impedance matching to emit clean, uncompromised excitation pulses.",
    telemetry: {
      label1: "EXCITATION",
      val1: "BROADBAND PULSE",
      label2: "FREQUENCY",
      val2: "2.5 – 18.0 MHz",
      label3: "BANDWIDTH",
      val3: "92% FRACTIONAL",
    },
    icon: Radio,
  },
  {
    id: "stage-2",
    step: "02",
    category: "PROCESSING",
    title: "Low-Noise Analog Front-End",
    description:
      "Capturing subtle harmonic echoes requires eliminating thermal and parasitic noise before digitization. Our custom analog conditioning preserves micro-signals that conventional systems lose.",
    telemetry: {
      label1: "NOISE FLOOR",
      val1: "-132 dBFS",
      label2: "DYNAMIC RANGE",
      val2: "> 110 dB",
      label3: "SNR GAIN",
      val3: "+18.4 dB RECON",
    },
    icon: Zap,
  },
  {
    id: "stage-3",
    step: "03",
    category: "HARDWARE",
    title: "Synchronous Silicon Matrix",
    description:
      "Unified co-design connects multi-channel analog transceivers directly with low-power beamforming silicon, eliminating bulky interconnects and thermal bottlenecks.",
    telemetry: {
      label1: "APERTURE",
      val1: "128 COHERENT CH",
      label2: "SAMPLING",
      val2: "64 MSPS / CH",
      label3: "POWER PROFILE",
      val3: "ULTRA-LOW THERMAL",
    },
    icon: Cpu,
  },
  {
    id: "stage-4",
    step: "04",
    category: "SOFTWARE",
    title: "Computational Reconstruction",
    description:
      "Raw channel data is reconstructed using real-time inverse problem solvers that adaptively correct for phase aberrations and suppress reverberation artifacts.",
    telemetry: {
      label1: "BEAMFORMING",
      val1: "SYNTHETIC APERTURE",
      label2: "LATENCY",
      val2: "< 0.8 ms REAL-TIME",
      label3: "ABERRATION",
      val3: "DYNAMIC PHASE CORR",
    },
    icon: Sliders,
  },
  {
    id: "stage-5",
    step: "05",
    category: "INTELLIGENCE",
    title: "Resolved Diagnostic Clarity",
    description:
      "The result is uncompromised clarity: deep tissue penetration with sub-millimeter axial resolution, delivered in a tool grounded in clinical understanding.",
    telemetry: {
      label1: "AXIAL RESOLUTION",
      val1: "SUB-MILLIMETER",
      label2: "CONTRAST RATIO",
      val2: "HIGH FIDELITY",
      label3: "DIAGNOSTIC",
      val3: "INSTANT CLARITY",
    },
    icon: Sparkles,
  },
];

export function SignalEvolutionStory() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % STAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const activeStage = STAGES[activeStageIndex];
  const Icon = activeStage.icon;

  return (
    <div className="w-full border border-border-medium bg-surface-100/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
      {/* Top Telemetry & Pipeline Stepper Bar */}
      <div className="border-b border-border-subtle bg-surface-50 px-4 sm:px-8 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded border border-border-subtle bg-surface-200 text-[10px] font-mono tracking-widest text-accent-cyan uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
            <span>TRANSFORMATION PIPELINE</span>
          </div>
          <span className="text-xs font-mono text-slate-400 hidden sm:inline">
            // {activeStage.category}
          </span>
        </div>

        {/* 5-Stage Stepper Buttons */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {STAGES.map((stage, idx) => {
            const isActive = activeStageIndex === idx;
            return (
              <button
                key={stage.id}
                onClick={() => {
                  setAutoPlay(false);
                  setActiveStageIndex(idx);
                }}
                className={cn(
                  "px-3 py-1.5 text-[11px] font-mono tracking-wider rounded transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap",
                  isActive
                    ? "bg-surface-200 border border-accent-cyan/60 text-accent-cyan shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-surface-200/50"
                )}
              >
                <span className="text-[9px] opacity-60 font-semibold">{stage.step}</span>
                <span>{stage.category}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Stage Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch divide-y lg:divide-y-0 lg:divide-x divide-border-subtle">
        {/* Left Column: Stage Details & Narrative */}
        <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-8 bg-surface-100/60">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg border border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan flex items-center justify-center font-mono text-sm font-semibold">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">
                  STAGE {activeStage.step} OF 05
                </span>
                <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                  {activeStage.title}
                </h3>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={activeStage.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-sm sm:text-base text-slate-300 font-light leading-relaxed"
              >
                {activeStage.description}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Telemetry Stats Grid */}
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border-subtle">
            <div className="p-2.5 rounded bg-surface-50/80 border border-border-subtle space-y-1">
              <div className="text-[9px] font-mono text-slate-400 truncate">
                {activeStage.telemetry.label1}
              </div>
              <div className="text-[11px] font-mono text-accent-cyan font-medium truncate">
                {activeStage.telemetry.val1}
              </div>
            </div>
            <div className="p-2.5 rounded bg-surface-50/80 border border-border-subtle space-y-1">
              <div className="text-[9px] font-mono text-slate-400 truncate">
                {activeStage.telemetry.label2}
              </div>
              <div className="text-[11px] font-mono text-white font-medium truncate">
                {activeStage.telemetry.val2}
              </div>
            </div>
            <div className="p-2.5 rounded bg-surface-50/80 border border-border-subtle space-y-1">
              <div className="text-[9px] font-mono text-slate-400 truncate">
                {activeStage.telemetry.label3}
              </div>
              <div className="text-[11px] font-mono text-emerald-400 font-medium truncate">
                {activeStage.telemetry.val3}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Deep-Tech Stage Visualization */}
        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between tech-grid-fine bg-background/50 relative overflow-hidden min-h-[340px]">
          {/* Top Status Bar */}
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 z-10">
            <span>SYNCHRONOUS RF DOMAIN</span>
            <span className="text-accent-cyan">PIPELINE PHASE: {activeStage.category}</span>
          </div>

          {/* Dynamic SVG Visuals corresponding to each stage */}
          <div className="w-full h-48 sm:h-56 flex items-center justify-center relative my-auto">
            <AnimatePresence mode="wait">
              {activeStageIndex === 0 && (
                <motion.svg
                  key="stage-0"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full max-w-lg"
                  viewBox="0 0 500 160"
                >
                  <line x1="0" y1="80" x2="500" y2="80" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
                  {/* Single Clean Gaussian Pulse */}
                  <path
                    d="M0,80 L180,80 Q210,80 230,40 T250,15 T270,145 T290,50 T310,95 L330,80 L500,80"
                    fill="none"
                    stroke="#00E5FF"
                    strokeWidth="2.5"
                  />
                  {/* Transducer Base */}
                  <rect x="210" y="145" width="80" height="8" rx="2" fill="rgba(0,229,255,0.4)" />
                  <text x="250" y="135" fill="#94A3B8" fontSize="10" fontFamily="monospace" textAnchor="middle">
                    PIEZOELECTRIC EXCITATION
                  </text>
                </motion.svg>
              )}

              {activeStageIndex === 1 && (
                <motion.svg
                  key="stage-1"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full max-w-lg"
                  viewBox="0 0 500 160"
                >
                  <line x1="0" y1="80" x2="500" y2="80" stroke="rgba(255,255,255,0.08)" />
                  {/* Multichannel Harmonic Waveforms */}
                  <path
                    d="M0,80 Q60,70 120,50 T240,20 T360,130 T440,75 L500,80"
                    fill="none"
                    stroke="rgba(0,229,255,0.3)"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                  <path
                    d="M0,80 Q80,90 160,30 T280,140 T380,30 T460,85 L500,80"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2"
                  />
                  <path
                    d="M0,80 Q100,60 200,10 T300,150 T400,20 T480,75 L500,80"
                    fill="none"
                    stroke="#00E5FF"
                    strokeWidth="2.5"
                  />
                  <text x="250" y="25" fill="#38EF7D" fontSize="10" fontFamily="monospace" textAnchor="middle">
                    HARMONIC RECOVERY & SNR BOOST (+18.4 dB)
                  </text>
                </motion.svg>
              )}

              {activeStageIndex === 2 && (
                <motion.svg
                  key="stage-2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full max-w-lg"
                  viewBox="0 0 500 160"
                >
                  {/* Coherent Beamforming Rays */}
                  {Array.from({ length: 17 }).map((_, i) => (
                    <line
                      key={i}
                      x1={100 + i * 18}
                      y1="140"
                      x2="250"
                      y2="20"
                      stroke="rgba(0,229,255,0.35)"
                      strokeWidth="1.2"
                    />
                  ))}
                  {/* Phased Array Elements */}
                  {Array.from({ length: 17 }).map((_, i) => (
                    <rect
                      key={i}
                      x={96 + i * 18}
                      y="140"
                      width="10"
                      height="8"
                      rx="1"
                      fill={i === 8 ? "#00E5FF" : "rgba(255,255,255,0.3)"}
                    />
                  ))}
                  {/* Focal Node */}
                  <circle cx="250" cy="20" r="5" fill="#00E5FF" />
                  <circle cx="250" cy="20" r="12" fill="none" stroke="rgba(0,229,255,0.5)" strokeWidth="1" strokeDasharray="2 2" />
                  <text x="250" y="15" fill="#00E5FF" fontSize="10" fontFamily="monospace" textAnchor="middle" dy="-8">
                    SYNTHETIC FOCUS POINT
                  </text>
                </motion.svg>
              )}

              {activeStageIndex === 3 && (
                <motion.svg
                  key="stage-3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full max-w-lg"
                  viewBox="0 0 500 160"
                >
                  {/* Computational Reconstruction Matrix Grid */}
                  {Array.from({ length: 9 }).map((_, r) =>
                    Array.from({ length: 15 }).map((_, c) => {
                      const dist = Math.hypot(c - 7, r - 4);
                      const opacity = Math.max(0.1, 1 - dist * 0.15);
                      return (
                        <circle
                          key={`${r}-${c}`}
                          cx={80 + c * 24}
                          cy={20 + r * 15}
                          r={dist < 3 ? 2.5 : 1.2}
                          fill={dist < 3 ? "#00E5FF" : "rgba(255,255,255,0.2)"}
                          opacity={opacity}
                        />
                      );
                    })
                  )}
                  {/* Reconstructed Boundary Curve */}
                  <path
                    d="M160,80 Q250,30 340,80 Q250,130 160,80 Z"
                    fill="none"
                    stroke="#00E5FF"
                    strokeWidth="1.5"
                    strokeDasharray="4 2"
                  />
                  <text x="250" y="85" fill="#FFFFFF" fontSize="10" fontFamily="monospace" textAnchor="middle">
                    INVERSE PROBLEM SOLVER ACTIVE
                  </text>
                </motion.svg>
              )}

              {activeStageIndex === 4 && (
                <motion.svg
                  key="stage-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full max-w-lg"
                  viewBox="0 0 500 160"
                >
                  {/* Resolved High-Fidelity Anatomical Tissue Contour */}
                  <defs>
                    <radialGradient id="clarityGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="250" cy="80" r="60" fill="url(#clarityGlow)" />
                  <ellipse cx="250" cy="80" rx="90" ry="45" fill="none" stroke="#00E5FF" strokeWidth="2" />
                  <ellipse cx="250" cy="80" rx="60" ry="30" fill="none" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
                  <ellipse cx="250" cy="80" rx="30" ry="15" fill="none" stroke="#FFFFFF" strokeWidth="2" />
                  <line x1="250" y1="10" x2="250" y2="150" stroke="rgba(255,255,255,0.15)" strokeDasharray="2 2" />
                  <line x1="100" y1="80" x2="400" y2="80" stroke="rgba(255,255,255,0.15)" strokeDasharray="2 2" />
                  <text x="250" y="84" fill="#FFFFFF" fontSize="11" fontFamily="monospace" textAnchor="middle">
                    CLARITY: NOMINAL
                  </text>
                </motion.svg>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Step Navigation Bar */}
          <div className="flex items-center justify-between border-t border-border-subtle pt-3 z-10">
            <button
              onClick={() => setActiveStageIndex((prev) => (prev > 0 ? prev - 1 : STAGES.length - 1))}
              className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              ← PREVIOUS
            </button>
            <div className="flex gap-1.5">
              {STAGES.map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    activeStageIndex === i ? "bg-accent-cyan scale-125" : "bg-surface-200"
                  )}
                />
              ))}
            </div>
            <button
              onClick={() => setActiveStageIndex((prev) => (prev < STAGES.length - 1 ? prev + 1 : 0))}
              className="text-xs font-mono text-accent-cyan hover:text-white transition-colors flex items-center gap-1"
            >
              <span>NEXT STAGE</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}