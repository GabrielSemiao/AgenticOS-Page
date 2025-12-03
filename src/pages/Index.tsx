"use client";

import { EnterpriseHero } from "@/components/enterprise-hero";
import { DashboardReveal } from "@/components/dashboard-reveal";
import { LiveDemo } from "@/components/live-demo";
import { FeaturesBento } from "@/components/features-bento";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import { Pricing } from "@/components/pricing";
import { NativeWalletSection } from "@/components/native-wallet-section";
import { SecuritySection } from "@/components/security-section";
import { FinalCTA } from "@/components/final-cta";
import { EnterpriseFooter } from "@/components/enterprise-footer";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Index = () => {
  const testimonials = [
    {
      company: "TechFlow",
      role: "CTO · SaaS B2B",
      avatar: "T",
      text: "Reduzimos nosso CAC em 42% no primeiro mês. O AgenticOS qualifica os leads frios e entrega apenas o fechamento para nosso time. É uma máquina.",
    },
    {
      company: "Varejo 360",
      role: "Head de Growth · E-commerce",
      avatar: "V",
      text: "Na Black Friday, o sistema processou 15.000 mensagens e fechou R$ 400k em vendas sem intervenção humana. O checkout nativo é game-changer.",
    },
    {
      company: "EduPrime",
      role: "CEO · Educação",
      avatar: "E",
      text: "O fim do 'falo com você amanhã'. O Agente tirou dúvidas e matriculou alunos às 3 da manhã de domingo. Nossa conversão noturna triplicou.",
    },
    {
      company: "FinLog",
      role: "Diretor de Operações · Logística",
      avatar: "F",
      text: "Segurança era nossa maior trava. A criptografia e a infraestrutura isolada do AgenticOS nos deram a confiança para automatizar pagamentos via WhatsApp.",
    },
    {
      company: "Urban Real Estate",
      role: "Gerente Comercial · Imobiliária",
      avatar: "U",
      text: "Antes perdíamos 30% dos leads por demora na resposta. Agora o tempo de resposta é de 0.8s. O cliente nem percebe que é IA, só percebe a eficiência.",
    },
  ];

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
        <TestimonialsSection
          title="A infraestrutura secreta das empresas que mais crescem."
          description="Junte-se a líderes de mercado que trocaram operações manuais por inteligência autônoma e escalaram seus resultados."
          testimonials={testimonials}
        />
        <FAQSection />
        <Pricing />
        <NativeWalletSection />
        <SecuritySection />
        <FinalCTA />
        <EnterpriseFooter />
      </div>
    </>
  );
};

export default Index;