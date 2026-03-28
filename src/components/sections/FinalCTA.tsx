"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export default function FinalCTA() {
  return (
    <section id="contact" className="section-padding bg-surface-3 relative overflow-hidden">
      {/* ATMOSPHERIC DEPTH - Subdued */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[60vh] bg-accent/[0.01] blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container-tight relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          
          <div className="space-y-6 max-w-4xl">
             <Reveal direction="down">
               <span className="text-label">Final Command</span>
             </Reveal>
             
             <Reveal direction="up" delay={0.1}>
               <h2>Ready to <span className="text-white/30 italic">Engineering?</span></h2>
             </Reveal>
             
             <Reveal direction="up" delay={0.2}>
               <p className="text-lead max-w-2xl mx-auto px-6">
                 Join the high-velocity elite. We are currently accepting 2 new projects for the next sprint cycle. Secure your technical threshold.
               </p>
             </Reveal>
          </div>

          <Reveal direction="up" delay={0.4}>
             <div className="flex flex-col items-center gap-8">
                <button className="btn-premium px-16 py-8 text-lg group">
                   Book a Strategy Call
                   <Zap className="w-6 h-6 fill-current" />
                </button>
                
                <div className="flex items-center gap-10 text-white/20 text-[10px] uppercase tracking-[0.4em] font-bold">
                   <div className="w-8 h-px bg-white/10" />
                   Availability Status: High
                   <div className="w-8 h-px bg-white/10" />
                </div>
             </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
