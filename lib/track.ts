export type LeadOptimizationFocus = "revenue" | "support" | "ops" | "other";

export type BudgetRange = "<5k" | "5-15k" | "15-50k" | "50k+";

export interface LeadPayload {
  name: string;
  email: string;
  company: string;
  role?: string;
  industry: string;
  optimizingFor: LeadOptimizationFocus;
  tools: string[];
  budget: BudgetRange;
  timeline: "now" | "30" | "90";
  message?: string;
}

export function trackCtaClick(name: string) {
  if (typeof window === "undefined") return;
  console.log("[trackCtaClick]", { name, at: new Date().toISOString() });
}

export function trackFormStep(step: string) {
  if (typeof window === "undefined") return;
  console.log("[trackFormStep]", { step, at: new Date().toISOString() });
}

export function trackSubmitLead(payload: LeadPayload) {
  if (typeof window === "undefined") return;
  console.log("[trackSubmitLead]", payload);
}

