export function IntegrationsRow() {
  const integrations = [
    "OpenAI",
    "Anthropic",
    "n8n",
    "Zapier",
    "HubSpot",
    "Zendesk",
    "Stripe",
    "Twilio",
    "WhatsApp",
    "Shopify",
    "Airtable",
    "Notion",
    "Google"
  ];

  return (
    <section
      aria-label="Integrations"
      className="border-b border-white/10 bg-slate-950/70"
    >
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            Systems across your stack
          </p>
          <div className="flex flex-wrap gap-2 text-[11px] text-slate-200">
            {integrations.map((name) => (
              <span key={name} className="pill">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

