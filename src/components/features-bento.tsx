"use client";

import { motion } from "framer-motion";
import { Brain, DollarSign, Calendar, QrCode, Zap } from "lucide-react";

export const FeaturesBento = () => {
  return (
    <section className="py-32 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight">
            Uma máquina de imprimir dinheiro.
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-3xl mx-auto">
            Substitua 5 ferramentas e 3 funcionários por um único Sistema Operacional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 group relative bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="flex items-start gap-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                  <Brain className="w-8 h-8 text-purple-400 animate-pulse" />
                </div>
                <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-light text-white mb-3 tracking-tight">
                  Cérebro de Vendas (IA)
                </h3>
                <p className="text-zinc-400 font-light leading-relaxed">
                  Ele não apenas responde. Ele converte. Treinado com os melhores scripts de vendas do mercado para quebrar objeções e fechar contratos.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:row-span-2 group relative bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-green-500/50 transition-all duration-300 flex flex-col"
          >
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-lg flex items-center justify-center border border-green-500/30">
                <DollarSign className="w-8 h-8 text-green-400" />
              </div>
              <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full"></div>
            </div>
            <h3 className="text-2xl font-light text-white mb-3 tracking-tight">
              Caixa Automático 24h
            </h3>
            <p className="text-zinc-400 font-light leading-relaxed flex-1">
              Integração nativa com Pix. O Agente gera o código, identifica o pagamento e libera o acesso. O dinheiro cai na sua conta enquanto você dorme.
            </p>
            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400 font-light">Recebimento instantâneo</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                <Calendar className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            <h3 className="text-xl font-light text-white mb-3 tracking-tight">
              Agenda Blindada
            </h3>
            <p className="text-zinc-400 font-light leading-relaxed text-sm">
              Sincronização bidirecional com Google Calendar. Zero conflitos. Zero No-Shows.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group relative bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-cyan-500/50 transition-all duration-300"
          >
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-600/20 to-cyan-800/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                <QrCode className="w-8 h-8 text-cyan-400" />
              </div>
            </div>
            <h3 className="text-xl font-light text-white mb-3 tracking-tight">
              Instalação em 2 Minutos
            </h3>
            <p className="text-zinc-400 font-light leading-relaxed text-sm">
              Conecte seu WhatsApp via QR Code e comece a vender. Sem código, sem complexidade.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};