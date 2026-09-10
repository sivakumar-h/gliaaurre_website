"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Terminal, Layers, Sparkles, Zap, Radio, Sliders, CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";
import { cn } from "@/lib/utils";

export function HardwareSoftwareMerge() {
  const [viewMode, setViewMode] = useState<"merged" | "hardware" | "software">("merged");

  return (
    <div className="space-y-8">
      {/* Mode Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-4">
        <div className="space-y-1">
          <div className="text-[10px] font-mono tracking-widest text-accent-cyan uppercase">
            // UNIFIED CO-DESIGN ENGINE
          </div>
          <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
            Hardware Meets Software
          </h3>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-1 bg-surface-100 p-1 rounded-xl border border-border-subtle self-start sm:self-auto">
          <button
            onClick={() => setViewMode("hardware")}
            className={cn(
              "px-3 py-1.5 text-xs font-mono rounded-lg transition-all",
              viewMode === "hardware"
                ? "bg-surface-200 text-white font-medium shadow-sm border border-border-medium"
                : "text-slate-400 hover:text-slate-200"
            )}
          >
            Hardware View
          </button>
          <button
            onClick={() => setViewMode("merged")}
            className={cn(
              "px-3 py-1.5 text-xs font-mono rounded-lg transition-all",
              viewMode === "merged"
                ? "bg-accent-cyan/15 text-accent-cyan font-medium shadow-sm border border-accent-cyan/40"
                : "text-slate-400 hover:text-slate-200"
            )}
          >
            Unified Co-Design
          </button>
          <button
            onClick={() => setViewMode("software")}
            className={cn(
              "px-3 py-1.5 text-xs font-mono rounded-lg transition-all",
              viewMode === "software"
                ? "bg-surface-200 text-white font-medium shadow-sm border border-border-medium"
                : "text-slate-400 hover:text-slate-200"
            )}
          >
            Software View
          </button>
        </div>
      </div>

      {/* Main Interactive Dual-System Card */}
      <SpotlightCard className="p-6 sm:p-12 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left / Hardware Side */}
          <div
            className={cn(
              "lg:col-span-6 p-6 rounded-xl border transition-all duration-500 space-y-4",
              viewMode === "software"
                ? "opacity-30 blur-[1px] border-border-subtle bg-surface-50/40"
                : "border-accent-cyan/40 bg-surface-100/80 shadow-xl"
            )}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-accent-cyan uppercase">
                <Cpu className="w-4 h-4" />
                <span>HARDWARE ARCHITECTURE</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">PHYSICAL SILICON</span>
            </div>

            <h4 className="text-lg font-medium text-white">
              Piezoelectric Arrays & Custom Front-Ends
            </h4>

            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Engineered from first physical principles. Custom micro-machined acoustic elements, ultra-low-noise preamplification, and dynamic thermal dissipation paths.
            </p>

            <div className="space-y-2 pt-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan" />
                <span>Broadband piezoelectric impedance matching</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan" />
                <span>128-channel synchronous analog transceiver</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan" />
                <span>Zero active fan acoustic noise</span>
              </div>
            </div>
          </div>

          {/* Right / Software Side */}
          <div
            className={cn(
              "lg:col-span-6 p-6 rounded-xl border transition-all duration-500 space-y-4",
              viewMode === "hardware"
                ? "opacity-30 blur-[1px] border-border-subtle bg-surface-50/40"
                : "border-emerald-500/40 bg-surface-100/80 shadow-xl"
            )}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase">
                <Terminal className="w-4 h-4" />
                <span>SOFTWARE ARCHITECTURE</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">COMPUTATIONAL ENGINE</span>
            </div>

            <h4 className="text-lg font-medium text-white">
              Coherent Synthetic Beamforming & Intelligence
            </h4>

            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Algorithms designed specifically for the hardware’s physical properties. Real-time inverse solvers, phase aberration correction, and adaptive speckle suppression.
            </p>

            <div className="space-y-2 pt-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Real-time synthetic aperture beamforming</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Sub-millisecond latency round-trip pipeline</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Dynamic tissue harmonic image reconstruction</span>
              </div>
            </div>
          </div>
        </div>

        {/* Central Interlocking Monolithic Banner */}
        <div className="mt-8 pt-6 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>RESULT: MONOLITHIC CO-DESIGN WITH ZERO RETROSPECTIVE BOTTLENECK</span>
          </div>
          <span className="text-slate-500">GLIAAURRE // UNIFIED SYSTEM</span>
        </div>
      </SpotlightCard>
    </div>
  );
}