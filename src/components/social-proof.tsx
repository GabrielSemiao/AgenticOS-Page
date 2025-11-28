"use client";

import { motion } from "framer-motion";

export const SocialProof = () => {
  const companies = Array(6).fill(null);

  return (
    <section className="py-20 px-4 border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 mb-12 text-sm uppercase tracking-wider"
        >
          Empresas que escalaram com AgenticOS
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="w-32 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border border-gray-700/50">
                <div className="w-20 h-8 bg-gray-700/50 rounded" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};