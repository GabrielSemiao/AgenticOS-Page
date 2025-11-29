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
      question: "Isso pode bloquear meu número de WhatsApp?",
      answer:
        "Não. O AgenticOS utiliza a API Oficial ou emuladores de alta fidelidade com aquecimento de chip automático, reduzindo o risco de bloqueio a quase zero.",
    },
    {
      question: "Preciso saber programar para configurar?",
      answer:
        "Zero código. Você conecta seu WhatsApp lendo um QR Code (igual ao WhatsApp Web) e nosso sistema configura o resto em 2 minutos.",
    },
    {
      question: "O Agente sabe responder sobre meus produtos específicos?",
      answer:
        "Sim. Você faz o upload de um PDF ou texto com suas informações e a IA 'aprende' tudo sobre sua empresa instantaneamente.",
    },
    {
      question: "E se eu não gostar?",
      answer:
        "Garantia incondicional de 7 dias. Se o sistema não lucrar para você, devolvemos 100% do seu dinheiro.",
    },
  ];

  return (
    <section className="py-32 px-4 bg-[#050505]">
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