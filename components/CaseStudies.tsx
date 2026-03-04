import { caseStudies, testimonials } from "@/lib/copy";

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      aria-label="Case studies and testimonials"
      className="border-b border-white/10 bg-slate-950/80"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8 lg:py-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="lg:w-[32%]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              03 · Proof from the field
            </p>
            <h2 className="mt-2 text-lg font-semibold text-slate-50 sm:text-xl">
              Real operators. Real systems. Measured outcomes.
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Every system is built against a simple question: what measurable
              outcome will make this engagement obviously worth it?
            </p>
          </div>
          <div className="flex-1 space-y-6">
            <div className="grid gap-5 md:grid-cols-3">
              {caseStudies.map((cs) => (
                <article
                  key={cs.title}
                  className="glass flex flex-col rounded-2xl p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    {cs.metric}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-50">
                    {cs.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">{cs.industry}</p>
                  <p className="mt-3 text-sm text-slate-200">{cs.summary}</p>
                </article>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {testimonials.slice(0, 3).map((t) => (
                <figure
                  key={t.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-xs text-slate-200">“{t.quote}”</p>
                  <figcaption className="mt-3 text-[11px] text-slate-400">
                    <span className="font-medium text-slate-200">
                      {t.name}
                    </span>
                    <span> · {t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

