"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * 1. CompromiseCurveVisual:
 * Illustrates traditional cost vs clarity trade-off vs GliaAurre's bent curve.
 */
export function CompromiseCurveVisual() {
  return (
    <div className="w-full h-24 relative flex items-center justify-center overflow-hidden rounded-lg bg-surface-200/40 border border-border-subtle p-2">
      <svg className="w-full h-full" viewBox="0 0 240 70">
        <line x1="20" y1="60" x2="220" y2="60" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="20" y1="10" x2="20" y2="60" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        {/* Traditional compromise curve */}
        <path
          d="M 25 55 Q 120 45 215 15"
          fill="none"
          stroke="rgba(148,163,184,0.35)"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        {/* GliaAurre Bending the Curve */}
        <path
          d="M 25 55 Q 60 18 215 12"
          fill="none"
          stroke="#00E5FF"
          strokeWidth="2"
        />
        <circle cx="120" cy="18" r="3.5" fill="#00E5FF" className="animate-pulse" />
        <text x="25" y="67" fill="#64748B" fontSize="7" fontFamily="monospace">LOW COST</text>
        <text x="215" y="67" fill="#64748B" fontSize="7" fontFamily="monospace" textAnchor="end">HIGH COST</text>
        <text x="125" y="14" fill="#00E5FF" fontSize="7" fontFamily="monospace">GLIAAURRE CLARITY</text>
      </svg>
    </div>
  );
}

/**
 * 2. TransducerApertureVisual:
 * 8-element piezoelectric array emitting synchronized acoustic pulses.
 */
export function TransducerApertureVisual() {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse((p) => (p + 1) % 100);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-24 relative flex items-center justify-center overflow-hidden rounded-lg bg-surface-200/40 border border-border-subtle p-2">
      <svg className="w-full h-full" viewBox="0 0 240 70">
        {/* Transducer Array Elements */}
        {Array.from({ length: 8 }).map((_, i) => {
          const x = 30 + i * 26;
          return (
            <g key={i}>
              <rect x={x} y="15" width="18" height="8" rx="2" fill="rgba(0,229,255,0.2)" stroke="#00E5FF" strokeWidth="1" />
              {/* Emitted Wavefront Arc */}
              <path
                d={`M ${x - 4} 30 Q ${x + 9} ${38 + (pulse % 20)} ${x + 22} 30`}
                fill="none"
                stroke={`rgba(0, 229, 255, ${0.8 - (pulse % 20) / 25})`}
                strokeWidth="1.2"
              />
            </g>
          );
        })}
        <text x="120" y="62" fill="#00E5FF" fontSize="7.5" fontFamily="monospace" textAnchor="middle">
          128-CH ACOUSTIC PHASED APERTURE
        </text>
      </svg>
    </div>
  );
}

/**
 * 3. SiliconDataBusVisual:
 * Digital synchronous data streams flowing through ASIC processing matrix.
 */
export function SiliconDataBusVisual() {
  return (
    <div className="w-full h-24 relative flex items-center justify-center overflow-hidden rounded-lg bg-surface-200/40 border border-border-subtle p-2">
      <svg className="w-full h-full" viewBox="0 0 240 70">
        {/* Silicon Bus Lines */}
        {Array.from({ length: 5 }).map((_, i) => {
          const y = 14 + i * 11;
          return (
            <g key={i}>
              <line x1="20" y1={y} x2="220" y2={y} stroke="rgba(16,185,129,0.2)" strokeWidth="1" />
              <circle cx={40 + (i * 42) % 160} cy={y} r="2.5" fill="#10B981" />
              <line x1={80 + i * 20} y1={y - 4} x2={80 + i * 20} y2={y + 4} stroke="rgba(16,185,129,0.5)" strokeWidth="1" />
            </g>
          );
        })}
        <rect x="180" y="16" width="36" height="38" rx="3" fill="rgba(19,22,28,0.8)" stroke="#10B981" strokeWidth="1" />
        <text x="198" y="38" fill="#10B981" fontSize="7" fontFamily="monospace" textAnchor="middle">DSP</text>
        <text x="100" y="65" fill="#10B981" fontSize="7.5" fontFamily="monospace" textAnchor="middle">
          MONOLITHIC DSP SILICON BUS
        </text>
      </svg>
    </div>
  );
}

