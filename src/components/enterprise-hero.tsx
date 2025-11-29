"use client";

import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const EnterpriseHero = () => {
  return (
    <div className="h-svh w-full relative flex flex-col items-center justify-center antialiased bg-neutral-900 overflow-hidden">
      {/* Content - Z-20 */}
      <div className="relative z-20 flex flex-col items-center gap-8 text-center px-6 md:px-4 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-6xl md:text-9xl font-black tracking-tighter text-white uppercase leading-[0.9]"
        >
          Sua Empresa.
          <br />
          100% Autônoma.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-base md:text-xl text-zinc-400 max-w-xs sm:max-w-xl md:max-w-3xl leading-relaxed"
        >
          Não contrate mais funcionários, instale o AgenticOS. O primeiro
          Sistema Operacional que conecta WhatsApp, Bancos e CRM para vender,
          agendar e gerenciar sua empresa 24/7. Sem pausas, sem erros.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 mt-4 pointer-events-auto"
        >
          <Button
            size="lg"
            className="bg-white text-black hover:bg-zinc-100 rounded-sm px-8 py-6 text-base font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300"
          >
            Iniciar Operação Agora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white/30 hover:bg-white/5 hover:border-white/50 rounded-sm px-8 py-6 text-base font-medium transition-all duration-300"
          >
            <Play className="mr-2 w-5 h-5" />
            Ver o Agente Vendendo
          </Button>
        </motion.div>
      </div>

      {/* Background Beams - Z-0 (Last element for proper rendering) */}
      <BackgroundBeams />
    </div>
  );
};