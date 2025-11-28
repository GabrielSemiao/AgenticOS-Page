"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Check, CheckCheck } from "lucide-react";

export const LiveDemo = () => {
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean; time: string }>>([]);
  const [isTyping, setIsTyping] = useState(false);

  const conversation = [
    { text: "Olá! Gostaria de agendar um horário", isBot: false, time: "14:23" },
    { text: "Olá! Claro, posso te ajudar com isso. Para qual dia você gostaria de agendar?", isBot: true, time: "14:23" },
    { text: "Amanhã às 15h está disponível?", isBot: false, time: "14:24" },
    { text: "Perfeito! Confirmei seu agendamento para amanhã às 15h. Você receberá um lembrete 1 hora antes. Posso ajudar com mais alguma coisa?", isBot: true, time: "14:24" },
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < conversation.length) {
        setIsTyping(true);
        setTimeout(() => {
          setMessages((prev) => [...prev, conversation[currentIndex]]);
          setIsTyping(false);
          currentIndex++;
        }, 1500);
      } else {
        clearInterval(interval);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Veja a Mágica Acontecer
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Simulação em tempo real de como o AgenticOS atende seus clientes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          {/* WhatsApp-like interface */}
          <div className="rounded-3xl overflow-hidden border border-gray-700/50 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                AI
              </div>
              <div>
                <div className="text-white font-semibold">AgenticOS</div>
                <div className="text-green-100 text-xs">online</div>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-3 min-h-[400px] bg-[#0A0A0A]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isBot
                        ? "bg-gray-800 text-white"
                        : "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-xs opacity-70">{message.time}</span>
                      {!message.isBot && <CheckCheck className="w-3 h-3 text-blue-300" />}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-800 rounded-lg p-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};