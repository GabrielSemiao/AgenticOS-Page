"use client";

import { EnterpriseHero } from "@/components/enterprise-hero";
import { DashboardReveal } from "@/components/dashboard-reveal";
import { LiveDemo } from "@/components/live-demo";
import { FeaturesBento } from "@/components/features-bento";
import { Pricing } from "@/components/pricing";
import { FinancialEcosystem } from "@/components/financial-ecosystem";
import { EnterpriseFooter } from "@/components/enterprise-footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-light">
      <EnterpriseHero />
      <DashboardReveal />
      <LiveDemo />
      <FeaturesBento />
      <Pricing />
      <FinancialEcosystem />
      <EnterpriseFooter />
    </div>
  );
};

export default Index;