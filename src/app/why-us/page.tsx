import React from "react";
import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2, Sliders, Cpu, Shield, Zap, Layers, Activity } from "lucide-react";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { SpotlightCard } from "@/components/SpotlightCard";
import { CircuitTraceBackground } from "@/components/SectionBackgrounds";
import { PhilosophyScrollBuilder } from "@/components/PhilosophyScrollBuilder";
import { PillarVisual } from "@/components/WhyUsPillarVisuals";

export const metadata: Metadata = {
  title: "Why Us",
  description:
    "Discover GliaAurre’s engineering philosophy: Built around the problem, from signal to silicon, with precision without over-engineering.",
};

const PHILOSOPHY_SECTIONS = [
  {
    badge: "01 // PROBLEM DEFINITION",
    title: "Built Around the Problem",
    icon: Shield,
    description:
      "Traditional medical devices often start from legacy blueprints and stack incremental complexity on top. We start from the physical reality: the patient, the clinician’s diagnostic workflow, and the fundamental physics of sound propagation in tissue.",
    points: [
      "No unnecessary ornamentation or legacy baggage.",
      "Grounded in real diagnostic constraints from day zero.",
      "Designed for clinical focus and immediate clarity.",
    ],
  },
  {
    badge: "02 // END-TO-END CO-DESIGN",
    title: "From Signal to Silicon",
    icon: Zap,
    description:
      "Acoustic imaging cannot be solved in software alone, nor solely in transducers. True clarity requires deep cohesion between piezoelectric properties, low-noise analog signal conditioning, and custom processing architecture.",
    points: [
      "Direct acoustic-to-digital signal chain optimization.",
      "Ultra-low noise floor for subtle tissue harmonic preservation.",
      "High instantaneous bandwidth without thermal throttling.",
    ],
  },
  {
    badge: "03 // UNIFIED PARADIGM",
    title: "Hardware Meets Software",
    icon: Layers,
    description:
      "Instead of running generic algorithms on off-the-shelf boards, we build hardware and computational algorithms as a single cohesive unit. The hardware is designed for the algorithms; the algorithms extract the maximum physical potential of the hardware.",
    points: [
      "Synchronous synthetic aperture beamforming.",
      "Minimal round-trip latency from transducer to screen.",
      "Dynamic computational noise reduction.",
    ],
  },
  {
    badge: "04 // WORKFLOW RIGOR",
    title: "Designed Around Real-World Use",
    icon: Sliders,
    description:
      "A tool is only as good as its utility under pressure. We design for responsiveness, ergonomics, and seamless clinical interaction, ensuring the practitioner can focus entirely on patient care rather than battling the device.",
    points: [
      "Instant-on readiness and intuitive operation.",
      "Balanced ergonomics crafted for extended clinical sessions.",
      "Resilient performance in diverse healthcare settings.",
    ],
  },
  {
    badge: "05 // CORE ETHOS",
    title: "Precision Without Over-Engineering",
    icon: Cpu,
    description:
      "More complexity is not better engineering. True sophistication is the discipline to make something powerful yet quiet, intricate yet effortless, and mathematically rigorous without unnecessary bloat.",
    points: [
      "Careful feature selection driven by clinical value.",
      "Lean, high-efficiency compute architecture.",
      "Built with care, precision, and lasting intent.",
    ],
  },
];

const COMPARISON_ROWS = [
  {
    dimension: "System Architecture",
    traditional: "Fragmented discrete modules with legacy interconnects",
    gliaaurre: "Co-designed from transducer signal to processing silicon",
  },
  {
    dimension: "Cost vs. Clarity Trade-off",
    traditional: "Lower cost forces compromised diagnostic clarity",
    gliaaurre: "Rebuilt mathematical and silicon equations to bend trade-offs",
  },
  {
    dimension: "Latency & Compute",
    traditional: "Heavy post-processing bottlenecks and thermal constraints",
    gliaaurre: "Real-time, low-power synchronous synthetic beamforming",
  },
  {
    dimension: "Clinical Experience",
    traditional: "Cluttered interfaces with steep cognitive overhead",
    gliaaurre: "Pure, focused interaction designed around diagnostic reality",
  },
];

