"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
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
              Termos de Serviço
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
            <h2>1. Aceitação dos Termos</h2>
            <p>
              Ao acessar, contratar ou utilizar a plataforma AgenticOS
              ("Serviço"), você ("Usuário", "Contratante") concorda em
              vincular-se a estes Termos de Serviço. Se você estiver aceitando
              estes termos em nome de uma entidade corporativa, você declara ter
              autoridade para vinculá-la a este contrato.
            </p>

            <h2>2. Descrição do Serviço e Licença</h2>
            <p>
              O AgenticOS é uma infraestrutura de Software as a Service (SaaS)
              que fornece agentes de Inteligência Artificial para automação de
              atendimento, vendas e agendamento via WhatsApp. Concedemos a você
              uma licença limitada, não exclusiva e intransferível para usar o
              Serviço de acordo com seu plano de assinatura.
            </p>

            <h2>3. Uso de Inteligência Artificial (Isenção de Responsabilidade)</h2>
            <p>
              O Usuário reconhece que o Serviço utiliza modelos de linguagem
              probabilísticos (LLMs). Embora nos esforcemos para garantir a
              precisão:
            </p>
            <ul>
              <li>
                <strong>Alucinações:</strong> A IA pode, ocasionalmente, gerar
                informações incorretas ou "alucinar" respostas. O AgenticOS não
                se responsabiliza por erros factuais, promessas indevidas ou
                negociações falhas realizadas pelo agente autônomo. É
                responsabilidade do Usuário monitorar periodicamente as
                interações.
              </li>
              <li>
                <strong>Decisões Autônomas:</strong> O Usuário aceita os riscos
                associados à delegação de vendas e transações financeiras a um
                sistema autônomo.
              </li>
            </ul>

            <h2>4. Conformidade com WhatsApp e Bloqueios</h2>
            <p>
              O AgenticOS fornece a ferramenta técnica, mas o conteúdo e a
              estratégia de envio são de responsabilidade exclusiva do Usuário.
            </p>
            <ul>
              <li>
                Você concorda em não utilizar o Serviço para SPAM, envio em
                massa não solicitado ou violação das Políticas de Comércio do
                WhatsApp/Meta.
              </li>
              <li>
                A AgenticOS não se responsabiliza por banimentos, bloqueios ou
                suspensões de números de telefone decorrentes de práticas
                abusivas ou denúncias de usuários finais.
              </li>
            </ul>

            <h2>5. Pagamentos, Renovação e Cancelamento</h2>
            <ul>
              <li>
                <strong>Assinatura:</strong> O Serviço é cobrado em regime de
                pré-pagamento (Mensal ou Anual).
              </li>
              <li>
                <strong>Renovação Automática:</strong> As assinaturas são
                renovadas automaticamente, a menos que canceladas com 24 horas
                de antecedência ao fim do período.
              </li>
              <li>
                <strong>Garantia de 7 Dias:</strong> Oferecemos reembolso
                integral incondicional para solicitações feitas em até 7 dias
                corridos após a primeira assinatura. Após este período, não há
                reembolsos pro-rata.
              </li>
            </ul>

            <h2>6. Propriedade Intelectual</h2>
            <p>
              A AgenticOS detém todos os direitos, títulos e interesses
              relativos à plataforma, códigos, algoritmos e design. O Usuário
              detém a propriedade sobre seus dados de clientes (leads) e o
              conteúdo inserido na base de conhecimento da IA.
            </p>

            <h2>7. Limitação de Responsabilidade</h2>
            <p>
              Na extensão máxima permitida por lei, a AgenticOS (incluindo seus
              diretores, funcionários e parceiros) não será responsável por
              quaisquer danos indiretos, incidentais, especiais ou
              consequenciais, incluindo perda de lucros, perda de dados ou
              interrupção de negócios, decorrentes do uso ou incapacidade de
              usar o Serviço. A responsabilidade total da AgenticOS limitar-se-á
              ao valor pago pelo Usuário nos últimos 3 (três) meses de serviço.
            </p>

            <h2>8. Foro e Legislação Aplicável</h2>
            <p>
              Estes termos são regidos pelas leis da República Federativa do
              Brasil. As partes elegem o foro da Comarca de [Sua Cidade/Estado],
              com renúncia a qualquer outro, por mais privilegiado que seja,
              para dirimir quaisquer litígios.
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

export default Terms;