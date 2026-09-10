"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

const INQUIRY_OPTIONS = [
  "General Inquiry",
  "Partnership",
  "Investment",
  "Career",
  "Other",
] as const;

type InquiryType = (typeof INQUIRY_OPTIONS)[number];

interface FormData {
  name: string;
  email: string;
  organization: string;
  inquiryType: InquiryType;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  organization?: string;
  message?: string;
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    inquiryType: "General Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  useEffect(() => {
    if (initialType && INQUIRY_OPTIONS.includes(initialType as InquiryType)) {
      setFormData((prev) => ({ ...prev, inquiryType: initialType as InquiryType }));
    }
  }, [initialType]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.organization.trim()) {
      newErrors.organization = "Please specify your organization or affiliation.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to transmit message. Please try again.");
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      setServerError(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      organization: "",
      inquiryType: "General Inquiry",
      message: "",
    });
    setErrors({});
    setIsSuccess(false);
    setServerError(null);
  };

  if (isSuccess) {
    return (
      <div className="border border-border-medium bg-surface-100/90 backdrop-blur-md p-8 sm:p-10 rounded-lg text-center space-y-6 shadow-2xl">
        <div className="w-12 h-12 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-light text-foreground">
            Message Transmitted
          </h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            Thank you. We’ve received your message and will get back to you.
          </p>
        </div>

        <div className="pt-2">
          <Button variant="secondary" size="sm" onClick={handleReset}>
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-border-medium bg-surface-100/80 backdrop-blur-md p-6 sm:p-8 rounded-lg space-y-5 shadow-2xl"
    >
      {serverError && (
        <div className="p-4 rounded border border-red-500/30 bg-red-500/10 flex items-start gap-3 text-red-300 text-xs font-mono">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Name Field */}
      <div className="space-y-1.5">
        <label htmlFor="name" className="block text-xs font-mono tracking-wider text-slate-300 uppercase">
          Name <span className="text-accent-cyan">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g. Elena Vance"
          className={cn(
            "w-full px-4 py-2.5 bg-surface-50 border text-sm text-foreground placeholder:text-slate-600 rounded transition-colors focus:outline-none focus:ring-1 focus:ring-accent-cyan",
            errors.name ? "border-red-500/60" : "border-border-subtle hover:border-border-medium"
          )}
        />
        {errors.name && (
          <p className="text-[11px] font-mono text-red-400">{errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-1.5">
        <label htmlFor="email" className="block text-xs font-mono tracking-wider text-slate-300 uppercase">
          Email <span className="text-accent-cyan">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="name@domain.com"
          className={cn(
            "w-full px-4 py-2.5 bg-surface-50 border text-sm text-foreground placeholder:text-slate-600 rounded transition-colors focus:outline-none focus:ring-1 focus:ring-accent-cyan",
            errors.email ? "border-red-500/60" : "border-border-subtle hover:border-border-medium"
          )}
        />
        {errors.email && (
          <p className="text-[11px] font-mono text-red-400">{errors.email}</p>
        )}
      </div>

      {/* Organization Field */}
      <div className="space-y-1.5">
        <label htmlFor="organization" className="block text-xs font-mono tracking-wider text-slate-300 uppercase">
          Organization <span className="text-accent-cyan">*</span>
        </label>
        <input
          id="organization"
          type="text"
          value={formData.organization}
          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
          placeholder="Institution, Lab, Company, or Independent"
          className={cn(
            "w-full px-4 py-2.5 bg-surface-50 border text-sm text-foreground placeholder:text-slate-600 rounded transition-colors focus:outline-none focus:ring-1 focus:ring-accent-cyan",
            errors.organization ? "border-red-500/60" : "border-border-subtle hover:border-border-medium"
          )}
        />
        {errors.organization && (
          <p className="text-[11px] font-mono text-red-400">{errors.organization}</p>
        )}
      </div>

      {/* Inquiry Type Field */}
      <div className="space-y-1.5">
        <label htmlFor="inquiryType" className="block text-xs font-mono tracking-wider text-slate-300 uppercase">
          Inquiry Type <span className="text-accent-cyan">*</span>
        </label>
        <div className="relative">
          <select
            id="inquiryType"
            value={formData.inquiryType}
            onChange={(e) =>
              setFormData({ ...formData, inquiryType: e.target.value as InquiryType })
            }
            className="w-full px-4 py-2.5 bg-surface-50 border border-border-subtle hover:border-border-medium text-sm text-foreground rounded transition-colors focus:outline-none focus:ring-1 focus:ring-accent-cyan appearance-none cursor-pointer"
          >
            {INQUIRY_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-surface-100 text-foreground">
                {opt}
              </option>
            ))}
          </select>
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
            ▼
          </div>
        </div>
      </div>

      {/* Message Field */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-xs font-mono tracking-wider text-slate-300 uppercase">
          Message <span className="text-accent-cyan">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please describe the context of your inquiry..."
          className={cn(
            "w-full px-4 py-2.5 bg-surface-50 border text-sm text-foreground placeholder:text-slate-600 rounded transition-colors focus:outline-none focus:ring-1 focus:ring-accent-cyan resize-y",
            errors.message ? "border-red-500/60" : "border-border-subtle hover:border-border-medium"
          )}
        />
        {errors.message && (
          <p className="text-[11px] font-mono text-red-400">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
          icon={
            isSubmitting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-3.5 h-3.5" />
            )
          }
        >
          {isSubmitting ? "Transmitting..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
