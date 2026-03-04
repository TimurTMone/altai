## Alt AI Systems Studio Landing

Premium, conversion-first landing site for a US-focused AI Systems Studio built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and lucide-react.

### Getting started

- **Install dependencies**

```bash
pnpm install
# or npm install / yarn install
```

- **Run the dev server**

```bash
pnpm dev
```

### Structure

- `app/layout.tsx` – global layout, metadata, and schema.
- `app/page.tsx` – main landing page, industry state, and section composition.
- `app/privacy/page.tsx` and `app/terms/page.tsx` – legal pages.
- `components/*` – each major section as a standalone component.
- `lib/copy.ts` – all copy and industry variants.
- `lib/track.ts` – tracking stubs (`trackCtaClick`, `trackFormStep`, `trackSubmitLead`).
- `lib/utils.ts` – utility helpers (e.g., `cn`).

Replace the Calendly placeholder in `BookCallModal` with your actual scheduling embed or link, and wire `track*` functions into your analytics platform of choice.

