import React, { Suspense } from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { SpotlightCard } from "@/components/SpotlightCard";
import { ContactSignalMesh } from "@/components/ContactSignalMesh";
import { EngineeringResonanceVisual } from "@/components/EngineeringResonanceVisual";
import { Lock, ShieldCheck, Zap, Radio } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the GliaAurre team. Submit inquiries regarding clinical partnerships, technology, investment, or quiet exploration.",
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Interactive cursor-reactive signal mesh */}
      <ContactSignalMesh />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16 pb-24">
        {/* 1. HERO HEADER */}
        <section className="max-w-3xl space-y-4">
          <SectionHeading
            badge="GLIAAURRE // DIRECT COMM"
            title="Start a Conversation"
            subtitle="Whether you are exploring technical collaboration, investment, clinical dialogue, or joining our engineering team, reach out below."
          />
        </section>

        {/* 2. FORM & REASSURANCE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-12 text-center text-xs font-mono text-slate-400">Loading secure gateway...</div>}>
              <ContactForm />
            </Suspense>
          </div>

          {/* Reassurance & Direct Channel Column */}
          <div className="lg:col-span-5 space-y-6">
            <SpotlightCard className="p-8 sm:p-10 space-y-6">
              <h3 className="text-xs font-mono tracking-widest text-slate-200 uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
                DIRECT ENGINEERING CHANNEL
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Every message submitted through this secure gateway is routed directly to our core engineering and leadership team. We respect your time and respond with clarity.
              </p>

              <div className="space-y-4 pt-3 border-t border-border-subtle text-xs text-slate-400">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-200 font-medium font-mono">Confidentiality:</strong> All technical communications and institutional discussions are handled with strict discretion.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Lock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-200 font-medium font-mono">Direct Contact:</strong> We do not route through third-party recruiters or sales intermediaries.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-200 font-medium font-mono">Timely Response:</strong> We review incoming transmissions systematically and reply with care.
                  </span>
                </div>
              </div>
            </SpotlightCard>

            <EngineeringResonanceVisual />

            <div className="p-4 rounded-xl border border-border-subtle bg-surface-100/40 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>GATEWAY STATUS: ENCRYPTED & ACTIVE</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}