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
      company: "STONE",
      role: "Vendas B2B e Escala",
      avatar: "S",
      text: "Nossa força de vendas é gigantesca. O AgenticOS automatizou a qualificação inicial de leads no WhatsApp, permitindo que nossos agentes humanos foquem apenas no fechamento. O CAC caiu 35%.",
    },
    {
      company: "QuintoAndar",
      role: "Agendamento e Burocracia",
      avatar: "Q",
      text: "O pesadelo do 'conflito de agenda' acabou. A sincronização nativa com o Google Calendar permitiu agendar 4x mais visitas sem nenhum erro humano. A gestão de chaves nunca foi tão simples.",
    },
    {
      company: "Hotmart",
      role: "Infoprodutos e Checkout",
      avatar: "H",
      text: "Para lançamentos de 7 dígitos, velocidade é tudo. O checkout nativo dentro do WhatsApp aumentou a conversão de boletos em 60%. O dinheiro cai na conta em tempo real.",
    },
    {
      company: "Reserva",
      role: "Varejo e Personalidade",
      avatar: "R",
      text: "O maior medo era perder o 'tom de voz' humano da Reserva. A IA do AgenticOS aprendeu nossa cultura em minutos e atende o cliente com a mesma irreverência dos nossos vendedores.",
    },
    {
      company: "Loggi",
      role: "Infraestrutura e Escala",
      avatar: "L",
      text: "Precisávamos de uma infraestrutura que aguentasse picos de Black Friday sem cair. O AgenticOS processou 50 mil mensagens por minuto com latência zero. Infraestrutura de nível global.",
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