"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { hero, industries } from "@/lib/copy";
import { cn, type IndustryKey } from "@/lib/utils";
import { trackCtaClick, trackSubmitLead } from "@/lib/track";

interface HeroProps {
  selectedIndustry: IndustryKey;
  onIndustryChange: (key: IndustryKey) => void;
  onBookCallClick: () => void;
}

export function Hero({
  selectedIndustry,
  onIndustryChange,
  onBookCallClick
}: HeroProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    industry: industries[selectedIndustry].label
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Required";
    if (!formState.email.trim()) newErrors.email = "Required";
    if (!formState.company.trim()) newErrors.company = "Required";
    if (!formState.industry.trim()) newErrors.industry = "Required";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);
    setErrors({});
    try {
      trackSubmitLead({
        name: formState.name,
        email: formState.email,
        company: formState.company,
        role: undefined,
        industry: formState.industry,
        optimizingFor: "revenue",
        tools: [],
        budget: "<5k",
        timeline: "now",
        message: "Hero audit request"
      });
      setSubmitted(true);
      setFormState({
        name: "",
        email: "",
        company: "",
        industry: industries[selectedIndustry].label
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.35),_transparent_55%),linear-gradient(to_bottom,_#020617,_#020617)]">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent-subtle/25 blur-3xl" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 md:px-6 lg:flex-row lg:items-start lg:pb-24 lg:pt-16">
        <motion.div
          className="flex-1 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="font-medium">{hero.auditBadge}</span>
            <span className="h-3 w-px bg-white/20" />
            <span className="text-[11px] text-slate-300">{hero.replyBadge}</span>
          </div>
          <div className="space-y-4">
            <h1 className="max-w-xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {hero.headline}
            </h1>
            <p className="max-w-xl text-sm text-slate-200 sm:text-base">
              {hero.subheadline}
            </p>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
              For US businesses ready to scale with AI systems
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-200">
            {hero.kpis.map((kpi) => (
              <div key={kpi} className="pill">
                {kpi}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#final-form"
              onClick={() => trackCtaClick("hero_get_free_audit")}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-subtle px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:shadow-[0_16px_50px_rgba(79,70,229,0.6)]"
            >
              {hero.primaryCta}
            </a>
            <button
              type="button"
              onClick={() => {
                trackCtaClick("hero_book_call");
                onBookCallClick();
              }}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-white/40 hover:bg-white/10"
            >
              {hero.secondaryCta}
            </button>
          </div>
          <div className="mt-4 space-y-2 text-xs text-slate-400">
            <p className="font-medium">
              Start with where AI can create leverage in your business. We send a concise audit in 24 hours.
            </p>
            <p>Focused on revenue, support, and operations outcomes—not generic “AI projects.”</p>
          </div>
          <div id="industries" className="mt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Pick your industry
            </p>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(industries) as IndustryKey[]).map((key) => {
                const ind = industries[key];
                const active = key === selectedIndustry;
                return (
                  <button
                    key={key}
                    type="button"
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-xs font-medium transition",
                      active
                        ? "border-accent-subtle bg-accent/20 text-slate-50"
                        : "border-white/10 bg-white/5 text-slate-300 hover:border-white/30 hover:text-white"
                    )}
                    aria-pressed={active}
                    onClick={() => onIndustryChange(key)}
                  >
                    {ind.label}
                  </button>
                );
              })}
            </div>
            <p className="mt-3 max-w-md text-xs text-slate-300">
              We design AI systems specific to your workflows. Switch industries to see tailored examples and case studies.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="glass relative z-10 flex-1 rounded-2xl p-5 shadow-soft sm:p-6 lg:max-w-md"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="relative mb-4 overflow-hidden rounded-xl border border-white/10 bg-black/40">
            <Image
              src="/hero-main.png"
              alt="Young operator overseeing AI systems dashboards"
              width={764}
              height={1024}
              className="h-48 w-full object-cover opacity-95 sm:h-64"
              priority
            />
          </div>
          <h2 className="text-sm font-semibold text-slate-50">
            Request your AI Growth Audit
          </h2>
          <p className="mt-1 text-xs text-slate-300">
            Share where you think AI can help. We respond in 15 minutes (launch week) and send a concise audit in 24 hours.
          </p>
          <form className="mt-4 space-y-3" onSubmit={handleSubmit} aria-label="Quick audit request form">
            <div>
              <label className="block text-xs font-medium text-slate-200">
                Name
              </label>
              <input
                type="text"
                value={formState.name}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, name: e.target.value }))
                }
                className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-accent-subtle"
                required
              />
              {errors.name && (
                <p className="mt-1 text-[11px] text-rose-400">{errors.name}</p>
              )}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-200">
                  Email
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, email: e.target.value }))
                  }
                  className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-accent-subtle"
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-[11px] text-rose-400">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-200">
                  Company
                </label>
                <input
                  type="text"
                  value={formState.company}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, company: e.target.value }))
                  }
                  className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-accent-subtle"
                  required
                />
                {errors.company && (
                  <p className="mt-1 text-[11px] text-rose-400">
                    {errors.company}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-200">
                Industry
              </label>
              <select
                value={formState.industry}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, industry: e.target.value }))
                }
                className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-50 outline-none ring-0 focus:border-accent-subtle"
                required
              >
                {(Object.keys(industries) as IndustryKey[]).map((key) => (
                  <option key={key} value={industries[key].label}>
                    {industries[key].label}
                  </option>
                ))}
              </select>
              {errors.industry && (
                <p className="mt-1 text-[11px] text-rose-400">
                  {errors.industry}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-1 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-accent to-accent-subtle px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:shadow-[0_16px_50px_rgba(79,70,229,0.7)] disabled:opacity-60"
            >
              {submitting ? "Submitting..." : "Send my audit request"}
            </button>
            {submitted && (
              <p className="mt-2 text-[11px] text-emerald-300">
                Received. We&apos;ll review your details and send a tailored AI Growth Audit within 24 hours.
              </p>
            )}
            <p className="mt-2 text-[11px] text-slate-400">
              By submitting, you agree to our{" "}
              <a
                href="/privacy"
                className="underline decoration-slate-500 underline-offset-2 hover:text-slate-200"
              >
                Privacy Policy
              </a>
              . We keep your data confidential and can sign an NDA on request.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

