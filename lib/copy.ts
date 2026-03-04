import type { IndustryKey } from "./utils";

export const siteName = "Alt AI Systems Studio";
export const siteUrl = "https://altai.studio";

export const hero = {
  headline: "AI systems that create measurable lift in 30–90 days.",
  subheadline: "For US businesses ready to scale with AI systems, not side projects.",
  kpis: ["NDA on day one", "Weekly working demos", "KPIs agreed upfront"],
  primaryCta: "Get Free AI Growth Audit",
  secondaryCta: "Book a Call",
  auditBadge: "Free AI Growth Audit in 24 hours",
  replyBadge: "We reply in 15 minutes (launch week)."
};

export type IndustryCopy = {
  label: string;
  slug: IndustryKey;
  headline: string;
  pains: string[];
  systemExamples: string[];
  caseStudyHighlight: string;
  faqHighlights: string[];
  defaultTools: string[];
};

export const industries: Record<IndustryKey, IndustryCopy> = {
  dental: {
    label: "Dental & Clinics",
    slug: "dental",
    headline: "Fill chairs, smooth intake, zero dropped patients.",
    pains: [
      "Phones ringing out, front desk overwhelmed.",
      "Consults not converting to treatments.",
      "No visibility on marketing ROI."
    ],
    systemExamples: [
      "24/7 AI intake that qualifies and books directly into your PMS.",
      "No-show recovery workflows that re-engage and reschedule.",
      "Treatment plan follow-up sequences that increase case acceptance."
    ],
    caseStudyHighlight: "2.3x faster lead response for a 5-location clinic group.",
    faqHighlights: [
      "We integrate with your EHR/PMS and phone system.",
      "We design systems that keep PHI inside your environment."
    ],
    defaultTools: ["HubSpot", "Twilio", "WhatsApp"]
  },
  logistics: {
    label: "Logistics & Ops",
    slug: "logistics",
    headline: "Dispatch, routing, and support that run on autopilot.",
    pains: [
      "Dispatchers stuck in spreadsheets and radio chatter.",
      "Customers chasing status updates.",
      "Manual exception handling killing margin."
    ],
    systemExamples: [
      "AI dispatcher that triages tickets and updates routes.",
      "Proactive delay notifications across SMS, WhatsApp, and email.",
      "Exception playbooks that suggest next-best actions to operators."
    ],
    caseStudyHighlight: "Saved 120 hours/month in dispatcher workload.",
    faqHighlights: [
      "We respect existing TMS/WMS and fill the gaps.",
      "We design for frontline adoption, not just dashboards."
    ],
    defaultTools: ["Zendesk", "Twilio"]
  },
  realEstate: {
    label: "Real Estate & PM",
    slug: "realEstate",
    headline: "Agent-ready pipelines and responsive tenant ops.",
    pains: [
      "Leads going cold before agents respond.",
      "Tenants waiting days for simple answers.",
      "Fragmented data across CRM, email, and spreadsheets."
    ],
    systemExamples: [
      "Lead routing that replies in minutes and books showings.",
      "Tenant concierge that handles FAQs and simple requests.",
      "Owner reporting automations your team actually uses."
    ],
    caseStudyHighlight: "2.3x faster lead response for a brokerage team.",
    faqHighlights: [
      "We work with your existing CRM and phone stack.",
      "We align routing rules with how your team actually sells."
    ],
    defaultTools: ["HubSpot", "WhatsApp"]
  },
  ecommerce: {
    label: "Ecommerce & CX",
    slug: "ecommerce",
    headline: "Higher LTV with always-on support and smarter ops.",
    pains: [
      "Support backlog during launches and Q4 peaks.",
      "Agents answering the same questions all day.",
      "No clear link between CX and revenue."
    ],
    systemExamples: [
      "AI support that resolves repetitive tickets instantly.",
      "Order, shipping, and refund flows that self-serve customers.",
      "Upsell and retention prompts tied to customer behavior."
    ],
    caseStudyHighlight: "Reduced support tickets by 35% while maintaining CSAT.",
    faqHighlights: [
      "We pair AI agents with clear routing to human teams.",
      "We measure success on resolution time and revenue lift."
    ],
    defaultTools: ["Shopify", "Zendesk", "Stripe"]
  }
};

export const proofBarItems = [
  "Designed for revenue, support, and ops leaders.",
  "AI systems live in 30–90 days.",
  "Strategy, build, and change management in one team."
];

export const systemsCategories = [
  {
    key: "revenue",
    label: "Revenue Systems",
    description: "Systems that turn demand into dollars faster.",
    bullets: [
      "Lead capture, routing, and follow-up that responds in minutes.",
      "Pricing and packaging assist that guides reps to better deals.",
      "Post-demo workflows that keep buyers moving forward."
    ]
  },
  {
    key: "support",
    label: "Support Systems",
    description: "Systems that resolve more tickets with less headcount.",
    bullets: [
      "AI agents that handle repetitive tickets end-to-end.",
      "Smart triage that routes edge cases to the right human.",
      "Knowledge bases that stay up to date automatically."
    ]
  },
  {
    key: "ops",
    label: "Ops Systems",
    description: "Systems that remove manual work from core workflows.",
    bullets: [
      "Intake, approvals, and handoffs with zero copy-paste.",
      "Exception detection and playbooks embedded in tools.",
      "Reporting that operators actually open and act on."
    ]
  }
];

