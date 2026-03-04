"use client";

import { useState } from "react";
import { industries } from "@/lib/copy";
import { type IndustryKey } from "@/lib/utils";
import {
  trackCtaClick,
  trackFormStep,
  trackSubmitLead,
  type LeadPayload
} from "@/lib/track";

interface FinalFormProps {
  selectedIndustry: IndustryKey;
}

type Step = 1 | 2;

export function FinalForm({ selectedIndustry }: FinalFormProps) {
  const [step, setStep] = useState<Step>(1);
  const [submissions, setSubmissions] = useState<LeadPayload[]>([]);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    industry: industries[selectedIndustry].label,
    optimizingFor: "revenue",
    tools: industries[selectedIndustry].defaultTools.join(", "),
    budget: "<5k",
    timeline: "now",
    message: ""
  });

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const validateStep = (currentStep: Step) => {
    const newErrors: Record<string, string> = {};
    if (currentStep === 1) {
      if (!form.name.trim()) newErrors.name = "Required";
      if (!form.email.trim()) newErrors.email = "Required";
      if (!form.company.trim()) newErrors.company = "Required";
      if (!form.industry.trim()) newErrors.industry = "Required";
    } else {
      if (!form.optimizingFor) newErrors.optimizingFor = "Required";
      if (!form.budget) newErrors.budget = "Required";
      if (!form.timeline) newErrors.timeline = "Required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep(1)) return;
    trackFormStep("final_step_2");
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(2)) return;
    setSubmitting(true);
    setSuccess(false);

    const toolsArray = form.tools
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const payload: LeadPayload = {
      name: form.name,
      email: form.email,
      company: form.company,
      role: form.role || undefined,
      industry: form.industry,
      optimizingFor: form.optimizingFor as LeadPayload["optimizingFor"],
      tools: toolsArray,
      budget: form.budget as LeadPayload["budget"],
      timeline: form.timeline as LeadPayload["timeline"],
      message: form.message || undefined
    };

    try {
      trackSubmitLead(payload);
      setSubmissions((prev) => [...prev, payload]);
      setSuccess(true);
      setStep(1);
      setForm({
        name: "",
        email: "",
        company: "",
        role: "",
        industry: industries[selectedIndustry].label,
        optimizingFor: "revenue",
        tools: industries[selectedIndustry].defaultTools.join(", "),
        budget: "<5k",
        timeline: "now",
        message: ""
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="final-form"
      aria-label="Book a call or request an audit"
      className="border-b border-white/10 bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              09 · Next step
            </p>
            <h2 className="mt-2 text-lg font-semibold text-slate-50 sm:text-xl">
              Share your context. We&apos;ll respond in 15 minutes and ship an
              audit in 24 hours.
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              This form helps us understand where AI can create the most
              leverage—revenue, support, or ops—and how to plug into your
              existing tools.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-3 py-1 text-[11px] text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="font-semibold uppercase tracking-[0.2em]">
                We reply in 15 minutes (launch week)
              </span>
            </div>
            <p className="mt-4 text-xs text-slate-400">
              Prefer to talk first?{" "}
              <button
                type="button"
                className="font-semibold text-slate-200 underline underline-offset-2"
                onClick={() => trackCtaClick("final_form_book_call_link")}
              >
                Book a call instead.
              </button>
            </p>
            <p className="mt-4 text-xs text-slate-500">
              We keep engagements focused and hands-on. You&apos;ll work
              directly with senior operators and systems designers—not a generic
              &ldquo;AI agency&rdquo; bench.
            </p>
          </div>

          <div className="glass rounded-2xl p-5 text-sm text-slate-200">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Free AI Growth Audit
                </span>
                <div className="flex items-center gap-1 text-[11px] text-slate-400">
                  <span
                    className={
                      step === 1
                        ? "h-1.5 w-1.5 rounded-full bg-accent-subtle"
                        : "h-1.5 w-1.5 rounded-full bg-slate-600"
                    }
                  />
                  <span
                    className={
                      step === 2
                        ? "h-1.5 w-1.5 rounded-full bg-accent-subtle"
                        : "h-1.5 w-1.5 rounded-full bg-slate-600"
                    }
                  />
                </div>
              </div>
              {step === 1 ? (
                <div aria-label="Contact details" className="space-y-3">
                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-200">
                        Name
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-accent-subtle"
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-rose-400">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-200">
                        Email
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-accent-subtle"
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-rose-400">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-200">
                        Company
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) =>
                          updateField("company", e.target.value)
                        }
                        className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-accent-subtle"
                      />
                      {errors.company && (
                        <p className="mt-1 text-[11px] text-rose-400">
                          {errors.company}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-200">
                        Role
                      </label>
                      <input
                        type="text"
                        value={form.role}
                        onChange={(e) => updateField("role", e.target.value)}
                        className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-accent-subtle"
                        placeholder="Founder, COO, VP Ops…"
                      />
                    </div>
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-200">
                        Industry
                      </label>
                      <select
                        value={form.industry}
                        onChange={(e) =>
                          updateField("industry", e.target.value)
                        }
                        className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-50 outline-none ring-0 focus:border-accent-subtle"
                      >
                        {Object.values(industries).map((ind) => (
                          <option key={ind.slug} value={ind.label}>
                            {ind.label}
                          </option>
                        ))}
                      </select>
                      {errors.industry && (
                        <p className="mt-1 text-[11px] text-rose-400">
                          {errors.industry}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-200">
                        Tools today
                      </label>
                      <input
                        type="text"
                        value={form.tools}
                        onChange={(e) => updateField("tools", e.target.value)}
                        className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-accent-subtle"
                        placeholder="HubSpot, Zendesk, Shopify, Stripe…"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="rounded-full bg-gradient-to-r from-accent to-accent-subtle px-4 py-2 text-sm font-semibold text-white"
                    >
                      Next: Outcomes
                    </button>
                  </div>
                </div>
              ) : (
                <div aria-label="Outcomes and timing" className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-200">
                      What are you optimizing?
                    </label>
                    <div className="mt-1 grid grid-cols-2 gap-2 text-xs">
                      {[
                        ["revenue", "Revenue"],
                        ["support", "Support"],
                        ["ops", "Ops"],
                        ["other", "Other"]
                      ].map(([value, label]) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() =>
                            updateField("optimizingFor", value as string)
                          }
                          className={
                            form.optimizingFor === value
                              ? "rounded-full bg-accent/25 px-3 py-1.5 font-semibold text-slate-50"
                              : "rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-slate-300"
                          }
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                    {errors.optimizingFor && (
                      <p className="mt-1 text-[11px] text-rose-400">
                        {errors.optimizingFor}
                      </p>
                    )}
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-200">
                        Budget range (monthly or project)
                      </label>
                      <select
                        value={form.budget}
                        onChange={(e) => updateField("budget", e.target.value)}
                        className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-50 outline-none ring-0 focus:border-accent-subtle"
                      >
                        <option value="<5k">&lt;$5k</option>
                        <option value="5-15k">$5–15k</option>
                        <option value="15-50k">$15–50k</option>
                        <option value="50k+">$50k+</option>
                      </select>
                      {errors.budget && (
                        <p className="mt-1 text-[11px] text-rose-400">
                          {errors.budget}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-200">
                        Timeline
                      </label>
                      <select
                        value={form.timeline}
                        onChange={(e) =>
                          updateField("timeline", e.target.value)
                        }
                        className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-50 outline-none ring-0 focus:border-accent-subtle"
                      >
                        <option value="now">Now</option>
                        <option value="30">Next 30 days</option>
                        <option value="90">Next 90 days</option>
                      </select>
                      {errors.timeline && (
                        <p className="mt-1 text-[11px] text-rose-400">
                          {errors.timeline}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-200">
                      Where do you think AI can help most?
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      rows={4}
                      className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-accent-subtle"
                      placeholder="A quick note on your current workflows, bottlenecks, or KPIs."
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2 text-[11px] text-slate-400">
                    <p>
                      We&apos;ll use this to prepare your audit and a concrete
                      14-day pilot proposal.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-slate-200"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="rounded-full bg-gradient-to-r from-accent to-accent-subtle px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
                    >
                      {submitting ? "Submitting..." : "Submit audit request"}
                    </button>
                  </div>
                </div>
              )}
            </form>
            {success && (
              <p className="mt-3 text-[11px] text-emerald-300">
                Thanks—your details are in. We&apos;ll reply within 15 minutes
                during business hours and send a concise AI Growth Audit within
                24 hours.
              </p>
            )}
            <p className="mt-3 text-[11px] text-slate-400">
              We respect your time and privacy. See our{" "}
              <a
                href="/privacy"
                className="underline decoration-slate-500 underline-offset-2 hover:text-slate-200"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="/terms"
                className="underline decoration-slate-500 underline-offset-2 hover:text-slate-200"
              >
                Terms
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