export default function WhyUsPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Dynamic ambient circuit trace background */}
      <CircuitTraceBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-24 sm:space-y-36 pb-24">
        {/* 1. HERO */}
        <section className="space-y-8 max-w-4xl">
          <SectionHeading
            badge="ENGINEERING PHILOSOPHY"
            title="Why GliaAurre"
            subtitle="We reject the status quo where clarity is held hostage by cost and complexity."
          />
          <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed">
            At GliaAurre, we don’t measure progress by feature count. We measure it by the purity of the signal, the clarity of the result, and how seamlessly our technology serves clinical decision-making.
          </p>
        </section>

        {/* 2. INTERACTIVE PHILOSOPHY ASSEMBLER */}
        <section className="space-y-8">
          <div className="border-b border-border-subtle pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionHeading
              badge="01 // ASSEMBLED ARCHITECTURE"
              title="Interactive Engineering Tenets"
              subtitle="Explore the five synchronized tiers defining our diagnostic instrument."
            />
            <span className="text-xs font-mono text-slate-400">
              FRAMEWORK // 5-TIER COHESION
            </span>
          </div>

          <PhilosophyScrollBuilder />
        </section>

        {/* 3. THE FIVE PILLARS DETAILED BREAKDOWN */}
        <section className="space-y-16">
          <div className="border-b border-border-subtle pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionHeading
              badge="FIRST PRINCIPLES"
              title="Detailed Tenet Analysis"
              subtitle="Five foundational tenets guiding every hardware schematic and algorithm."
            />
            <span className="text-xs font-mono text-slate-400">
              FRAMEWORK // ZERO OVER-ENGINEERING
            </span>
          </div>

          <div className="space-y-8">
            {PHILOSOPHY_SECTIONS.map((sec) => {
              const Icon = sec.icon;
              return (
                <SpotlightCard
                  key={sec.title}
                  className="p-6 sm:p-12 relative overflow-hidden group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-5 space-y-5">
                      <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest text-accent-cyan uppercase">
                        <span>{sec.badge}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg border border-border-medium bg-surface-200 flex items-center justify-center text-white">
                          <Icon className="w-5 h-5 text-accent-cyan" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                          {sec.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                        {sec.description}
                      </p>
                      <PillarVisual badge={sec.badge} />
                    </div>

                    <div className="lg:col-span-7 bg-surface-50/90 border border-border-subtle p-6 sm:p-8 rounded-xl space-y-4 shadow-md">
                      <div className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">
                        // TECHNICAL IMPLICATIONS
                      </div>
                      <div className="space-y-3">
                        {sec.points.map((pt, i) => (
                          <div key={i} className="flex items-start gap-3 text-sm text-slate-200 font-light">
                            <CheckCircle2 className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </section>

        {/* 4. PARADIGM COMPARISON TABLE */}
        <section className="space-y-8">
          <div className="border-b border-border-subtle pb-6">
            <SectionHeading
              badge="02 // PARADIGM SHIFT"
              title="Rethinking the Equation"
              subtitle="Comparing conventional ultrasound trade-offs with GliaAurre’s full-stack approach."
            />
          </div>

          <SpotlightCard className="rounded-2xl overflow-hidden shadow-2xl p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm font-mono border-collapse">
                <thead>
                  <tr className="border-b border-border-subtle bg-surface-200/80 text-slate-300">
                    <th className="p-4 sm:p-6 w-1/4 uppercase tracking-wider text-xs">Dimension</th>
                    <th className="p-4 sm:p-6 w-3/8 uppercase tracking-wider text-slate-400 text-xs">Traditional Systems</th>
                    <th className="p-4 sm:p-6 w-3/8 uppercase tracking-wider text-accent-cyan text-xs">GliaAurre Paradigm</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle">
                  {COMPARISON_ROWS.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 sm:p-6 font-semibold text-white">
                        {row.dimension}
                      </td>
                      <td className="p-4 sm:p-6 text-slate-400 font-sans font-light">
                        {row.traditional}
                      </td>
                      <td className="p-4 sm:p-6 text-slate-100 font-sans font-normal bg-accent-cyan/[0.04]">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-accent-cyan flex-shrink-0" />
                          <span>{row.gliaaurre}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SpotlightCard>
        </section>

        {/* 5. CALL TO ACTION */}
        <section className="border-t border-border-subtle pt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-light text-white">Ready to explore collaboration?</h3>
            <p className="text-xs font-mono text-slate-400">
              CONNECT WITH OUR ENGINEERING & ARCHITECTURE TEAM
            </p>
          </div>

          <Button
            href="/contact"
            variant="primary"
            size="lg"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Start a Conversation
          </Button>
        </section>
      </div>
    </div>
  );
}