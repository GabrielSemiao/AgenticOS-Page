"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export const ProblemSolution = () => {
  const problems = [
    "Atendimento lento e inconsistente",
    "Perda de vendas fora do horário",
    "Agendamentos desorganizados",
    "CRM desatualizado e manual",
  ];

  const solutions = [
    "Respostas instantâneas 24/7",
    "Vendas automáticas via Pix",
    "Agenda sincronizada no Google",
    "CRM atualizado em tempo real",
  ];

  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
        >
          Do Caos ao Controle Total
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-red-950/20 to-red-900/10 border border-red-900/30 backdrop-blur-sm"
          >
            <div className="absolute top-4 right-4">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="w-6 h-6 text-red-400" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-red-400">Sem AgenticOS</h3>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-400">{problem}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-950/20 to-blue-900/10 border border-purple-500/30 backdrop-blur-sm"
          >
            <div className="absolute top-4 right-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                <Check className="w-6 h-6 text-purple-400" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Com AgenticOS
            </h3>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{solution}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};