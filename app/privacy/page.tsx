export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-300">
          We keep this page intentionally clear and practical. This is not legal
          advice—please review with your own counsel for your final version.
        </p>
        <section className="mt-6 space-y-4 text-sm text-slate-200">
          <p>
            We collect the information you choose to share with us through forms
            and calls, including contact details, company information, and basic
            context on your workflows and tools. We use this to prepare your AI
            Growth Audit, schedule calls, and design relevant proposals.
          </p>
          <p>
            We do not sell your data. We only share information with service
            providers that help us operate (for example, scheduling, analytics,
            or CRM tools), and only to the extent necessary to provide those
            services.
          </p>
          <p>
            If we enter into an NDA with you, that agreement governs how we
            treat confidential information you share beyond this site. Where
            requested, we prioritize deployments and data flows that keep your
            sensitive data within your environment or approved vendors.
          </p>
          <p>
            You can request to update or delete your information by contacting
            us. We may keep limited records as required for legal, accounting,
            or operational purposes.
          </p>
        </section>
      </div>
    </main>
  );
}

