"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const projects = [
  {
    title: "EcoCloud Architecture",
    category: "Cloud Engineering",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    stats: "Next Gen Performance",
  },
  {
    title: "Quantum Ledger Pay",
    category: "FinTech / Web3",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1974&auto=format&fit=crop",
    stats: "Zero-Latency Security",
  },
  {
    title: "Savant AI Brain",
    category: "AI / Machine Learning",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop",
    stats: "Intelligent Scalability",
  },
  {
    title: "Data Core Nexus",
    category: "Big Data",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop",
    stats: "Real-time Processing",
  },
];

export default function Work() {
  return (
    <section id="work" className="section-padding bg-surface-2 px-6 sm:px-12 relative overflow-hidden">
      {/* ATMOSPHERIC DEPTH - Subdued */}
      <div className="absolute top-[10%] -left-[10%] w-[50%] h-[50vh] bg-primary/[0.01] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[0%] w-[40%] h-[60vh] bg-accent/[0.01] blur-[130px] rounded-full pointer-events-none" />
      
      <div className="container-tight relative">
        <div className="space-y-6 mb-24 text-center mx-auto max-w-4xl">
           <Reveal direction="up">
             <span className="text-label">Outcome Matrix v4.0</span>
           </Reveal>
           <Reveal direction="up" delay={0.1}>
             <h2>Engineering Success <br /> <span className="text-white/30 italic">At The Edge.</span></h2>
           </Reveal>
           <Reveal direction="up" delay={0.2}>
             <p className="text-lead mx-auto max-w-2xl px-6">
               A selection of our high-velocity software outcomes. We build high-performance products that redefine digital benchmarks.
             </p>
           </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {projects.map((project, i) => (
              <Reveal key={project.title} direction="up" delay={i * 0.1}>
                 <div className="glass-card group cursor-pointer overflow-hidden p-0">
                    <div className="relative h-[350px] overflow-hidden">
                       <motion.img
                         src={project.image}
                         alt={project.title}
                         whileHover={{ scale: 1.05 }}
                         className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-50 group-hover:opacity-100"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-10 space-y-4">
                       <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-2">{project.category}</span>
                       <h3 className="h3 group-hover:text-accent transition-colors">{project.title}</h3>
                       <div className="flex items-center justify-between text-white/20 pt-6 border-t border-white/5 group-hover:text-accent/60 transition-colors">
                          <span className="text-sm font-light">{project.stats}</span>
                          <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0" />
                       </div>
                    </div>
                 </div>
              </Reveal>
           ))}
        </div>

        {/* Primary Section CTA */}
        <div className="mt-24 flex justify-center">
           <Reveal direction="up" delay={0.4}>
              <button className="btn-premium group">
                 Launch Your Success
                 <Zap className="w-5 h-5 fill-current" />
              </button>
           </Reveal>
        </div>
      </div>
    </section>
  );
}
