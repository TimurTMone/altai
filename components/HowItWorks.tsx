import { howItWorksSteps } from "@/lib/copy";

export function HowItWorks() {
  return (
    <section
      aria-label="How we work"
      className="border-b border-white/10 bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8 lg:py-14">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            04 · How we work
          </p>
          <h2 className="mt-2 text-lg font-semibold text-slate-50 sm:text-xl">
            Discover → Map workflow → Pilot → Install → Optimize.
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            A simple, operator-first framework that de-risks AI and turns it
            into durable systems inside your business.
          </p>
        </div>
        <ol className="mt-7 grid gap-4 md:grid-cols-5">
          {howItWorksSteps.map((step, idx) => (
            <li
              key={step.title}
              className="glass flex flex-col rounded-2xl p-4"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">
                {step.title}
              </h3>
              <p className="mt-2 text-xs text-slate-300">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

