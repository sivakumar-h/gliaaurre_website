"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Zap, Layers, Sliders, Cpu, CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";
import { cn } from "@/lib/utils";

const PILLARS = [
  {
    id: "p1",
    num: "01",
    title: "Built Around the Problem",
    tag: "PROBLEM DEFINITION",
    desc: "Traditional devices stack complexity over legacy blueprints. We start from the physical patient and acoustic constraints.",
    layerName: "Tier 1: Physical Diagnostic Boundary",
    color: "accent-cyan",
    icon: Shield,
  },
  {
    id: "p2",
    num: "02",
    title: "From Signal to Silicon",
    tag: "END-TO-END COHESION",
    desc: "Unifying piezoelectric impedance properties directly with custom low-noise analog signal conditioning and digitizers.",
    layerName: "Tier 2: Transceiver & Front-End Silicon",
    color: "emerald-400",
    icon: Zap,
  },
  {
    id: "p3",
    num: "03",
    title: "Hardware Meets Software",
    tag: "UNIFIED PARADIGM",
    desc: "Hardware is designed for the algorithms; algorithms extract the maximum physical potential of the custom silicon.",
    layerName: "Tier 3: Coherent Beamforming Engine",
    color: "amber-400",
    icon: Layers,
  },
  {
    id: "p4",
    num: "04",
    title: "Designed Around Real-World Use",
    tag: "WORKFLOW RIGOR",
    desc: "Instant-on responsiveness and balanced ergonomics ensure practitioners focus on clinical decisions without friction.",
    layerName: "Tier 4: Zero-Latency Clinical Interface",
    color: "white",
    icon: Sliders,
  },
  {
    id: "p5",
    num: "05",
    title: "Precision Without Over-Engineering",
    tag: "CORE ETHOS",
    desc: "True sophistication is the discipline to make something powerful yet quiet, intricate yet effortless, and mathematically rigorous.",
    layerName: "Tier 5: Crystalline Diagnostic Clarity",
    color: "accent-cyan",
    icon: Cpu,
  },
];

export function PhilosophyScrollBuilder() {
  const [selectedPillar, setSelectedPillar] = useState(0);
  const active = PILLARS[selectedPillar];
  const Icon = active.icon;

  return (
    <div className="space-y-6">
      {/* Pillar Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {PILLARS.map((p, idx) => {
          const isSelected = selectedPillar === idx;
          return (
            <button
              key={p.id}
              onClick={() => setSelectedPillar(idx)}
              className={cn(
                "p-3 rounded-xl border text-left transition-all duration-200 space-y-1",
                isSelected
                  ? "bg-surface-200 border-accent-cyan/60 shadow-lg shadow-black/40"
                  : "bg-surface-100/60 border-border-subtle hover:bg-surface-100 hover:border-border-medium"
              )}
            >
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className={isSelected ? "text-accent-cyan font-semibold" : "text-slate-500"}>
                  {p.num}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan opacity-60" />
              </div>
              <div className="text-xs font-medium text-white line-clamp-1">
                {p.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Central Interactive Assembled Architecture View */}
      <SpotlightCard className="p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded border border-border-subtle bg-surface-200 text-accent-cyan uppercase">
              {active.tag}
            </span>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg border border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                {active.title}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              {active.desc}
            </p>
            <div className="pt-2 text-xs font-mono text-emerald-400">
              ACTIVE LAYER: {active.layerName}
            </div>
          </div>

          {/* Right 5-Layer Stack Visualization */}
          <div className="lg:col-span-7 space-y-2.5 bg-surface-50/70 p-6 rounded-xl border border-border-subtle">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider pb-1">
              // CENTRAL ARCHITECTURE TIERS
            </div>
            {PILLARS.map((p, idx) => {
              const isActiveLayer = selectedPillar === idx;
              return (
                <div
                  key={p.id}
                  onClick={() => setSelectedPillar(idx)}
                  className={cn(
                    "p-3 rounded-lg border transition-all duration-300 flex items-center justify-between cursor-pointer text-xs font-mono",
                    isActiveLayer
                      ? "bg-accent-cyan/15 border-accent-cyan text-white shadow-md"
                      : "bg-surface-100/50 border-border-subtle text-slate-400 hover:text-slate-200 hover:bg-surface-100"
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={isActiveLayer ? "text-accent-cyan font-bold" : "text-slate-500"}>
                      {p.num}
                    </span>
                    <span>{p.layerName}</span>
                  </div>
                  <span className={isActiveLayer ? "text-accent-cyan" : "text-slate-600"}>
                    {isActiveLayer ? "● ILLUMINATED" : "○ READY"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}