export const caseStudies = [
  {
    title: "Reduced support tickets by 35%",
    metric: "35% fewer tickets",
    industry: "Ecommerce support",
    summary:
      "Implemented an AI front-line that resolved repetitive order-status and FAQ tickets before reaching human agents."
  },
  {
    title: "2.3x faster lead response",
    metric: "2.3x faster",
    industry: "Multi-location clinic",
    summary:
      "Built an AI intake layer that qualified leads, handled FAQs, and booked consults directly to the calendar."
  },
  {
    title: "Saved 120 hours/month",
    metric: "120 hours/month",
    industry: "Regional logistics operator",
    summary:
      "Mapped dispatch workflows and automated status updates, freeing dispatchers to focus on true exceptions."
  }
];

export const testimonials = [
  {
    name: "COO, 9-location dental group",
    quote:
      "They didn’t pitch ‘AI magic.’ They rebuilt our intake and follow-up as systems, then automated the right parts. We saw the impact inside the first month.",
    role: "COO, Healthcare"
  },
  {
    name: "Founder, logistics operation",
    quote:
      "Our dispatch floor is calmer, customers are better informed, and my team finally trusts the data. This felt like adding a senior systems team overnight.",
    role: "Founder, Logistics"
  },
  {
    name: "VP of CX, DTC brand",
    quote:
      "We cut ticket volume without hurting CSAT. Their weekly demos and clear KPIs made it easy to get buy-in from finance.",
    role: "VP Customer Experience"
  },
  {
    name: "Managing Broker, real estate",
    quote:
      "Lead response times dropped, and agents stopped complaining about ‘another tool.’ The systems work quietly in the background.",
    role: "Managing Broker"
  },
  {
    name: "COO, multi-brand group",
    quote:
      "They talk in outcomes and workflows, not models. That’s what made this work across our portfolio.",
    role: "COO, Multi-brand"
  }
];

export const howItWorksSteps = [
  {
    title: "Discover",
    body: "We meet your operators, map goals, and agree on the KPIs that matter for this engagement."
  },
  {
    title: "Map workflow",
    body: "We document your current workflows, tools, and constraints—then design the future-state system."
  },
  {
    title: "Pilot",
    body: "We ship a focused 14-day pilot that proves value in one slice of the workflow with real data."
  },
  {
    title: "Install",
    body: "We install the full 90-day system, train your team, and harden it into your operations."
  },
  {
    title: "Optimize",
    body: "We measure outcomes, tune prompts and workflows, and expand into adjacent processes."
  }
];

export const whyFailPoints = [
  {
    title: "Projects start with models, not workflows.",
    body: "Most AI projects chase the newest model instead of mapping the business workflow. We start from the job-to-be-done and design systems that wrap models, tools, and people."
  },
  {
    title: "No clear owner or KPIs.",
    body: "Without a clear KPI and an operator who owns the outcome, AI becomes ‘innovation theater.’ We agree on KPIs, owners, and decision rights before writing a line of code."
  },
  {
    title: "Disconnected from existing tools.",
    body: "If your AI system lives outside of HubSpot, Zendesk, or your warehouse system, it won’t stick. We integrate into the tools your teams already live in."
  },
  {
    title: "Change management is an afterthought.",
    body: "Operators need trust, training, and a way to override the system. We design for explainability, escalation, and clear guardrails from day one."
  }
];

export const pricingTiers = [
  {
    name: "Audit",
    price: "Free",
    description: "A concise AI Growth Audit delivered in 24 hours.",
    details: [
      "Workflow and opportunity scan across revenue, support, and ops.",
      "Prioritized systems roadmap with 30–90 day outcomes.",
      "Implementation options and investment ranges."
    ]
  },
  {
    name: "14-Day Pilot",
    price: "$7k–$25k",
    description: "A focused pilot that proves value on a single workflow.",
    details: [
      "One core workflow mapped, automated, and measured.",
      "Weekly working demos with your team.",
      "Shared KPI dashboard and playbook."
    ]
  },
  {
    name: "90-Day System Install",
    price: "$40k–$150k",
    description: "A full AI system installed across a business function.",
    details: [
      "End-to-end system design, build, and deployment.",
      "Operator training and change management.",
      "Final quote confirmed after your audit."
    ]
  }
];

export const faqItems = [
  {
    question: "Who is this for?",
    answer:
      "US-based founders, COOs, revenue leaders, and operators running service-heavy or ops-heavy businesses that want AI systems tied to clear business outcomes."
  },
  {
    question: "What do you actually deliver in 30–90 days?",
    answer:
      "A production-grade AI system—often across revenue, support, or ops—that connects to your tools, runs in your environment, and is measured against agreed KPIs."
  },
  {
    question: "Do you build chatbots?",
    answer:
      "We build AI systems. Sometimes that includes a conversational interface, but the focus is always on workflows, data, and measurable outcomes, not generic bots."
  },
  {
    question: "How do you price engagements?",
    answer:
      "We start with a free audit, then a fixed-fee 14-day pilot. The 90-day system install is scoped from the audit and priced based on complexity and impact."
  },
  {
    question: "How do you handle security and data privacy?",
    answer:
      "We sign NDAs, respect your data boundaries, and can deploy in your cloud or approved vendors. You own your code, prompts, and system configuration."
  }
];

