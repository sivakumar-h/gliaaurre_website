"use client";

import React, { useState } from "react";
import { Cpu, Radio, Zap, Sparkles, Sliders } from "lucide-react";
import { cn } from "@/lib/utils";

const STACK_LAYERS = [
  {
    id: "layer-1",
    level: "01",
    title: "Acoustic Transducer Physics",
    desc: "Precision piezoelectric and micro-machined acoustic elements engineered for high acoustic-impedance matching and broad bandwidth.",
    icon: Radio,
    tag: "PHYSICAL LAYER",
  },
  {
    id: "layer-2",
    level: "02",
    title: "Low-Noise Analog Front-End",
    desc: "Custom high-dynamic-range analog front-end circuits capturing subtle harmonic echoes without introducing parasitic noise.",
    icon: Zap,
    tag: "SILICON / RF",
  },
  {
    id: "layer-3",
    level: "03",
    title: "Digital Beamforming Engine",
    desc: "Coherent synthetic aperture beamforming algorithms operating synchronously across multi-channel digital signal paths.",
    icon: Cpu,
    tag: "DSP / FIRMWARE",
  },
  {
    id: "layer-4",
    level: "04",
    title: "Computational Image Reconstruction",
    desc: "Intelligent reconstruction matrices converting raw RF channel data into pristine, artifact-free tissue clarity.",
    icon: Sparkles,
    tag: "INTELLIGENCE",
  },
  {
    id: "layer-5",
    level: "05",
    title: "Ergonomic Clinical Interface",
    desc: "Minimalist, instant-on user interaction designed for zero cognitive overhead in high-demand clinical workflows.",
    icon: Sliders,
    tag: "USER EXPERIENCE",
  },
];

export function SystemStackVisual() {
  const [selectedLayer, setSelectedLayer] = useState<string>("layer-2");

  return (
    <div className="space-y-4">
      {/* System layers */}
      <div className="space-y-2.5">
        {STACK_LAYERS.map((layer) => {
          const isSelected = selectedLayer === layer.id;
          const Icon = layer.icon;

          return (
            <div
              key={layer.id}
              onClick={() => setSelectedLayer(layer.id)}
              className={cn(
                "group cursor-pointer border p-4 sm:p-5 rounded transition-all duration-200 relative overflow-hidden",
                isSelected
                  ? "bg-surface-100 border-accent-cyan/60 shadow-lg shadow-black/40"
                  : "bg-surface-50/70 border-border-subtle hover:bg-surface-100/60 hover:border-border-medium"
              )}
            >
              {/* Active indicator bar */}
              {isSelected && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-cyan" />
              )}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "w-8 h-8 rounded border flex items-center justify-center font-mono text-xs font-semibold transition-colors",
                      isSelected
                        ? "border-accent-cyan/50 bg-accent-cyan/10 text-accent-cyan"
                        : "border-border-medium bg-surface-200 text-slate-400"
                    )}
                  >
                    {layer.level}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-medium text-foreground tracking-tight">
                        {layer.title}
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="text-[10px] font-mono tracking-widest px-2 py-0.5 rounded border border-border-subtle bg-surface-200 text-slate-400 uppercase">
                    {layer.tag}
                  </span>
                  <Icon
                    className={cn(
                      "w-4 h-4 transition-colors",
                      isSelected ? "text-accent-cyan" : "text-slate-400"
                    )}
                  />
                </div>
              </div>

              {/* Expandable / Selected Details */}
              {isSelected && (
                <div className="mt-3 pt-3 border-t border-border-subtle text-xs text-slate-300 leading-relaxed animate-fadeIn">
                  {layer.desc}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
