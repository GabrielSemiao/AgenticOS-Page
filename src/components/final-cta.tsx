"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-32 px-4 bg-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-7xl font-light text-white tracking-tight leading-tight">
            Pronto para escalar sua operação?
          </h2>

          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            Junte-se a empresas que automatizaram mais de R$ 10 milhões em vendas este mês.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-zinc-100 rounded-sm px-12 py-8 text-xl font-semibold shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300"
            >
              <a
                href="https://wa.me/5565999746141?text=Ol%C3%A1!%20Quero%20aproveitar%20a%20oferta%20do%20Plano%20Anual%20(Enterprise)%20com%20desconto."
                target="_blank"
                rel="noopener noreferrer"
              >
                Obter Acesso Antecipado
                <ArrowRight className="ml-3 w-6 h-6" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};