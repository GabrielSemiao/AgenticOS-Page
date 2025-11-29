"use client";

import { motion } from "framer-motion";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const EnterpriseHero = () => {
  return (
    <div className="h-svh w-screen flex flex-col gap-8 items-center justify-center relative overflow-hidden bg-neutral-900">
      {/* Deep Space Background */}
      <div className="absolute inset-0 z-0">
        <StarsBackground />
      </div>
      
      {/* Shooting Stars Layer */}
      <div className="absolute inset-0 z-10">
        <ShootingStars />
      </div>
      
      {/* Content */}
      <div className="z-20 flex flex-col items-center gap-8 text-center px-6 md:px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-6xl md:text-9xl font-black tracking-tighter text-white pointer-events-none uppercase leading-[0.9]"
        >
          Sua Empresa.
          <br />
          100% Autônoma.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-base md:text-xl text-zinc-400 max-w-xs sm:max-w-xl md:max-w-3xl leading-relaxed pointer-events-none"
        >
          Não contrate mais funcionários, instale o AgenticOS. O primeiro Sistema Operacional que conecta WhatsApp, Bancos e CRM para vender, agendar e gerenciar sua empresa 24/7. Sem pausas, sem erros.
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
    </div>
  );
};