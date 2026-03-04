import { proofBarItems, testimonials } from "@/lib/copy";

export function ProofBar() {
  return (
    <section
      aria-label="Trust and proof"
      className="border-b border-white/10 bg-slate-950"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <div className="space-y-2 md:max-w-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            Built for operators
          </p>
          <p className="text-sm text-slate-200">
            AI systems studio trusted by founders, COOs, revenue leaders, and
            operators across service-heavy and ops-heavy businesses.
          </p>
        </div>
        <div className="flex flex-1 flex-wrap items-center gap-3 text-xs text-slate-200">
          {proofBarItems.map((item) => (
            <div key={item} className="pill">
              {item}
            </div>
          ))}
        </div>
        <div className="hidden max-w-xs text-xs text-slate-400 md:block">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            What leaders say
          </span>
          <p className="mt-1 line-clamp-2">
            “{testimonials[0].quote}”
          </p>
        </div>
      </div>
    </section>
  );
}

