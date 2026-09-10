"use client";

import React, { useState } from "react";
import { Activity, Cpu, Layers, Radio } from "lucide-react";
import { cn } from "@/lib/utils";

export function AcousticVisual() {
  const [activeTab, setActiveTab] = useState<"signal" | "beam" | "spectrum">("signal");

  return (
    <div className="w-full border border-border-medium bg-surface-100/80 backdrop-blur-md rounded-lg overflow-hidden shadow-2xl shadow-black/40">
      {/* Header bar with tabs & telemetry */}
      <div className="flex items-center justify-between border-b border-border-subtle px-4 py-3 bg-surface-50">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan/80 animate-pulse" />
          <span className="text-[11px] font-mono tracking-widest text-slate-300 uppercase">
            GLIA-RECON // TELEMETRY
          </span>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-1 bg-surface-200/60 p-1 rounded border border-border-subtle">
          <button
            onClick={() => setActiveTab("signal")}
            className={cn(
              "px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded transition-colors",
              activeTab === "signal"
                ? "bg-white/10 text-accent-cyan font-medium"
                : "text-slate-400 hover:text-slate-200"
            )}
          >
            RF Carrier
          </button>
          <button
            onClick={() => setActiveTab("beam")}
            className={cn(
              "px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded transition-colors",
              activeTab === "beam"
                ? "bg-white/10 text-accent-cyan font-medium"
                : "text-slate-400 hover:text-slate-200"
            )}
          >
            Beamform
          </button>
          <button
            onClick={() => setActiveTab("spectrum")}
            className={cn(
              "px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded transition-colors",
              activeTab === "spectrum"
                ? "bg-white/10 text-accent-cyan font-medium"
                : "text-slate-400 hover:text-slate-200"
            )}
          >
            Spectrum
          </button>
        </div>
      </div>

      {/* Visual Canvas Area */}
      <div className="relative h-64 sm:h-72 p-6 flex flex-col justify-between tech-grid-fine overflow-hidden">
        {/* Dynamic Visual Content */}
        {activeTab === "signal" && (
          <div className="w-full h-full flex flex-col justify-center space-y-4">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>BANDWIDTH DENSITY: OPTIMAL</span>
              <span className="text-accent-cyan">SNR GAIN: +18.4 dB</span>
            </div>

            {/* SVG Waveform Line */}
            <div className="relative w-full h-32 flex items-center">
              <svg className="w-full h-full" viewBox="0 0 500 120" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                {/* Reference Baseline */}
                <line x1="0" y1="60" x2="500" y2="60" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
                
                {/* Dynamic Synthetic RF Wave Path */}
                <path
                  d="M0,60 Q50,60 100,58 T200,45 T250,15 T300,105 T350,25 T400,65 T450,60 L500,60"
                  fill="none"
                  stroke="url(#waveGrad)"
                  strokeWidth="2.5"
                  className="transition-all duration-700"
                />
                
                {/* Secondary Harmonic Wave */}
                <path
                  d="M0,60 Q70,60 150,55 T230,35 T270,85 T310,40 T370,68 T430,60 L500,60"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1.2"
                  strokeDasharray="3 3"
                />
              </svg>
            </div>

            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
              <span>0.0 µs</span>
              <span>PULSE DURATION: 1.2 µs</span>
              <span>2.4 µs</span>
            </div>
          </div>
        )}

        {activeTab === "beam" && (
          <div className="w-full h-full flex flex-col justify-center items-center space-y-4">
            <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>PHASED ARRAY APERTURE</span>
              <span className="text-emerald-400">STEERING: 0.0° NOMINAL</span>
            </div>

            {/* Phased Array Vectors SVG */}
            <div className="w-full h-32 flex items-center justify-center">
              <svg className="w-full h-full max-w-sm" viewBox="0 0 300 120">
                {/* Center Focal Ray */}
                <line x1="150" y1="110" x2="150" y2="10" stroke="#00E5FF" strokeWidth="2" />
                <line x1="150" y1="110" x2="100" y2="20" stroke="rgba(0,229,255,0.4)" strokeWidth="1" />
                <line x1="150" y1="110" x2="200" y2="20" stroke="rgba(0,229,255,0.4)" strokeWidth="1" />
                <line x1="150" y1="110" x2="60" y2="40" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="150" y1="110" x2="240" y2="40" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 2" />

                {/* Transducer Base Elements */}
                {Array.from({ length: 15 }).map((_, i) => (
                  <rect
                    key={i}
                    x={60 + i * 12}
                    y={110}
                    width={8}
                    height={6}
                    fill={i === 7 ? "#00E5FF" : "rgba(255,255,255,0.25)"}
                  />
                ))}

                {/* Concentric wavefront arcs */}
                <path d="M100,50 A60,60 0 0,1 200,50" fill="none" stroke="rgba(0,229,255,0.5)" strokeWidth="1.5" />
                <path d="M80,30 A90,90 0 0,1 220,30" fill="none" stroke="rgba(0,229,255,0.3)" strokeWidth="1.2" />
              </svg>
            </div>

            <div className="text-[10px] font-mono text-slate-400">
              SYNTHETIC APERTURE FOCUSING // 128 CHANNELS COHERENT
            </div>
          </div>
        )}

        {activeTab === "spectrum" && (
          <div className="w-full h-full flex flex-col justify-center space-y-4">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>FREQUENCY DOMAIN SPECTRUM</span>
              <span className="text-accent-cyan">HARMONIC RECOVERY: ACTIVE</span>
            </div>

            {/* Spectrum Equalizer Bars */}
            <div className="h-32 flex items-end justify-between gap-1.5 px-2">
              {[15, 28, 45, 70, 95, 88, 76, 52, 38, 22, 14, 8].map((val, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full bg-gradient-to-t from-surface-200 to-accent-cyan/80 rounded-t-sm transition-all duration-500"
                    style={{ height: `${val}%` }}
                  />
                  <span className="text-[8px] font-mono text-slate-400">{idx * 2 + 2}M</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between text-[10px] font-mono text-slate-400">
              <span>CENTER: 7.5 MHz</span>
              <span>BANDWIDTH: -6dB FRACTIONAL 92%</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer telemetry */}
      <div className="grid grid-cols-3 border-t border-border-subtle bg-surface-50 text-[11px] font-mono divide-x divide-border-subtle">
        <div className="p-3 flex items-center gap-2 text-slate-400">
          <Activity className="w-3.5 h-3.5 text-accent-cyan" />
          <span>SAMPLING: 64 MSPS</span>
        </div>
        <div className="p-3 flex items-center gap-2 text-slate-400">
          <Radio className="w-3.5 h-3.5 text-emerald-400" />
          <span>NOISE FLOOR: -128 dB</span>
        </div>
        <div className="p-3 flex items-center gap-2 text-slate-400">
          <Cpu className="w-3.5 h-3.5 text-amber-400" />
          <span>LATENCY: &lt; 1 ms</span>
        </div>
      </div>
    </div>
  );
}
