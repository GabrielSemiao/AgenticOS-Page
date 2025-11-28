"use client";

import { HeroSection } from "@/components/hero-section";
import { SocialProof } from "@/components/social-proof";
import { ProblemSolution } from "@/components/problem-solution";
import { FeaturesBento } from "@/components/features-bento";
import { LiveDemo } from "@/components/live-demo";
import { Pricing } from "@/components/pricing";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <HeroSection />
      <SocialProof />
      <ProblemSolution />
      <FeaturesBento />
      <LiveDemo />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;