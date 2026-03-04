import { pricingTiers } from "@/lib/copy";

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing and engagement structure"
      className="border-b border-white/10 bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8 lg:py-14">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            06 · Investment
          </p>
          <h2 className="mt-2 text-lg font-semibold text-slate-50 sm:text-xl">
            Start with a focused pilot. Scale once the system proves itself.
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            We frame every engagement in terms of measurable impact and payback
            period—not just hours or models.
          </p>
        </div>
        <div className="mt-6 rounded-2xl border border-emerald-500/25 bg-emerald-500/5 px-4 py-3 text-sm text-emerald-50">
          <p className="font-semibold">
            Start with a pilot. If we can’t show measurable progress, we don’t
            scale the engagement.
          </p>
          <p className="mt-1 text-xs text-emerald-100">
            We do not make unrealistic guarantees—but we do design systems that
            stand up to scrutiny from finance and operations.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className="glass flex flex-col rounded-2xl p-5"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {tier.name}
              </h3>
              <p className="mt-1 text-base font-semibold text-slate-50">
                {tier.price}
              </p>
              <p className="mt-1 text-xs text-slate-300">{tier.description}</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                {tier.details.map((d) => (
                  <li key={d} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-subtle" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs text-slate-400">
          The cost of inaction is rarely neutral. Every month without systems in
          place means more manual work, slower response times, and competitors
          training their teams—and their models—faster than you.
        </p>
      </div>
    </section>
  );
}

