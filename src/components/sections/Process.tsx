"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Map, Zap, Layers, CheckCircle, Package } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";

const processSteps = [
  {
    title: "Insight Discovery",
    description: "Deep dive into your business objectives and architectural requirements. We find the friction before we fix it.",
    icon: <Search className="w-8 h-8" />,
    stats: "Analysis Phase",
  },
  {
    title: "Strategic Planning",
    description: "Architectural blueprints and sprint roadmap aimed at maximum velocity. Precision over guesswork.",
    icon: <Map className="w-8 h-8" />,
    stats: "Blueprint Phase",
  },
  {
    title: "Sprint Iteration",
    description: "Focus-driven development cycles ensuring high-performance execution. Shipping code daily.",
    icon: <Zap className="w-8 h-8" />,
    stats: "Execution Phase",
  },
  {
    title: "Engineering Cycle",
    description: "Solid engineering infrastructure built for scale and future growth. Infrastructure as a first-class citizen.",
    icon: <Layers className="w-8 h-8" />,
    stats: "Foundational Phase",
  },
  {
    title: "Quality Validation",
    description: "Rigorous testing and technical auditing to ensure zero-risk delivery. Reliability is non-negotiable.",
    icon: <CheckCircle className="w-8 h-8" />,
    stats: "Verification Phase",
  },
  {
    title: "Product Delivery",
    description: "Seamless deployment and continuous support for long-term success. We launch, we don't just ship.",
    icon: <Package className="w-8 h-8" />,
    stats: "Deployment Phase",
  },
];

export default function Process() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={scrollRef} id="process" className="section-padding bg-surface-1 relative overflow-hidden">
      {/* ATMOSPHERIC GLOWS */}
      <div className="absolute top-[20%] left-[10%] w-[50%] h-[50vh] bg-accent/[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60vh] bg-primary/[0.02] blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] left-[10%] w-[50%] h-[50vh] bg-accent/[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60vh] bg-primary/[0.02] blur-[130px] rounded-full pointer-events-none" />
      {/* SECTION IDENTITY HUD */}
      <div className="absolute top-40 left-12 flex items-center gap-6 opacity-20 pointer-events-none group-hover:opacity-100 transition-opacity">
         <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-white">Station 03_Methodology</span>
         <div className="w-10 h-px bg-white/20" />
         <div className="w-1.5 h-1.5 rounded-full bg-accent" />
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Asymmetric Header */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-32">
          <div className="max-w-2xl space-y-4">
             <Reveal direction="left">
               <div className="text-accent text-[11px] font-bold tracking-[0.5em] uppercase">Sprint Methodology</div>
             </Reveal>
             <Reveal direction="up" delay={0.1}>
               <h2 className="text-white font-serif leading-[1.05] tracking-tight">
                  The Velocity <br /> 
                  <span className="text-white/30 italic">Assembly Line.</span>
               </h2>
             </Reveal>
             <Reveal direction="up" delay={0.2} width="100%">
               <p className="max-w-xl text-foreground/40 font-light leading-relaxed text-lg lg:text-xl">
                  A high-precision execution framework designed for absolute speed and technical accuracy.
               </p>
             </Reveal>
          </div>
        </div>

        {/* Diagonal Zig-Zag Narrative */}
        <div className="relative space-y-24 lg:space-y-32">
          {/* Vertical Progress Line (Hidden on mobile) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/5 hidden lg:block" />

          {processSteps.map((step, index) => (
            <div 
              key={step.title}
              className={cn(
                "flex flex-col lg:flex-row items-center gap-12 lg:gap-32 w-full",
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              )}
            >
              {/* Content Side */}
              <div className="flex-1 w-full">
                <Reveal direction={index % 2 === 0 ? "right" : "left"}>
                  <div className="space-y-8 text-center lg:text-left">
                    <div className="flex items-center gap-6 justify-center lg:justify-start">
                       <span className="text-accent text-[12px] font-bold tracking-[0.4em]">0{index + 1}</span>
                       <div className="w-12 h-px bg-white/10" />
                       <span className="text-white/20 text-[10px] font-bold tracking-[0.3em] uppercase">{step.stats}</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif tracking-tight leading-none group cursor-default">
                       {step.title}
                       <motion.span 
                         initial={{ scaleX: 0 }}
                         whileHover={{ scaleX: 1 }}
                         className="block h-px bg-accent origin-left transition-transform duration-700 mt-4" 
                       />
                    </h3>
                    <p className="text-foreground/40 text-lg lg:text-2xl font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Visual Side (Asymmetric Card) */}
              <div className="flex-1 w-full flex justify-center">
                 <Reveal direction="up" delay={0.2}>
                    <TiltCard>
                       <div className="w-72 h-72 md:w-96 md:h-96 glass-card flex items-center justify-center relative group overflow-hidden bg-accent/[0.02]">
                          {/* Energy Glow */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                          
                          <div className="text-accent group-hover:scale-125 transition-transform duration-300 relative z-10">
                             {step.icon}
                          </div>
                          
                          {/* High-Performance Decorative Border */}
                          <div className="absolute top-6 left-6 right-6 bottom-6 border border-white/5 rounded-[2rem] group-hover:border-accent/20 transition-all duration-300" />
                       </div>
                    </TiltCard>
                 </Reveal>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Acceleration */}
        <div className="mt-56 text-center space-y-16">
           <div className="w-24 h-1 bg-accent/40 mx-auto rounded-full" />
           <Reveal direction="up">
              <button className="btn-premium group">
                 Redefine Your Process
                 <Zap className="w-6 h-6 fill-current group-hover:rotate-12 transition-transform duration-300" />
              </button>
           </Reveal>
        </div>
      </div>
    </section>
  );
}
