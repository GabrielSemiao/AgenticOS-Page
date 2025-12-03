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
      question: "Preciso ter conta no Mercado Pago ou outro banco?",
      answer:
        "Não. O AgenticOS cria uma carteira digital para você automaticamente. Todo o dinheiro das vendas cai direto no seu painel e você saca para sua conta PF ou PJ quando quiser.",
    },
    {
      question: "Quais são as taxas por venda?",
      answer:
        "Cobramos apenas 2.5% sobre o valor da venda (com um mínimo de R$ 1,50 por transação). Sem mensalidades extras de gateway e sem taxas escondidas.",
    },
    {
      question: "Quanto tempo demora para eu sacar o dinheiro?",
      answer:
        "O processamento é instantâneo. Assim que o cliente paga o Pix no WhatsApp, o valor fica disponível na sua carteira AgenticOS (D+0) ou conforme regra de segurança padrão.",
    },
    {
      question: "É seguro deixar meu dinheiro com vocês?",
      answer:
        "Sim. Utilizamos infraestrutura bancária regulamentada pelo Banco Central. Seu saldo fica segregado e protegido.",
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