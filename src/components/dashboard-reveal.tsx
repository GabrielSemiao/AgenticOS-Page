"use client";

import { ContainerScroll } from "@/components/ui/container-scroll";

export const DashboardReveal = () => {
  return (
    <div className="bg-transparent">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
              Visão Total. Controle Absoluto.
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
              Acompanhe em tempo real: negociações sendo fechadas, Pix caindo na conta e sua agenda sendo preenchida automaticamente. Enquanto você vive sua vida.
            </p>
          </div>
        }
      >
        <img
          src="/dashboard-screenshot.png"
          alt="AgenticOS Dashboard"
          className="w-full h-full object-cover rounded-2xl"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
};