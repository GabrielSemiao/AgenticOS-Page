"use client";

import { motion } from "framer-motion";
import { MessageCircle, Calendar, DollarSign, Brain, Zap, Shield } from "lucide-react";

export const FeaturesBento = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Integração WhatsApp",
      description: "Conecte sua empresa ao WhatsApp e deixe a IA atender todos os clientes",
      color: "from-green-500 to-emerald-500",
      size: "md:col-span-2",
    },
    {
      icon: Calendar,
      title: "Agendamento Automático",
      description: "Sincronização perfeita com Google Calendar",
      color: "from-blue-500 to-cyan-500",
      size: "md:col-span-1",
    },
    {
      icon: DollarSign,
      title: "Vendas no Piloto Automático",
      description: "Receba pagamentos via Pix automaticamente",
      color: "from-purple-500 to-pink-500",
      size: "md:col-span-1",
    },
    {
      icon: Brain,
      title: "Cérebro Treinável",
      description: "IA que aprende com seu negócio e melhora continuamente",
      color: "from-violet-500 to-purple-500",
      size: "md:col-span-2",
    },
    {
      icon: Zap,
      title: "Respostas Instantâneas",
      description: "Tempo de resposta < 1 segundo",
      color: "from-yellow-500 to-orange-500",
      size: "md:col-span-1",
    },
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Criptografia de ponta a ponta",
      color: "from-gray-500 to-slate-500",
      size: "md:col-span-1",
    },
  ];

  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Tudo que Você Precisa
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Um sistema completo para automatizar seu negócio do início ao fim
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${feature.size} group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300`}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} p-0.5 mb-6`}>
                  <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/5 group-hover:to-blue-600/5 rounded-2xl transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};