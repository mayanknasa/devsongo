"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface PageHeroProps {
  title: string;
  subtitle: string;
  badge: string;
}

export default function PageHero({ title, subtitle, badge }: PageHeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative pt-64 pb-32 px-6 overflow-hidden bg-stone-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto text-center space-y-12 relative z-10">
        <Reveal direction="up" distance={20}>
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-4">
            <Zap className="w-3.5 h-3.5 fill-accent" />
            {badge}
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.1} distance={40}>
          <h1 className="text-6xl md:text-[9rem] font-serif text-white tracking-[-0.03em] leading-[0.85] pb-4">
            {title}
          </h1>
        </Reveal>

        <Reveal direction="up" delay={0.2} width="100%">
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/40 font-light leading-relaxed tracking-wide">
            {subtitle}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
