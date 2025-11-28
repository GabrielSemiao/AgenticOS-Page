"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export const FinancialEcosystem = () => {
  const integrations = [
    { name: "SuitPay", status: "active", logo: "SP" },
    { name: "Mercado Pago", status: "soon", logo: "MP" },
    { name: "Stripe", status: "soon", logo: "ST" },
    { name: "Asaas", status: "soon", logo: "AS" },
  ];

  return (
    <section className="py-32 px-4 bg-[#050505] border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight">
            Infraestrutura Bancária Nativa via WhatsApp
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-3xl mx-auto">
            Recebimento instantâneo via Pix. O dinheiro cai na sua conta, a IA libera o acesso.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="relative bg-zinc-950 border border-zinc-800 rounded-lg p-8 flex flex-col items-center justify-center gap-4 hover:border-zinc-700 transition-colors"
            >
              {integration.status === "soon" && (
                <Badge variant="outline" className="absolute top-3 right-3 text-xs border-zinc-700 text-zinc-500">
                  Em breve
                </Badge>
              )}
              <div className="w-16 h-16 bg-zinc-900 rounded-lg flex items-center justify-center border border-zinc-800">
                <span className="text-white font-light text-xl">{integration.logo}</span>
              </div>
              <span className="text-zinc-400 text-sm font-light">{integration.name}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-zinc-950 border border-zinc-800 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-zinc-400 text-sm font-light">Sistema de pagamento operacional</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};