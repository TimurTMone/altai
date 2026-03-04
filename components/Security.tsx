export function Security() {
  return (
    <section
      aria-label="Security and ownership"
      className="border-b border-white/10 bg-slate-950/80"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8 lg:py-14">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            07 · Security &amp; ownership
          </p>
          <h2 className="mt-2 text-lg font-semibold text-slate-50 sm:text-xl">
            Enterprise-grade security for SMB and mid-market teams.
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            We design AI systems that respect your data boundaries and
            operational risk profile. You keep control of your stack—and your
            IP.
          </p>
        </div>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          <div className="glass rounded-2xl p-5 text-sm text-slate-200">
            <h3 className="text-sm font-semibold text-slate-50">
              Clear ownership
            </h3>
            <ul className="mt-2 space-y-2 text-sm text-slate-200">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  NDA available from day one, with mutual alignment on data
                  boundaries.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  You own code, prompts, system configuration, and integration
                  assets.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  We document systems so your team can maintain and extend them
                  over time.
                </span>
              </li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-5 text-sm text-slate-200">
            <h3 className="text-sm font-semibold text-slate-50">
              Deployment &amp; integrations
            </h3>
            <ul className="mt-2 space-y-2 text-sm text-slate-200">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-subtle" />
                <span>
                  Cloud or your VPC, with careful selection of model and vector
                  providers.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-subtle" />
                <span>
                  Data handling aligned to your compliance requirements; we
                  avoid unnecessary retention.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-subtle" />
                <span>
                  Integrations across tools like OpenAI, Anthropic, n8n, Zapier,
                  HubSpot, Zendesk, Stripe, Twilio, WhatsApp, Shopify, Airtable,
                  Notion, and Google Workspace.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

