"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CheckCheck } from "lucide-react";

type ChatMessage = { text: string; isBot: boolean; time: string };

export const LiveDemo = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const conversation: ChatMessage[] = [
    { text: "Oi, como funciona o plano anual?", isBot: false, time: "14:23" },
    { text: "Olá! O plano anual te dá 2 meses grátis e acesso total à IA. É o melhor custo-benefício para sua escala. Gostaria de garantir o desconto de R$ 400 agora?", isBot: true, time: "14:23" },
    { text: "Sim, quero.", isBot: false, time: "14:24" },
    { text: "Perfeito! Aqui está seu código Pix seguro. Assim que pagar, libero seu acesso imediatamente.", isBot: true, time: "14:24" },
  ];

  const indexRef = useRef(0);
  const timeoutsRef = useRef<number[]>([]);

  const scheduleNext = (typingDelayMs: number) => {
    if (indexRef.current >= conversation.length) {
      setIsTyping(false);
      return;
    }
    setIsTyping(true);
    const id = window.setTimeout(() => {
      const idx = indexRef.current;
      const msg = conversation[idx];
      if (msg) {
        setMessages((prev) => [...prev, msg]);
      }
      indexRef.current = idx + 1;
      setIsTyping(false);

      if (indexRef.current < conversation.length) {
        // Aguarda uma pausa entre mensagens e inicia nova digitação
        const gapId = window.setTimeout(() => scheduleNext(1500), 2000);
        timeoutsRef.current.push(gapId);
      }
    }, typingDelayMs);
    timeoutsRef.current.push(id);
  };

  useEffect(() => {
    // start: pequena espera e inicia a primeira digitação
    const startId = window.setTimeout(() => scheduleNext(1500), 500);
    timeoutsRef.current.push(startId);

    return () => {
      timeoutsRef.current.forEach((t) => clearTimeout(t));
      timeoutsRef.current = [];
    };
  }, []);

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Texto Explicativo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
                Ele vende melhor que seu melhor funcionário.
              </h2>
              <p className="text-lg text-zinc-400 font-light leading-relaxed">
                O Agente reconhece o cliente, entende a intenção de compra, negocia valores e envia o link de pagamento. Tudo em segundos.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { label: "Resposta em 0.8s", icon: "⚡" },
                { label: "Persuasão Treinada", icon: "🎯" },
                { label: "Checkout Nativo", icon: "💳" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                    <span className="text-green-400 text-xs">✓</span>
                  </div>
                  <span className="text-white font-light">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - iPhone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* iPhone Frame */}
              <div className="w-[320px] h-[650px] bg-zinc-950 rounded-[3rem] border-[14px] border-zinc-900 shadow-2xl relative overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-zinc-950 rounded-b-3xl z-10"></div>

                {/* WhatsApp Interface */}
                <div className="h-full flex flex-col bg-[#0A0A0A]">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-green-600/90 to-green-700/90 backdrop-blur-sm p-4 pt-8 flex items-center gap-3 border-b border-green-800/30">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-semibold text-sm">
                      AI
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">AgenticOS</div>
                      <div className="text-green-100 text-xs">online</div>
                    </div>
                  </div>

                  {/* Messages Area */}
                  <div
                    className="flex-1 p-4 space-y-3 overflow-y-auto"
                    style={{
                      backgroundImage:
                        "url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffffff%27 fill-opacity=%270.02%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
                    }}
                  >
                    {messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                      >
                        <div
                          className={`max-w-[75%] rounded-lg p-3 ${
                            message.isBot
                              ? "bg-zinc-800/90 backdrop-blur-sm text-white"
                              : "bg-gradient-to-r from-green-600/90 to-green-700/90 backdrop-blur-sm text-white"
                          }`}
                        >
                          <p className="text-sm leading-relaxed">{message.text}</p>
                          <div className="flex items-center justify-end gap-1 mt-1">
                            <span className="text-xs opacity-70">{message.time}</span>
                            {!message.isBot && <CheckCheck className="w-3 h-3 text-green-200" />}
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {isTyping && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                        <div className="bg-zinc-800/90 backdrop-blur-sm rounded-lg p-3">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                            <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                            <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-purple-500/20 blur-3xl -z-10 scale-110"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};