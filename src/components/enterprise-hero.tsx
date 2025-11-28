"use client";

import { DotScreenShader } from "@/components/ui/dot-shader-background";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const EnterpriseHero = () => {
  return (
    <div className="h-svh w-screen flex flex-col gap-8 items-center justify-center relative overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 z-0">
        <DotScreenShader />
      </div>
      
      <div className="z-10 flex flex-col items-center gap-6 text-center px-4 mix-blend-exclusion">
        <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-white pointer-events-none uppercase">
          Autonomous Enterprise
        </h1>
        <p className="text-lg md:text-2xl font-light text-zinc-300 max-w-3xl leading-relaxed pointer-events-none">
          Onde a lógica de negócios transcende o esforço manual. Um sistema nervoso autônomo para sua empresa, movido por IA de última geração.
        </p>
        <div className="flex gap-4 mt-8 pointer-events-auto">
          <Button size="lg" className="bg-white text-black hover:bg-zinc-200 rounded-sm px-8">
            Iniciar Agora
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-sm px-8">
            <Play className="mr-2 w-4 h-4" />
            Ver Demo
          </Button>
        </div>
      </div>
    </div>
  );
};