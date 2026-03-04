import Link from "next/link";
import { siteName } from "@/lib/copy";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-[11px] text-slate-500 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-xl bg-gradient-to-tr from-accent to-accent-subtle" />
          <span className="font-semibold text-slate-200">{siteName}</span>
          <span className="text-slate-500">· AI Systems Studio</span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/privacy"
            className="hover:text-slate-200"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="hover:text-slate-200"
          >
            Terms
          </Link>
          <span>© {new Date().getFullYear()} {siteName}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

