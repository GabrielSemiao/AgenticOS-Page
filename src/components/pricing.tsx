"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Mensal",
      price: "497",
      period: "/mês",
      description: "Perfeito para começar",
      features: [
        "Atendimento WhatsApp ilimitado",
        "Agendamento automático",
        "Vendas via Pix",
        "CRM integrado",
        "Suporte prioritário",
      ],
      popular: false,
    },
    {
      name: "Anual",
      price: "397",
      period: "/mês",
      description: "Economize 20% pagando anualmente",
      features: [
        "Tudo do plano Mensal",
        "2 meses grátis",
        "Treinamento personalizado",
        "Integrações premium",
        "Suporte VIP 24/7",
        "Relatórios avançados",
      ],
      popular: true,
      badge: "Mais Popular",
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
            Invista no Futuro do Seu Negócio
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Escolha o plano ideal e comece a escalar hoje mesmo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative p-8 rounded-2xl backdrop-blur-sm ${
                plan.popular
                  ? "bg-gradient-to-br from-purple-950/50 to-blue-900/30 border-2 border-purple-500/50"
                  : "bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-gray-400 text-xl">R$</span>
                  <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? "bg-purple-500/20" : "bg-gray-700/50"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-purple-400" : "text-gray-400"}`} />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full py-6 text-lg rounded-xl ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
                }`}
              >
                Começar Agora
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 mt-8 text-sm"
        >
          Garantia de 7 dias. Cancele quando quiser.
        </motion.p>
      </div>
    </section>
  );
};