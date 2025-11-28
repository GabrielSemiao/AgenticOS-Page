"use client";

import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              AgenticOS
            </h3>
            <p className="text-gray-500 text-sm">
              O futuro da automação empresarial
            </p>
          </div>

          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-purple-400 transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Privacidade
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Contato
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-800/50 text-center text-gray-500 text-sm"
        >
          © {currentYear} AgenticOS. Todos os direitos reservados.
        </motion.div>
      </div>
    </footer>
  );
};