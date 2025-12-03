"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "O Agente realmente substitui um funcionário humano?",
      answer:
        "Sim. O AgenticOS trabalha 24/7, responde instantaneamente e segue scripts de vendas complexos. Ele não fica doente, não tira folgas e gerencia centenas de clientes simultaneamente sem perder a paciência.",
    },
    {
      question: "Isso pode bloquear meu número de WhatsApp?",
      answer:
        "Nossa infraestrutura utiliza emulação de comportamento humano e aquecimento de chip, reduzindo drasticamente o risco de bloqueios. Operamos dentro das diretrizes da API oficial sempre que possível.",
    },
    {
      question: "Como funciona o recebimento das vendas?",
      answer:
        "É tudo nativo. O Agente gera o Pix, o cliente paga e o dinheiro cai instantaneamente na sua carteira AgenticOS. Cobramos apenas uma taxa operacional de 2.5% sobre o sucesso. Sem mensalidades de gateway.",
    },
    {
      question: "Preciso deixar meu computador ligado?",
      answer:
        "Não. O AgenticOS roda 100% na nuvem (Cloud Enterprise). Você escaneia o QR Code uma vez e pode desligar seu celular ou computador que o sistema continua vendendo.",
    },
    {
      question: "E se eu não gostar do resultado?",
      answer:
        "Garantia Blindada de 7 Dias. Se o Agente não colocar dinheiro no seu bolso na primeira semana, devolvemos 100% do valor da sua assinatura. O risco é todo nosso.",
    },
  ];

  return (
    <section className="py-32 px-4 bg-transparent">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-zinc-800"
              >
                <AccordionTrigger className="text-left text-white hover:text-zinc-300 transition-colors py-6 text-lg font-light">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 font-light leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};