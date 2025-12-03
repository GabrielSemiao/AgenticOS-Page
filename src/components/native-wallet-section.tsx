"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, FileText, Check, Zap } from "lucide-react";

export const NativeWalletSection = () => {
  return (
    <section className="py-32 px-4 bg-transparent border-t border-zinc-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight">
            Banco Digital Integrado.
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-3xl mx-auto">
            Adeus, APIs complexas. Sua conta digital é criada automaticamente. Venda no WhatsApp, receba no AgenticOS e saque instantaneamente.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mb-12"
        ></motion.div>

        {/* Wallet Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-emerald-500/20 via-emerald-400/20 to-emerald-500/20 blur-xl"></div>
            
            {/* Main Card */}
            <div className="relative bg-zinc-900/50 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-8 md:p-10 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                {/* Left Side - Balance */}
                <div className="flex-1">
                  <div className="mb-2">
                    <span className="text-sm text-zinc-500 font-light">Saldo Disponível</span>
                  </div>
                  <div className="text-5xl md:text-6xl font-mono text-white mb-4 tracking-tight">
                    R$ 14.350,00
                  </div>
                  <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm text-emerald-400 font-light">Taxa Simplificada: 2.5%</span>
                  </div>
                </div>

                {/* Right Side - Actions */}
                <div className="flex flex-col gap-3 md:min-w-[200px]">
                  <Button
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
                  >
                    <ArrowUpRight className="w-5 h-5 mr-2" />
                    Solicitar Saque
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-zinc-700 hover:border-emerald-500/50 bg-transparent text-white hover:bg-emerald-500/5 rounded-lg font-medium transition-all duration-300"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Extrato
                  </Button>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-zinc-400 font-light">Status do Gateway:</span>
                    <span className="text-emerald-400 font-medium">Operacional</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-400 font-light">Compensação:</span>
                  <span className="text-white font-medium">Instantânea (D+0)</span>
                </div>
              </div>

              {/* Radial Gradient Background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)] rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        </motion.div>

        {/* Features Checkmarks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: "Zero Configuração (Plug & Play)" },
            { label: "Split de Pagamento Automático" },
            { label: "Taxa fixa de R$ 1,50 (mínimo)" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="flex items-center gap-3 bg-zinc-900/30 border border-zinc-800 rounded-lg p-4 backdrop-blur-sm"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30 flex-shrink-0">
                <Check className="w-3 h-3 text-emerald-400" />
              </div>
              <span className="text-zinc-300 font-light text-sm">{feature.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};