"use client";

import { motion } from "framer-motion";
import { Brain, TrendingUp, Calendar } from "lucide-react";

export const EnterpriseBento = () => {
  const features = [
    {
      icon: Brain,
      title: "Modelos Fundacionais",
      description: "Utilizamos o estado da arte em LLMs (GPT-4o e futuros) para compreensão contextual profunda.",
      gradient: "from-purple-500/10 to-blue-500/10",
      border: "border-purple-500/20",
    },
    {
      icon: TrendingUp,
      title: "Fechamento Autônomo",
      description: "Agentes treinados para negociar, quebrar objeções e finalizar transações financeiras sem intervenção humana.",
      gradient: "from-green-500/10 to-emerald-500/10",
      border: "border-green-500/20",
    },
    {
      icon: Calendar,
      title: "Google Calendar Sync",
      description: "Gestão de agenda em tempo real, eliminando conflitos e no-shows.",
      gradient: "from-blue-500/10 to-cyan-500/10",
      border: "border-blue-500/20",
    },
  ];

  return (
    <section className="py-32 px-4 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight">
            Tecnologia de Ponta
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-3xl mx-auto">
            Arquitetura enterprise-grade construída para escalar
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-zinc-950 border ${feature.border} rounded-lg p-8 hover:border-opacity-50 transition-all duration-300 group`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 border border-zinc-800">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-light text-white mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 font-light leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};