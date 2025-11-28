"use client";

import { ContainerScroll } from "@/components/ui/container-scroll";

export const DashboardReveal = () => {
  return (
    <div className="bg-[#050505]">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight">
              O Painel de Controle da Sua Nova Operação
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto">
              Visibilidade total. Controle absoluto. Decisões baseadas em dados em tempo real.
            </p>
          </div>
        }
      >
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-lg flex items-center justify-center">
          <div className="text-center p-8">
            <div className="w-full h-full bg-zinc-950 rounded-lg border border-zinc-800 p-8">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-zinc-900 p-4 rounded border border-zinc-800">
                  <div className="text-zinc-500 text-xs mb-2">Conversões Hoje</div>
                  <div className="text-white text-2xl font-light">127</div>
                  <div className="text-green-500 text-xs mt-1">+23%</div>
                </div>
                <div className="bg-zinc-900 p-4 rounded border border-zinc-800">
                  <div className="text-zinc-500 text-xs mb-2">Receita (24h)</div>
                  <div className="text-white text-2xl font-light">R$ 47.3K</div>
                  <div className="text-green-500 text-xs mt-1">+18%</div>
                </div>
                <div className="bg-zinc-900 p-4 rounded border border-zinc-800">
                  <div className="text-zinc-500 text-xs mb-2">Tempo Resposta</div>
                  <div className="text-white text-2xl font-light">0.8s</div>
                  <div className="text-blue-500 text-xs mt-1">Ótimo</div>
                </div>
              </div>
              <div className="bg-zinc-900 p-6 rounded border border-zinc-800">
                <div className="text-zinc-400 text-sm mb-4">Atividade em Tempo Real</div>
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-3 text-xs">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-zinc-500">Cliente #{1000 + i} • Agendamento confirmado</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
};