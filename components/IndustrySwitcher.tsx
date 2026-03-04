"use client";

import { industries } from "@/lib/copy";
import { cn, type IndustryKey } from "@/lib/utils";

interface IndustrySwitcherProps {
  selectedIndustry: IndustryKey;
  onChange: (key: IndustryKey) => void;
}

export function IndustrySwitcher({
  selectedIndustry,
  onChange
}: IndustrySwitcherProps) {
  const current = industries[selectedIndustry];

  return (
    <section
      id="industry-switcher"
      className="border-b border-white/10 bg-slate-950/60"
      aria-label="Industry-specific AI systems"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8 lg:py-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="lg:w-[34%]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              01 · Pick your industry
            </p>
            <h2 className="mt-2 text-lg font-semibold text-slate-50 sm:text-xl">
              Tailored AI systems for your workflow.
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Switch industries to update pain points, system examples, case
              studies, FAQs, and form defaults across the page.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {(Object.keys(industries) as IndustryKey[]).map((key) => {
                const industry = industries[key];
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
                    onClick={() => onChange(key)}
                  >
                    {industry.label}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="glass lg:flex-1 lg:rounded-2xl lg:p-6">
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  For {current.label}
                </p>
                <h3 className="mt-1 text-base font-semibold text-slate-50 sm:text-lg">
                  {current.headline}
                </h3>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                    Core pain points
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-200">
                    {current.pains.map((pain) => (
                      <li key={pain} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-subtle" />
                        <span>{pain}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                    AI systems we install
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-200">
                    {current.systemExamples.map((example) => (
                      <li key={example} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-xs text-emerald-100">
                <p className="font-semibold uppercase tracking-[0.2em]">
                  Proof from this space
                </p>
                <p className="mt-1 text-sm text-emerald-50">
                  {current.caseStudyHighlight}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

