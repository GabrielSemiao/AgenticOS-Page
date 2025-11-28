"use client";

import { EnterpriseHero } from "@/components/enterprise-hero";
import { DashboardReveal } from "@/components/dashboard-reveal";
import { FinancialEcosystem } from "@/components/financial-ecosystem";
import { EnterpriseBento } from "@/components/enterprise-bento";
import { EnterpriseFooter } from "@/components/enterprise-footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-light">
      <EnterpriseHero />
      <DashboardReveal />
      <FinancialEcosystem />
      <EnterpriseBento />
      <EnterpriseFooter />
    </div>
  );
};

export default Index;