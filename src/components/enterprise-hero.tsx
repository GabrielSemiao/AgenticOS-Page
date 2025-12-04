"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export const EnterpriseHero = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="h-svh w-full relative flex flex-col items-center justify-center antialiased overflow-hidden">
      {/* Central Glow Effect - Z-10 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
        <div className="bg-emerald-500/10 blur-[120px] rounded-full h-[300px] w-[300px]"></div>
      </div>

      {/* Content - Z-20 */}
      <div className="relative z-20 flex flex-col items-center gap-8 text-center px-6 md:px-4 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-6xl md:text-9xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 uppercase leading-[0.9]"
        >
          <TypeAnimation
            sequence={[
              'Sua Empresa.\n100% Autônoma.',
              2000,
              'Sua Empresa.\n100% Eficiente.',
              2000,
              'Sua Empresa.\n100% Imparável.',
              2000,
              'Sua Empresa.\n100% Lucrativa.',
              2000,
            ]}
            wrapper="span"
            speed={50}
            deletionSpeed={70}
            repeat={Infinity}
            cursor={true}
            style={{ whiteSpace: 'pre-line' }}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-base md:text-xl text-zinc-400 max-w-xs sm:max-w-xl md:max-w-3xl leading-relaxed"
        >
          Não contrate mais funcionários, instale o AgenticOS. O único Agente de IA com Banco Digital Nativo que negocia, vende e processa pagamentos via Pix no WhatsApp 24/7.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 mt-4 pointer-events-auto"
        >
          <Button
            size="lg"
            onClick={scrollToPricing}
            className="bg-white text-black hover:bg-zinc-100 rounded-sm px-8 py-6 text-base font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300"
          >
            Iniciar Operação Agora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};