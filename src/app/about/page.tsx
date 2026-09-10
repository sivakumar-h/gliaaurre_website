import React from "react";
import type { Metadata } from "next";
import { ArrowUpRight, Cpu, Layers, Radio, Sparkles, Target, Zap } from "lucide-react";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { SystemStackVisual } from "@/components/SystemStackVisual";
import { SpotlightCard } from "@/components/SpotlightCard";
import { ParticleDataStreamBackground } from "@/components/SectionBackgrounds";
import { EvolvingAboutVisual } from "@/components/EvolvingAboutVisual";
import { FoundationVisual } from "@/components/AboutFoundationVisuals";

export const metadata: Metadata = {
  title: "About",
  description:
    "GliaAurre is an engineering-driven technology company working at the intersection of hardware, software, signal processing, and intelligent systems.",
};

const FOUNDATIONS = [
  {
    step: "01",
    title: "Who We Are",
    desc: "We are a team of engineers, signal architects, and system builders. We work directly across the boundaries of acoustic physics, mixed-signal hardware, and computational algorithms to create medical diagnostic tools of uncompromised clarity.",
    badge: "PHYSICS & SILICON",
    accentColor: "border-accent-cyan/40 text-accent-cyan",
  },
  {
    step: "02",
    title: "What Drives Us",
    desc: "Medical imaging has long been burdened by an artificial compromise: accessible tools lack precision, while high-clarity systems remain prohibitive and cumbersome. We are driven to eliminate this false dichotomy through fundamental engineering rigor.",
    badge: "PURPOSE",
    accentColor: "border-emerald-500/40 text-emerald-400",
  },
  {
    step: "03",
    title: "How We Think",
    desc: "We approach every challenge from first principles. Rather than adding layers of superfluous features, we strip away friction, minimize acoustic noise, and respect the reality of demanding clinical environments.",
    badge: "FIRST PRINCIPLES",
    accentColor: "border-amber-500/40 text-amber-400",
  },
  {
    step: "04",
    title: "Our Approach",
    desc: "Full-stack co-design. By engineering transducer physics, analog front-ends, low-power processing architectures, and intelligent reconstruction algorithms simultaneously, we achieve precision without over-engineering.",
    badge: "CO-DESIGN",
    accentColor: "border-white/40 text-white",
  },
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Dynamic ambient particle background */}
      <ParticleDataStreamBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-24 sm:space-y-36 pb-24">
        {/* 1. HERO / CORE STATEMENT */}
        <section className="space-y-8 max-w-4xl">
          <SectionHeading
            badge="ABOUT // GLIAAURRE"
            title="Engineering-driven technology working at the intersection of physical signal and intelligence."
          />

          <div className="border-l-2 border-accent-cyan/60 pl-6 sm:pl-8 py-4 bg-surface-50/70 backdrop-blur-md rounded-r-xl border-y border-r border-border-subtle shadow-xl">
            <p className="text-lg sm:text-2xl text-slate-200 font-light leading-relaxed">
              “GliaAurre is an engineering-driven technology company working at the intersection of hardware, software, signal processing, and intelligent systems.”
            </p>
          </div>
        </section>

        {/* 2. INTERACTIVE EVOLVING ARCHITECTURE VISUALIZER */}
        <section className="space-y-8">
          <div className="border-b border-border-subtle pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionHeading
              badge="01 // EVOLVING SYSTEM ARCHITECTURE"
              title="From First Principles to Clinical Clarity"
              subtitle="Step through the four pillars of our engineering methodology."
            />
            <span className="text-xs font-mono text-slate-400">
              DISCIPLINES: ACOUSTICS / SILICON / DSP
            </span>
          </div>

          <EvolvingAboutVisual />
        </section>

        {/* 3. THE FOUR FOUNDATIONS */}
        <section className="space-y-12">
          <div className="border-b border-border-subtle pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionHeading
              badge="FOUNDATIONS"
              title="How We Operate"
              subtitle="Grounding deep-tech innovation in empirical physics and clinical utility."
            />
            <span className="text-xs font-mono text-slate-400">
              CORE PRINCIPLES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FOUNDATIONS.map((item) => (
              <SpotlightCard
                key={item.step}
                className="p-8 sm:p-10 space-y-5 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-10 h-10 rounded-lg border bg-surface-200 flex items-center justify-center font-mono text-xs font-semibold ${item.accentColor}`}
                    >
                      {item.step}
                    </div>
                    <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded border border-border-subtle bg-surface-200 text-slate-400 uppercase">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <FoundationVisual step={item.step} />
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* 4. MULTIDISCIPLINARY CO-DESIGN STACK */}
        <section className="border border-border-medium bg-surface-50/70 backdrop-blur-xl rounded-2xl p-6 sm:p-12 space-y-10 shadow-2xl">
          <div className="max-w-3xl space-y-3">
            <SectionHeading
              badge="02 // FULL-STACK CO-DESIGN"
              title="The Intersection of Signal and Intelligence"
              subtitle="Explore each tier to understand how our hardware and algorithms operate synchronously."
            />
          </div>

          <SystemStackVisual />
        </section>

        {/* 5. CALL TO ACTION */}
        <section className="border-t border-border-subtle pt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-light text-white">
              Connect with Our Engineering Team
            </h3>
            <p className="text-xs font-mono text-slate-400">
              TECHNICAL INQUIRIES // RESEARCH & CLINICAL COLLABORATION
            </p>
          </div>

          <Button
            href="/contact"
            variant="primary"
            size="lg"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Get in Touch
          </Button>
        </section>
      </div>
    </div>
  );
}