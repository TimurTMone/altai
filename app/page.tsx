"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProofBar } from "@/components/ProofBar";
import { IndustrySwitcher } from "@/components/IndustrySwitcher";
import { SystemsSection } from "@/components/SystemsSection";
import { IntegrationsRow } from "@/components/IntegrationsRow";
import { Pricing } from "@/components/Pricing";
import { Security } from "@/components/Security";
import { FinalForm } from "@/components/FinalForm";
import { Footer } from "@/components/Footer";
import { BookCallModal } from "@/components/BookCallModal";
import { industries } from "@/lib/copy";
import type { IndustryKey } from "@/lib/utils";

const CaseStudies = dynamic(() =>
  import("@/components/CaseStudies").then((m) => m.CaseStudies)
);
const HowItWorks = dynamic(() =>
  import("@/components/HowItWorks").then((m) => m.HowItWorks)
);
const WhyFail = dynamic(() =>
  import("@/components/WhyFail").then((m) => m.WhyFail)
);
const FAQ = dynamic(() =>
  import("@/components/FAQ").then((m) => m.FAQ)
);

export default function HomePage() {
  const [selectedIndustry, setSelectedIndustry] =
    useState<IndustryKey>("dental");
  const [bookCallOpen, setBookCallOpen] = useState(false);

  const currentIndustry = industries[selectedIndustry];

  return (
    <>
      <Header onBookCallClick={() => setBookCallOpen(true)} />
      <main>
        <Hero
          selectedIndustry={selectedIndustry}
          onIndustryChange={setSelectedIndustry}
          onBookCallClick={() => setBookCallOpen(true)}
        />
        <ProofBar />
        <IndustrySwitcher
          selectedIndustry={selectedIndustry}
          onChange={setSelectedIndustry}
        />
        <SystemsSection />
        <CaseStudies />
        <HowItWorks />
        <WhyFail />
        <Pricing />
        <Security />
        <IntegrationsRow />
        <FAQ industryHighlights={currentIndustry.faqHighlights} />
        <FinalForm selectedIndustry={selectedIndustry} />
      </main>
      <Footer />
      <BookCallModal
        open={bookCallOpen}
        onClose={() => setBookCallOpen(false)}
      />
    </>
  );
}

