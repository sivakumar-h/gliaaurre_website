import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Radio,
  ShieldCheck,
  Sparkles,
  Zap,
  Activity,
  Layers,
  Sliders,
} from "lucide-react";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { AcousticField3D } from "@/components/AcousticField3D";
import { SignalEvolutionStory } from "@/components/SignalEvolutionStory";
import { SignalToSiliconScrollJourney } from "@/components/SignalToSiliconScrollJourney";
import { HardwareSoftwareMerge } from "@/components/HardwareSoftwareMerge";
import { SpotlightCard } from "@/components/SpotlightCard";
import { AcousticSpine } from "@/components/AcousticSpine";
import {
  CompromiseCurveVisual,
  TransducerApertureVisual,
  SiliconDataBusVisual,
  NoiseFloorVisual,
  TalentConstellationVisual,
  TransmissionRadarVisual,
} from "@/components/SectionCardVisuals";
import {
  GridWaveBackground,
  ParticleDataStreamBackground,
  CircuitTraceBackground,
  AcousticInterferenceBackground,
} from "@/components/SectionBackgrounds";

export default function HomePage() {
  return (
    <div className="relative pb-24 overflow-hidden">
      {/* Narrative Acoustic Signal Spine Guide */}
      <AcousticSpine />

      <div className="space-y-28 sm:space-y-40">
        {/* 1. HERO SECTION WITH 3D WEBGL WAVEFIELD */}
        <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 overflow-hidden">
          {/* Interactive 3D Acoustic Wavefield Background */}
          <div className="absolute inset-0 z-0 opacity-60 mix-blend-screen pointer-events-auto">
            <AcousticField3D />
          </div>

          {/* Ambient Top Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent-cyan/10 blur-[140px] pointer-events-none rounded-full" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8 pointer-events-none">
            {/* Monospace Telemetry Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-medium bg-surface-100/90 backdrop-blur-md text-[11px] font-mono tracking-widest text-accent-cyan shadow-lg shadow-black/40 pointer-events-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
              <span>PRECISION MEDICAL SYSTEMS // DEEP-TECH</span>
            </div>

            {/* Large Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extralight tracking-tight text-white leading-[1.06] max-w-4xl mx-auto">
              Engineering the Future of{" "}
              <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                Clarity
              </span>
            </h1>

            {/* Supporting Statement */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
              Traditional systems are bulky, expensive, or misaligned with clinical realities. At GliaAurre, we’re crafting something precise — grounded in understanding, not over-engineering.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 pointer-events-auto">
              <Button
                href="/about"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore GliaAurre
              </Button>

              <Button
                href="/contact"
                variant="outline"
                size="lg"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Get in Touch
              </Button>
            </div>

            {/* Telemetry Indicator Readouts */}
            <div className="pt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto border-t border-border-subtle/60 text-[11px] font-mono text-slate-400">
              <div className="flex items-center justify-center gap-2">
                <span className="text-slate-500">DOMAIN:</span>
                <span className="text-slate-200">SIGNAL TO SILICON</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-slate-500">FOCUS:</span>
                <span className="text-slate-200">ULTRASOUND PHYSICS</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2">
                <span className="text-slate-500">ETHOS:</span>
                <span className="text-slate-200">ZERO OVER-ENGINEERING</span>
              </div>
            </div>

            {/* Downward Pulse Guide */}
            <div className="pt-4 flex flex-col items-center gap-1.5 text-slate-400 text-[10px] font-mono pointer-events-auto">
              <span>EXPLORE PIPELINE</span>
              <span className="w-1 h-4 rounded-full bg-accent-cyan/60 animate-bounce" />
            </div>
          </div>
        </section>

        {/* 2. WHAT WE'RE MAKING - CONTINUOUS WAVE PIPELINE */}
        <section id="what-were-making" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative">
          <GridWaveBackground />

          <div className="max-w-3xl space-y-4 relative z-10">
            <SectionHeading
              badge="01 // MISSION STATEMENT"
              title="What We're Making"
              subtitle="Rebuilding the acoustic imaging equation from first physical principles."
            />
          </div>

          {/* Core Message Cards with Integrated Micro-Visuals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <SpotlightCard className="p-6 sm:p-8 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-[10px] font-mono tracking-widest text-accent-cyan uppercase">
                  // 01. THE COMPROMISE
                </div>
                <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed">
                  Ultrasound today lives in a compromise: Lower cost often means lower clarity. Greater detail often demands deeper pockets. We’re rebuilding this equation.
                </p>
              </div>
              <CompromiseCurveVisual />
            </SpotlightCard>

            <SpotlightCard className="p-6 sm:p-8 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
                  // 02. FULL-STACK CRAFT
                </div>
                <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed">
                  From signal to silicon, from user experience to intelligence — we’re crafting a tool that bends these trade-offs without announcing itself.
                </p>
              </div>
              <SiliconDataBusVisual />
            </SpotlightCard>

            <SpotlightCard className="p-6 sm:p-8 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-[10px] font-mono tracking-widest text-white uppercase">
                  // 03. PURPOSEFUL INTENT
                </div>
                <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed">
                  It’s hardware. It’s software. It’s careful. And it’s being built like it always should’ve been.
                </p>
              </div>
              <TransducerApertureVisual />
            </SpotlightCard>
          </div>

          {/* 5-Stage Storytelling Pipeline */}
          <div className="pt-4 relative z-10">
            <SignalEvolutionStory />
          </div>
        </section>

        {/* 3. DEDICATED VISUAL JOURNEY: FROM SIGNAL TO SILICON */}
        <section id="signal-to-silicon" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative">
          <ParticleDataStreamBackground />

          <div className="max-w-3xl space-y-4 relative z-10">
            <SectionHeading
              badge="02 // THE JOURNEY"
              title="From Signal to Silicon"
              subtitle="Follow how a subtle acoustic pressure wave transforms into real-time diagnostic clarity."
            />
          </div>

          <div className="relative z-10">
            <SignalToSiliconScrollJourney />
          </div>
        </section>

        {/* 4. DEDICATED SECTION: HARDWARE + SOFTWARE CO-DESIGN */}
        <section id="co-design" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative">
          <CircuitTraceBackground />

          <div className="max-w-3xl space-y-4 relative z-10">
            <SectionHeading
              badge="03 // MONOLITHIC CO-DESIGN"
              title="It’s Hardware. It’s Software. It’s Careful."
              subtitle="Custom silicon engineered for algorithms; algorithms designed for the physical physics."
            />
          </div>

          <div className="relative z-10">
            <HardwareSoftwareMerge />
          </div>
        </section>

        {/* 5. CORE ARCHITECTURE PILLARS PREVIEW */}
        <section id="architecture" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative">
          <AcousticInterferenceBackground />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border-subtle pb-6 relative z-10">
            <SectionHeading
              badge="04 // ARCHITECTURE"
              title="Engineered Without Compromise"
              subtitle="Bridging raw acoustic physics with modern computational intelligence."
            />
            <Button
              href="/why-us"
              variant="outline"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Full Architecture
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <SpotlightCard className="p-6 sm:p-8 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded border border-accent-cyan/30 bg-accent-cyan/5 text-accent-cyan flex items-center justify-center font-mono text-xs">
                  <Radio className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium text-white">Built Around the Problem</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  Designed from ground-level clinical constraints rather than retrospective feature accumulation.
                </p>
              </div>
              <TransducerApertureVisual />
            </SpotlightCard>

            <SpotlightCard className="p-6 sm:p-8 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 flex items-center justify-center font-mono text-xs">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium text-white">From Signal to Silicon</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  End-to-end integration across transducer physics, custom RF front-ends, and real-time processing algorithms.
                </p>
              </div>
              <SiliconDataBusVisual />
            </SpotlightCard>

            <SpotlightCard className="p-6 sm:p-8 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded border border-amber-500/30 bg-amber-500/5 text-amber-400 flex items-center justify-center font-mono text-xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium text-white">Precision Without Over-Engineering</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  Relentless focus on signal purity, ultra-low latency, and tactile clinical reliability.
                </p>
              </div>
              <NoiseFloorVisual />
            </SpotlightCard>
          </div>
        </section>

        {/* 6. CAREERS TEASER */}
        <section id="careers-teaser" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ParticleDataStreamBackground />

          <SpotlightCard className="p-8 sm:p-14 relative overflow-hidden z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 text-[11px] font-mono tracking-widest uppercase border border-border-subtle bg-surface-200/80 text-accent-cyan">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
                  <span>05 // JOIN THE QUIET REVOLUTION</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight leading-snug">
                  Great engineering doesn’t shout.{" "}
                  <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-white to-slate-300">
                    It speaks for itself.
                  </span>
                </h2>

                <p className="text-slate-300 font-light text-base leading-relaxed">
                  We’re engineering a new standard of medical clarity from signal to silicon — and we’re building a team of thinkers, tinkerers, explorers, and quiet rebels.
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Button
                    href="/careers"
                    variant="primary"
                    size="md"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Explore Openings
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <TalentConstellationVisual />
              </div>
            </div>
          </SpotlightCard>
        </section>

        {/* 7. BOTTOM CTA */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative">
          <div className="border-t border-border-subtle pt-16 space-y-4">
            <TransmissionRadarVisual />

            <h2 className="text-2xl sm:text-3xl font-light text-white">
              Engineering the Future of Clarity
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto font-light">
              Direct your inquiry to our engineering team for technical, clinical, and collaborative conversations.
            </p>
            <div className="pt-4">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Start a Conversation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}