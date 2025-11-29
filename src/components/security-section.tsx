"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Server, Key, Check } from "lucide-react";

export const SecuritySection = () => {
  const securityFeatures = [
    "Zero Data Training (Não usamos seus dados para treinar a IA)",
    "Backups Automáticos Diários",
  ];

  return (
    <section className="py-32 px-4 bg-[#050505] border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-light">Segurança Empresarial</span>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
                Segurança de Nível Bancário.
              </h2>
              <p className="text-lg text-zinc-400 font-light leading-relaxed">
                Seus dados e os de seus clientes são protegidos por criptografia de ponta a ponta (E2E). 
                Infraestrutura isolada em servidores Tier-4, garantindo 99.9% de uptime e conformidade total com a LGPD.
              </p>
            </div>

            <div className="space-y-4">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30 flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span className="text-zinc-300 font-light">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual Abstrato */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Card Principal com Glassmorphism */}
              <div className="relative bg-zinc-900/50 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-12 shadow-[0_0_50px_rgba(16,185,129,0.15)]">
                {/* Grid de Ícones */}
                <div className="grid grid-cols-3 gap-8">
                  {/* Lock Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="flex items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/30">
                      <Lock className="w-8 h-8 text-emerald-400" />
                    </div>
                  </motion.div>

                  {/* Server Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="flex items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/30">
                      <Server className="w-8 h-8 text-emerald-400" />
                    </div>
                  </motion.div>

                  {/* Key Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, type: "spring" }}
                    className="flex items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/30">
                      <Key className="w-8 h-8 text-emerald-400" />
                    </div>
                  </motion.div>

                  {/* Shield Central (Maior) */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, type: "spring" }}
                    className="col-span-3 flex items-center justify-center mt-4"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl flex items-center justify-center border-2 border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                      <ShieldCheck className="w-12 h-12 text-emerald-400" />
                    </div>
                  </motion.div>
                </div>

                {/* Efeito de Rede Brilhante */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)] rounded-2xl pointer-events-none"></div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl -z-10 scale-110"></div>

              {/* Floating Particles */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-3 h-3 bg-emerald-400 rounded-full blur-sm"
              ></motion.div>
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 w-2 h-2 bg-emerald-400 rounded-full blur-sm"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};