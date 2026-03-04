"use client";

import Link from "next/link";
import { trackCtaClick } from "@/lib/track";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onBookCallClick: () => void;
}

export function Header({ onBookCallClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-accent to-accent-subtle shadow-soft" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight">
              Alt AI
            </span>
            <span className="text-[11px] text-slate-400">
              AI Systems Studio
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#industries" className="hover:text-white">
            Industries
          </a>
          <a href="#systems" className="hover:text-white">
            Systems
          </a>
          <a href="#case-studies" className="hover:text-white">
            Proof
          </a>
          <a href="#pricing" className="hover:text-white">
            Pricing
          </a>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className={cn(
              "hidden rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-slate-100 transition hover:border-white/30 hover:bg-white/5 md:inline-flex"
            )}
            onClick={() => {
              trackCtaClick("header_book_call");
              onBookCallClick();
            }}
          >
            Book a Call
          </button>
          <a
            href="#final-form"
            onClick={() => trackCtaClick("header_get_free_audit")}
            className="rounded-full bg-gradient-to-r from-accent to-accent-subtle px-3.5 py-1.5 text-xs font-semibold text-white shadow-soft transition hover:shadow-[0_14px_40px_rgba(79,70,229,0.65)]"
          >
            Get Free Audit
          </a>
        </div>
      </div>
    </header>
  );
}

