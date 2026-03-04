import { whyFailPoints } from "@/lib/copy";

export function WhyFail() {
  return (
    <section
      aria-label="Why AI projects fail"
      className="border-b border-white/10 bg-slate-950/80"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8 lg:py-14">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            05 · Why most AI projects fail
          </p>
          <h2 className="mt-2 text-lg font-semibold text-slate-50 sm:text-xl">
            Most AI projects stall because they ignore workflows, ownership, and
            adoption.
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            We come from systems design, not experiments. The goal is not to
            &ldquo;try AI&rdquo;—it is to install systems that operators trust
            and that finance will happily fund again.
          </p>
        </div>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {whyFailPoints.map((pt) => (
            <article
              key={pt.title}
              className="glass rounded-2xl p-5 text-sm text-slate-200"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {pt.title}
              </h3>
              <p className="mt-2 text-xs text-slate-300">{pt.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

