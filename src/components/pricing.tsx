"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Explorer",
      price: "197",
      period: "/mês",
      description: "O Básico",
      features: [
        "Agente de Vendas Básico",
        "Integração Pix",
        "Suporte por Email",
      ],
      popular: false,
      whatsappLink: "https://wa.me/5565999746141?text=Ol%C3%A1!%20Vi%20o%20site%20e%20tenho%20interesse%20no%20Plano%20Mensal%20(Explorer)%20do%20AgenticOS.",
      buttonText: "Começar Mensal",
    },
    {
      name: "Enterprise Pro",
      price: "1.897",
      originalPrice: "2.364",
      period: "/ano",
      installments: "12x de R$ 189,00",
      description: "O No-Brainer",
      features: [
        "Tudo do Explorer",
        "Prioridade na Fila de Processamento",
        "Treinamento Personalizado do Agente",
        "Suporte WhatsApp VIP",
      ],
      popular: true,
      badge: "MAIS POPULAR",
      savings: "Economia de R$ 467/ano",
      whatsappLink: "https://wa.me/5565999746141?text=Ol%C3%A1!%20Quero%20aproveitar%20a%20oferta%20do%20Plano%20Anual%20(Enterprise)%20com%20desconto.",
      buttonText: "Quero Escalar Agora",
    },
  ];

  return (
    <section id="pricing" className="py-32 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight">
            Mais barato que um estagiário.
            <br />
            Mais eficiente que um gerente.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative p-8 rounded-lg backdrop-blur-sm ${
                plan.popular
                  ? "bg-zinc-900/80 border-2 border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.3)]"
                  : "bg-zinc-900/50 border border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-light text-white mb-2 tracking-tight">{plan.name}</h3>
                <p className="text-zinc-500 text-sm mb-6">{plan.description}</p>
                
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  {plan.originalPrice && (
                    <span className="text-zinc-600 text-xl line-through">R$ {plan.originalPrice}</span>
                  )}
                </div>
                
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-zinc-400 text-xl">R$</span>
                  <span className={`text-5xl font-light ${
                    plan.popular 
                      ? "bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent" 
                      : "text-white"
                  }`}>
                    {plan.price}
                  </span>
                  <span className="text-zinc-400">{plan.period}</span>
                </div>
                
                {plan.installments && (
                  <p className="text-zinc-500 text-sm mt-2">{plan.installments}</p>
                )}
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? "bg-purple-500/20 border border-purple-500/30" : "bg-zinc-800 border border-zinc-700"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-purple-400" : "text-zinc-400"}`} />
                    </div>
                    <span className="text-zinc-300 font-light">{feature}</span>
                  </div>
                ))}
              </div>

              {plan.savings && (
                <div className="mb-6 text-center">
                  <span className="inline-block bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2 rounded-full text-sm font-light">
                    {plan.savings}
                  </span>
                </div>
              )}

              <Button
                asChild
                className={`w-full py-6 text-lg rounded-lg font-medium transition-all duration-300 ${
                  plan.popular
                    ? "bg-white text-black hover:bg-zinc-100 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                    : "bg-transparent border-2 border-white/20 text-white hover:bg-white/5 hover:border-white/30"
                }`}
              >
                <a
                  href={plan.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {plan.buttonText}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-zinc-500 mt-12 text-sm font-light"
        >
          Garantia de 7 dias. Cancele quando quiser. Sem pegadinhas.
        </motion.p>
      </div>
    </section>
  );
};