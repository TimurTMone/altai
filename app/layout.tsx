import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteName, siteUrl } from "@/lib/copy";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Alt AI Systems Studio – AI Systems that Ship in 30–90 Days",
  description:
    "Alt AI Systems Studio designs and installs AI systems for US businesses that drive revenue, reduce support load, and create real operational leverage in 30–90 days.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Alt AI Systems Studio",
    description:
      "AI systems studio for US founders, COOs, and operators. From free AI Growth Audit to 14-day pilot to 90-day system install.",
    url: siteUrl,
    siteName,
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    sameAs: [
      "https://www.linkedin.com",
      "https://x.com"
    ],
    description:
      "AI Systems Studio focused on revenue, support, and operations outcomes for US businesses."
  };

  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-foreground font-sans">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {children}
      </body>
    </html>
  );
}

