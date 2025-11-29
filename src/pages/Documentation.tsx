"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Zap, Brain, Webhook } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Documentation = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const menuItems = [
    { id: "overview", label: "Visão Geral", icon: FileText },
    { id: "connection", label: "Conexão WhatsApp", icon: Zap },
    { id: "training", label: "Treinando o Cérebro", icon: Brain },
    { id: "webhooks", label: "Webhooks & API", icon: Webhook },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-[-1] bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link to="/">
              <Button
                variant="ghost"
                className="text-zinc-400 hover:text-white mb-8 -ml-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para a Home
              </Button>
            </Link>

            <h1 className="text-5xl md:text-6xl font-light text-white mb-4 tracking-tight">
              Documentation
            </h1>
            <p className="text-zinc-500 font-light">
              Developer Hub - Guia completo de integração
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Left Column - Navigation Menu */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-1"
            >
              <nav className="md:sticky md:top-24 space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                        activeSection === item.id
                          ? "bg-zinc-800 text-white border border-zinc-700"
                          : "text-zinc-500 hover:text-white hover:bg-zinc-900/50"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-light text-sm">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-3"
            >
              <div className="prose prose-invert prose-lg max-w-none">
                {/* Section 1: Overview */}
                <section id="overview" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl font-light text-white mb-4 tracking-tight">
                    1. Visão Geral (Overview)
                  </h2>
                  <p className="text-zinc-400 leading-relaxed">
                    Bem-vindo à documentação oficial do AgenticOS. Nossa
                    plataforma permite transformar seu WhatsApp em um canal de
                    vendas autônomo em menos de 5 minutos.
                  </p>
                </section>

                {/* Section 2: Connection */}
                <section id="connection" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl font-light text-white mb-4 tracking-tight">
                    2. Conexão (Quick Start)
                  </h2>
                  <p className="text-zinc-400 leading-relaxed mb-4">
                    Para iniciar, você não precisa de chaves de API da Meta.
                  </p>
                  <ol className="space-y-3 text-zinc-400">
                    <li>
                      Acesse o Dashboard → <code className="bg-zinc-800 px-2 py-1 rounded text-sm text-purple-400">'Dispositivos'</code>.
                    </li>
                    <li>
                      Clique em <code className="bg-zinc-800 px-2 py-1 rounded text-sm text-purple-400">'Novo Dispositivo'</code>.
                    </li>
                    <li>
                      Escaneie o QR Code gerado usando seu aplicativo WhatsApp
                      (Menu → Aparelhos Conectados).
                    </li>
                    <li>
                      <strong className="text-white">Status:</strong> Aguarde o
                      indicador ficar verde (<span className="text-green-400">'Online'</span>).
                    </li>
                  </ol>
                </section>

                {/* Section 3: Training */}
                <section id="training" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl font-light text-white mb-4 tracking-tight">
                    3. Treinando o Cérebro (Knowledge Base)
                  </h2>
                  <p className="text-zinc-400 leading-relaxed mb-4">
                    O AgenticOS aprende sobre sua empresa através de arquivos.
                  </p>
                  <ol className="space-y-3 text-zinc-400">
                    <li>
                      Vá em <code className="bg-zinc-800 px-2 py-1 rounded text-sm text-purple-400">'Cérebro'</code> → <code className="bg-zinc-800 px-2 py-1 rounded text-sm text-purple-400">'Upload'</code>.
                    </li>
                    <li>
                      Envie seus PDFs de apresentação, tabelas de preços (CSV)
                      ou manuais técnicos.
                    </li>
                    <li>
                      A indexação leva cerca de <strong className="text-white">30-60 segundos</strong>.
                    </li>
                  </ol>
                </section>

                {/* Section 4: Payments */}
                <section id="payments" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl font-light text-white mb-4 tracking-tight">
                    4. Configurando Pagamentos (Gateway)
                  </h2>
                  <ol className="space-y-3 text-zinc-400">
                    <li>
                      Vá em <code className="bg-zinc-800 px-2 py-1 rounded text-sm text-purple-400">'Integrações'</code>.
                    </li>
                    <li>
                      Selecione seu Gateway (Ex: SuitPay, Mercado Pago).
                    </li>
                    <li>
                      Insira suas credenciais (<code className="bg-zinc-800 px-2 py-1 rounded text-sm text-cyan-400">Client_ID</code>, <code className="bg-zinc-800 px-2 py-1 rounded text-sm text-cyan-400">Client_Secret</code>).
                    </li>
                    <li>
                      Ative a opção <code className="bg-zinc-800 px-2 py-1 rounded text-sm text-green-400">'Gerar Pix Automático'</code>.
                    </li>
                  </ol>
                </section>

                {/* Section 5: Webhooks */}
                <section id="webhooks" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl font-light text-white mb-4 tracking-tight">
                    5. Webhooks & API (Para Desenvolvedores)
                  </h2>
                  <p className="text-zinc-400 leading-relaxed mb-4">
                    Você pode receber notificações de vendas em seu sistema
                    externo.
                  </p>
                  
                  <div className="mb-6">
                    <p className="text-sm text-zinc-500 mb-2 font-mono">
                      Exemplo de Payload de Venda:
                    </p>
                    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 overflow-x-auto">
                      <pre className="text-sm font-mono text-zinc-300">
{`{
  "event": "sale.completed",
  "amount": 1897.00,
  "customer": {
    "phone": "5511999999999",
    "name": "João Silva"
  },
  "timestamp": "2025-11-29T10:00:00Z"
}`}
                      </pre>
                    </div>
                  </div>

                  <p className="text-zinc-400 leading-relaxed">
                    Configure sua URL de callback em{" "}
                    <code className="bg-zinc-800 px-2 py-1 rounded text-sm text-purple-400">
                      'Configurações'
                    </code>{" "}
                    →{" "}
                    <code className="bg-zinc-800 px-2 py-1 rounded text-sm text-purple-400">
                      'Webhooks'
                    </code>
                    .
                  </p>
                </section>
              </div>

              <div className="mt-16 pt-8 border-t border-zinc-800">
                <Link to="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white/20 hover:bg-white/5 hover:border-white/30"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar para a Home
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;