import { systemsCategories } from "@/lib/copy";

export function SystemsSection() {
  return (
    <section
      id="systems"
      aria-label="AI systems we install"
      className="border-b border-white/10 bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8 lg:py-14">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            02 · AI systems we install
          </p>
          <h2 className="mt-2 text-lg font-semibold text-slate-50 sm:text-xl">
            Revenue, support, and ops systems that compound over time.
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            We do not sell generic &ldquo;AI projects.&rdquo; We design and
            install systems that plug into your tools and workflows, ship
            quickly, and are measured against clear KPIs.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {systemsCategories.map((cat) => (
            <article
              key={cat.key}
              className="glass flex flex-col rounded-2xl p-5"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {cat.label}
              </h3>
              <p className="mt-1 text-xs text-slate-300">{cat.description}</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                {cat.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-subtle" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs text-slate-400">
          Every engagement starts with a free audit, moves into a 14-day pilot
          on one workflow, and scales into a 90-day system install once we have
          proven impact.
        </p>
      </div>
    </section>
  );
}

