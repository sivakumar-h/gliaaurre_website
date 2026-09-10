"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Clock,
  Compass,
  Cpu,
  Layers,
  MapPin,
  Radio,
  Sparkles,
  Terminal,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { JOB_OPENINGS, JobOpening } from "@/lib/careers-data";
import { JobApplicationModal } from "@/components/JobApplicationModal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { CareersConstellationBackground } from "@/components/CareersConstellationBackground";
import { EngineeringResonanceVisual } from "@/components/EngineeringResonanceVisual";
import { cn } from "@/lib/utils";

const DEPARTMENTS = [
  "All Disciplines",
  "Acoustics & Hardware",
  "Silicon & Electronics",
  "Firmware & Algorithms",
  "Imaging & Intelligence",
  "Embedded & Systems",
  "Mechanical & Industrial",
];

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All Disciplines");
  const [expandedJobId, setExpandedJobId] = useState<string | null>("acoustic-transducer-lead");
  const [modalOpen, setModalOpen] = useState(false);
  const [targetJob, setTargetJob] = useState<JobOpening | null>(null);

  const filteredJobs =
    selectedDepartment === "All Disciplines"
      ? JOB_OPENINGS
      : JOB_OPENINGS.filter((job) => job.department === selectedDepartment);

  const handleOpenModal = (job?: JobOpening) => {
    setTargetJob(job || null);
    setModalOpen(true);
  };

  const toggleExpand = (id: string) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Dynamic ambient constellation background */}
      <CareersConstellationBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-24 sm:space-y-36 pb-24">
        {/* 1. HERO SECTION */}
        <section className="space-y-8 max-w-4xl">
          <SectionHeading
            badge="GLIAAURRE // INVITATION"
            title="Join the Quiet Revolution"
          />

          <div className="space-y-6 text-base sm:text-xl text-slate-300 font-light leading-relaxed">
            <p className="text-white font-normal text-2xl sm:text-4xl leading-tight">
              Great engineering doesn’t need to shout.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-white to-slate-300">
                It speaks for itself.
              </span>
            </p>
            <p className="text-slate-400 max-w-3xl">
              We’re rebuilding medical ultrasound from signal to silicon. If you’re a thinker, tinkerer, explorer, or quiet rebel, come build the future of clarity with us.
            </p>
          </div>
        </section>

        {/* 2. "IS THIS YOU?" SECTION WITH RESONANCE METER */}
        <section>
          <SpotlightCard className="p-8 sm:p-14 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/5 blur-3xl pointer-events-none rounded-full" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 text-[11px] font-mono tracking-widest uppercase border border-border-subtle bg-surface-200/80 text-accent-cyan">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
                  <span>ALIGNMENT CRITERIA</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-light text-white leading-tight">
                  Is This You?
                </h2>

                <div className="border-l-2 border-accent-cyan/60 pl-6 sm:pl-8 py-3 bg-surface-50/50 rounded-r-xl border-y border-r border-border-subtle space-y-4">
                  <p className="text-base sm:text-xl text-slate-200 font-light leading-relaxed">
                    “You think in bandwidth and battery life. You work at the edge of signal, structure, or silicon. You see devices not as machines, but as extensions of clinical decision-making.”
                  </p>
                  <p className="text-white font-medium text-base sm:text-lg">
                    If that’s you, we’re probably already building toward the same thing.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => handleOpenModal(JOB_OPENINGS[0])}
                    icon={<ArrowUpRight className="w-4 h-4" />}
                  >
                    Apply for an Opening
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => handleOpenModal()}
                    icon={<UserCheck className="w-4 h-4" />}
                  >
                    General Application
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <EngineeringResonanceVisual />
              </div>
            </div>
          </SpotlightCard>
        </section>

        {/* 3. CURRENT JOB OPENINGS DIRECTORY */}
        <section id="openings" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border-subtle pb-6">
            <SectionHeading
              badge="02 // ACTIVE ROLES"
              title="Engineering Openings"
              subtitle="Explore our active technical disciplines. Click any role to review responsibilities and submit your application."
            />
            <div className="text-xs font-mono text-slate-400">
              SHOWING {filteredJobs.length} OF {JOB_OPENINGS.length} ROLES
            </div>
          </div>

          {/* Department Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {DEPARTMENTS.map((dept) => {
              const isActive = selectedDepartment === dept;
              return (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={cn(
                    "px-4 py-2 text-xs font-mono tracking-wider rounded-lg border transition-all duration-200",
                    isActive
                      ? "bg-surface-200 border-accent-cyan/60 text-accent-cyan font-medium shadow-sm"
                      : "bg-surface-50 border-border-subtle text-slate-400 hover:text-white hover:border-border-medium"
                  )}
                >
                  {dept}
                </button>
              );
            })}
          </div>

          {/* Job Listings with Motion */}
          <div className="space-y-4 pt-4">
            <AnimatePresence>
              {filteredJobs.map((job) => {
                const isExpanded = expandedJobId === job.id;

                return (
                  <SpotlightCard
                    key={job.id}
                    className={cn(
                      "p-0 transition-all duration-300",
                      isExpanded ? "border-accent-cyan/50 shadow-2xl shadow-black/50" : ""
                    )}
                  >
                    {/* Card Header Row */}
                    <div
                      onClick={() => toggleExpand(job.id)}
                      className="p-6 sm:p-8 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
                    >
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded border border-border-subtle bg-surface-200 text-accent-cyan">
                            {job.department}
                          </span>
                          <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                            <MapPin className="w-3.5 h-3.5 text-slate-500" />
                            {job.location}
                          </span>
                          <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                            <Clock className="w-3.5 h-3.5 text-slate-500" />
                            {job.type}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                          {job.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-300 font-light max-w-3xl leading-relaxed">
                          {job.summary}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 self-start sm:self-center flex-shrink-0">
                        <Button
                          variant={isExpanded ? "primary" : "secondary"}
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenModal(job);
                          }}
                          icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                        >
                          Apply Now
                        </Button>

                        <button
                          type="button"
                          aria-label="Toggle details"
                          className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-surface-200 transition-colors"
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Expanded Detail Drawer */}
                    {isExpanded && (
                      <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-border-subtle space-y-6 bg-surface-50/50">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                          {/* Responsibilities */}
                          <div className="space-y-3 bg-surface-100/80 p-6 rounded-xl border border-border-subtle">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                              Key Responsibilities
                            </h4>
                            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                              {job.responsibilities.map((resp, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-accent-cyan font-mono mt-0.5">›</span>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Qualifications */}
                          <div className="space-y-3 bg-surface-100/80 p-6 rounded-xl border border-border-subtle">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                              Qualifications & Mindset
                            </h4>
                            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                              {job.qualifications.map((qual, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-emerald-400 font-mono mt-0.5">›</span>
                                  <span>{qual}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Action Row */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-border-subtle">
                          <div className="text-[11px] font-mono text-slate-400">
                            DIRECT SUBMISSION // RESUME (PDF/DOC) REQUIRED
                          </div>

                          <Button
                            variant="primary"
                            size="md"
                            onClick={() => handleOpenModal(job)}
                            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                          >
                            Apply For This Position
                          </Button>
                        </div>
                      </div>
                    )}
                  </SpotlightCard>
                );
              })}
            </AnimatePresence>
          </div>
        </section>

        {/* 4. GENERAL APPLICATION / QUIET REBELS CTA */}
        <section className="border-t border-border-subtle pt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-light text-white">
              Don’t see your exact role listed?
            </h3>
            <p className="text-xs font-mono text-slate-400">
              WE ARE ALWAYS OPEN TO EXCEPTIONAL TALENT ACROSS HARDWARE, SILICON, AND ALGORITHMS
            </p>
          </div>

          <Button
            variant="outline"
            size="lg"
            onClick={() => handleOpenModal()}
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Submit Open Application
          </Button>
        </section>

        {/* Application Form Modal */}
        <JobApplicationModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          selectedJob={targetJob}
        />
      </div>
    </div>
  );
}