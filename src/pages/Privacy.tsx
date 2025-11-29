"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-[-1] bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
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
              Política de Privacidade
            </h1>
            <p className="text-zinc-500 font-light">
              Última atualização: 29 de Novembro de 2025
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <h2>1. Introdução e Escopo</h2>
            <p>
              A AgenticOS Inc. ("Nós", "Nosso", "Plataforma") está comprometida
              em proteger a privacidade e a segurança dos dados de seus clientes
              corporativos ("Você", "Licenciado"). Esta Política de Privacidade
              descreve como coletamos, usamos, processamos e protegemos as
              informações transacionadas através de nossa infraestrutura de
              Inteligência Artificial e Automação via WhatsApp. Ao utilizar o
              AgenticOS, você concorda explicitamente com as práticas de dados
              descritas neste documento.
            </p>

            <h2>2. Coleta de Dados e Infraestrutura</h2>
            <p>
              Para operar nossa "Autonomous Enterprise Infrastructure",
              coletamos e processamos as seguintes categorias de dados:
            </p>
            <ul>
              <li>
                <strong>Metadados de Comunicação:</strong> Logs de horário,
                duração e status de entrega de mensagens via API do WhatsApp.
              </li>
              <li>
                <strong>Dados Transacionais:</strong> Informações necessárias
                para a geração de cobranças Pix (Chaves, valores, IDs de
                transação e status de compensação). A AgenticOS não armazena
                dados sensíveis de cartão de crédito; estes são processados
                inteiramente por gateways parceiros (Stripe, Mercado Pago,
                SuitPay, Asaas).
              </li>
              <li>
                <strong>Interações com a IA:</strong> Inputs de texto fornecidos
                por seus clientes finais para o processamento pelos nossos
                Modelos de Linguagem (LLMs).
              </li>
            </ul>

            <h2>3. Uso de Inteligência Artificial e LLMs</h2>
            <p>
              O AgenticOS utiliza modelos de ponta (como GPT-4o e similares)
              para processar intenções de venda.
            </p>
            <ul>
              <li>
                <strong>Zero-Training Policy:</strong> Garantimos que nenhum
                dado confidencial das suas conversas ou segredos comerciais é
                utilizado para o treinamento de modelos fundacionais públicos.
                Seus dados permanecem isolados no seu ambiente de execução.
              </li>
              <li>
                <strong>Retenção Temporária:</strong> Os contextos de conversa
                são mantidos em cache criptografado apenas pelo tempo necessário
                para manter a coerência do diálogo (memory window), sendo
                descartados ou anonimizados posteriormente conforme nossas
                políticas de retenção.
              </li>
            </ul>

            <h2>4. Segurança de Dados e Criptografia</h2>
            <p>
              Empregamos medidas de segurança de nível bancário ("Bank-Grade
              Security"):
            </p>
            <ul>
              <li>
                <strong>Criptografia:</strong> Todos os dados em repouso são
                criptografados usando o padrão AES-256. Dados em trânsito são
                protegidos via TLS 1.3.
              </li>
              <li>
                <strong>Isolamento de Tenant:</strong> A infraestrutura de cada
                cliente é logicamente isolada para evitar vazamento de dados
                cruzado (Cross-tenant data leakage).
              </li>
            </ul>

            <h2>5. Compartilhamento com Terceiros</h2>
            <p>
              Não vendemos, alugamos ou negociamos seus dados. O compartilhamento
              ocorre estritamente com provedores de infraestrutura essenciais
              para a operação do SaaS:
            </p>
            <ul>
              <li>Provedores de Cloud (AWS/Vercel) para hospedagem.</li>
              <li>
                Provedores de Gateway de Pagamento para processamento financeiro.
              </li>
              <li>
                Provedores de API de Mensageria (Meta/Partners) para entrega de
                mensagens.
              </li>
            </ul>

            <h2>6. Seus Direitos (Compliance LGPD/GDPR)</h2>
            <p>
              Conforme a Lei Geral de Proteção de Dados (LGPD), você possui
              direitos de acesso, retificação, portabilidade e exclusão de seus
              dados. Para exercer esses direitos ou solicitar um "Data Dump" de
              sua operação, entre em contato com nosso DPO (Data Protection
              Officer) através do canal oficial de suporte.
            </p>

            <h2>7. Alterações nesta Política</h2>
            <p>
              A AgenticOS reserva-se o direito de atualizar esta política para
              refletir evoluções em nossa arquitetura de IA ou mudanças
              legislativas. Notificaremos sobre mudanças materiais através do
              painel administrativo ou e-mail.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-zinc-800"
          >
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;