"use client";

import { EnterpriseHero } from "@/components/enterprise-hero";
import { DashboardReveal } from "@/components/dashboard-reveal";
import { LiveDemo } from "@/components/live-demo";
import { FeaturesBento } from "@/components/features-bento";
import { FAQSection } from "@/components/faq-section";
import { Pricing } from "@/components/pricing";
import { FinancialEcosystem } from "@/components/financial-ecosystem";
import { SecuritySection } from "@/components/security-section";
import { FinalCTA } from "@/components/final-cta";
import { EnterpriseFooter } from "@/components/enterprise-footer";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Index = () => {
  return (
    <>
      {/* Global Background - Fixed */}
      <div className="fixed inset-0 z-[-1] bg-black">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Interactive Background Beams */}
        <BackgroundBeams />
      </div>

      {/* Content - Transparent Sections */}
      <div className="relative min-h-screen text-white font-light">
        <EnterpriseHero />
        <DashboardReveal />
        <LiveDemo />
        <FeaturesBento />
        <FAQSection />
        <Pricing />
        <FinancialEcosystem />
        <SecuritySection />
        <FinalCTA />
        <EnterpriseFooter />
      </div>
    </>
  );
};

export default Index;