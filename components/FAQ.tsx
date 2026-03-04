import { faqItems } from "@/lib/copy";

interface FAQProps {
  industryHighlights: string[];
}

export function FAQ({ industryHighlights }: FAQProps) {
  const highlighted = faqItems.filter((item) =>
    industryHighlights.some((h) => item.answer.includes(h.split(".")[0]))
  );

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="border-b border-white/10 bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8 lg:py-14">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            08 · FAQ
          </p>
          <h2 className="mt-2 text-lg font-semibold text-slate-50 sm:text-xl">
            Clear answers for serious buyers.
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            We work with teams who expect rigor: clear KPIs, realistic timelines,
            and honest conversations about trade-offs.
          </p>
        </div>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-slate-50">
                <span>{item.question}</span>
                <span className="text-xs text-slate-400 group-open:hidden">
                  +
                </span>
                <span className="hidden text-xs text-slate-400 group-open:inline">
                  –
                </span>
              </summary>
              <p className="mt-2 text-xs text-slate-300">{item.answer}</p>
            </details>
          ))}
        </div>
        {industryHighlights.length > 0 && (
          <div className="mt-6 rounded-2xl border border-accent-subtle/30 bg-accent-subtle/10 px-4 py-3 text-xs text-slate-50">
            <p className="font-semibold uppercase tracking-[0.18em] text-slate-200">
              Relevant for your industry
            </p>
            <ul className="mt-2 space-y-1">
              {industryHighlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-subtle" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

