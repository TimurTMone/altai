"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookCallModalProps {
  open: boolean;
  onClose: () => void;
}

export function BookCallModal({ open, onClose }: BookCallModalProps) {
  if (!open) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-label="Book a call"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
    >
      <div className="glass relative w-full max-w-2xl rounded-2xl p-5 shadow-soft">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close booking modal"
          className={cn(
            "absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/10 text-slate-200 hover:border-white/40 hover:bg-white/20"
          )}
        >
          <X className="h-3.5 w-3.5" />
        </button>
        <h2 className="text-sm font-semibold text-slate-50">
          Book a call with Alt AI Systems Studio
        </h2>
        <p className="mt-1 text-xs text-slate-300">
          Choose a time that works for you. We&apos;ll come prepared with
          questions on your workflows, KPIs, and tool stack.
        </p>
        <div className="mt-4 h-[380px] w-full rounded-xl border border-white/10 bg-white/5">
          <div className="flex h-full items-center justify-center px-6 text-center text-xs text-slate-300">
            Calendly or scheduling embed placeholder.
            <br />
            Replace this with your scheduling link or embed.
          </div>
        </div>
      </div>
    </div>
  );
}