/**
 * 4. NoiseFloorVisual:
 * Ultra-low -132 dBFS noise floor vs harmonic peak.
 */
export function NoiseFloorVisual() {
  return (
    <div className="w-full h-24 relative flex items-center justify-center overflow-hidden rounded-lg bg-surface-200/40 border border-border-subtle p-2">
      <svg className="w-full h-full" viewBox="0 0 240 70">
        {/* Grid lines */}
        <line x1="20" y1="52" x2="220" y2="52" stroke="rgba(245,158,11,0.3)" strokeWidth="1" strokeDasharray="2 2" />
        {/* Low noise baseline */}
        <path
          d="M 20 52 L 40 50 L 60 53 L 80 51 L 100 52 L 120 14 L 140 52 L 160 50 L 180 53 L 200 51 L 220 52"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="1.5"
        />
        <circle cx="120" cy="14" r="3" fill="#F59E0B" />
        <text x="25" y="47" fill="#64748B" fontSize="6.5" fontFamily="monospace">-132 dBFS NOISE FLOOR</text>
        <text x="125" y="12" fill="#F59E0B" fontSize="7" fontFamily="monospace">+18.4 dB SNR PEAK</text>
        <text x="120" y="65" fill="#F59E0B" fontSize="7.5" fontFamily="monospace" textAnchor="middle">
          SUB-HARMONIC PRESERVATION
        </text>
      </svg>
    </div>
  );
}

/**
 * 5. TalentConstellationVisual:
 * Interactive glowing node network for careers teaser.
 */
export function TalentConstellationVisual() {
  return (
    <div className="w-full h-36 relative flex items-center justify-center overflow-hidden rounded-xl bg-surface-100/60 border border-border-subtle">
      <svg className="w-full h-full" viewBox="0 0 280 120">
        {/* Constellation Nodes */}
        <g stroke="rgba(0,229,255,0.25)" strokeWidth="1">
          <line x1="40" y1="60" x2="90" y2="30" />
          <line x1="90" y1="30" x2="160" y2="40" />
          <line x1="160" y1="40" x2="230" y2="25" />
          <line x1="90" y1="30" x2="120" y2="85" />
          <line x1="160" y1="40" x2="190" y2="90" />
          <line x1="120" y1="85" x2="190" y2="90" />
          <line x1="190" y1="90" x2="250" y2="75" />
        </g>
        {/* Glow circles */}
        <circle cx="40" cy="60" r="4" fill="#00E5FF" />
        <circle cx="90" cy="30" r="5" fill="#10B981" />
        <circle cx="160" cy="40" r="6" fill="#00E5FF" />
        <circle cx="230" cy="25" r="4" fill="#F59E0B" />
        <circle cx="120" cy="85" r="4.5" fill="#FFFFFF" />
        <circle cx="190" cy="90" r="5" fill="#00E5FF" />
        <circle cx="250" cy="75" r="3.5" fill="#10B981" />
        <text x="90" y="20" fill="#94A3B8" fontSize="7" fontFamily="monospace" textAnchor="middle">ACOUSTICS</text>
        <text x="160" y="30" fill="#94A3B8" fontSize="7" fontFamily="monospace" textAnchor="middle">SILICON</text>
        <text x="190" y="105" fill="#94A3B8" fontSize="7" fontFamily="monospace" textAnchor="middle">ALGORITHMS</text>
      </svg>
    </div>
  );
}

/**
 * 6. TransmissionRadarVisual:
 * Concentric animated pulses for final CTA transmission beacon.
 */
export function TransmissionRadarVisual() {
  return (
    <div className="w-32 h-32 mx-auto relative flex items-center justify-center pointer-events-none">
      <div className="absolute w-28 h-28 rounded-full border border-accent-cyan/20 animate-ping" />
      <div className="absolute w-20 h-20 rounded-full border border-accent-cyan/30" />
      <div className="absolute w-12 h-12 rounded-full border border-accent-cyan/50" />
      <div className="w-3 h-3 rounded-full bg-accent-cyan shadow-lg shadow-accent-cyan/80 animate-pulse" />
    </div>
  );
}