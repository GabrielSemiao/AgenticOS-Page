"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Lock } from "lucide-react";

export const FinancialEcosystem = () => {
  const integrations = [
    { 
      name: "SuitPay", 
      status: "active", 
      logo: "SuitPay",
      description: "Gateway Principal"
    },
    { 
      name: "Mercado Pago", 
      status: "soon", 
      logo: "Mercado Pago",
      description: "Marketplace"
    },
    { 
      name: "Stripe", 
      status: "soon", 
      logo: "Stripe",
      description: "Internacional"
    },
    { 
      name: "Asaas", 
      status: "soon", 
      logo: "Asaas",
      description: "Recorrência"
    },
  ];

  return (
    <section className="py-32 px-4 bg-[#050505] border-t border-zinc-900 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
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

        {/* Connection Flow Indicator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mb-12"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="group relative"
            >
              {/* Spotlight Effect on Hover */}
              <div className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-emerald-500/20 via-emerald-400/20 to-emerald-500/20 blur-sm"></div>
              
              <div
                className={`relative h-40 rounded-xl border backdrop-blur-sm transition-all duration-300 ${
                  integration.status === "active"
                    ? "bg-gradient-to-br from-emerald-950/30 via-emerald-900/10 to-transparent border-emerald-500/30 group-hover:border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)]"
                    : "bg-zinc-950/50 border-zinc-800 opacity-50 group-hover:opacity-70"
                }`}
              >
                {/* Status Indicator */}
                {integration.status === "active" ? (
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-emerald-400 text-xs font-light">Conectado</span>
                  </div>
                ) : (
                  <Badge 
                    variant="outline" 
                    className="absolute top-4 right-4 text-xs border-zinc-700 text-zinc-500 bg-zinc-900/50"
                  >
                    Em breve
                  </Badge>
                )}

                {/* Card Content */}
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 ${
                      integration.status === "active" 
                        ? "text-white" 
                        : "text-zinc-500"
                    }`}>
                      {integration.logo}
                    </h3>
                    <p className={`text-sm font-light ${
                      integration.status === "active"
                        ? "text-emerald-400/70"
                        : "text-zinc-600"
                    }`}>
                      {integration.description}
                    </p>
                  </div>

                  {/* Connection Indicator */}
                  {integration.status === "active" && (
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    </div>
                  )}
                </div>

                {/* Glow Effect for Active Card */}
                {integration.status === "active" && (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)] rounded-xl pointer-events-none"></div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* System Status */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-zinc-950/80 border border-emerald-500/20 rounded-full px-6 py-3 backdrop-blur-sm">
            <Lock className="w-4 h-4 text-emerald-400" />
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-emerald-400 text-sm font-light">Sistema de pagamento operacional</span>
          </div>
        </motion.div>

        {/* Animated Connection Lines */}
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20" style={{ maxWidth: '1200px' }}>
          <motion.line
            x1="50%"
            y1="20%"
            x2="25%"
            y2="50%"
            stroke="url(#gradient1)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <motion.line
            x1="50%"
            y1="20%"
            x2="75%"
            y2="50%"
            stroke="url(#gradient1)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.7 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(16,185,129,0)" />
              <stop offset="50%" stopColor="rgba(16,185,129,0.5)" />
              <stop offset="100%" stopColor="rgba(16,185,129,0)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};