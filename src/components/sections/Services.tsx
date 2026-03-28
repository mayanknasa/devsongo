"use client";

import { Code, Lightbulb, SearchCheck, Brain, FileUser, Layers, ArrowUpRight, Zap } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    title: "Insight & Consultancy",
    description: "Align your technology with your business goals. Our strategic insights drive innovation and transform digital speed.",
    icon: <Lightbulb className="w-10 h-10" />,
    tag: "Strategy",
  },
  {
    title: "Custom Development",
    description: "Tailored software solutions built for performance and absolute scalability. We ship robust code at sprint speed.",
    icon: <Code className="w-8 h-8" />,
    tag: "Execution",
  },
  {
    title: "Technical Auditing",
    description: "In-depth code and architecture reviews to identify risks and optimize performance before you scale.",
    icon: <SearchCheck className="w-8 h-8" />,
    tag: "Quality",
  },
  {
    title: "AI Mentoring",
    description: "Upskill your team with practical AI strategies and tools that double your productivity and output.",
    icon: <Brain className="w-8 h-8" />,
    tag: "Intelligence",
  },
  {
    title: "Resume Reviewing",
    description: "Professional resume audits and technical interview prep by industry experts.",
    icon: <FileUser className="w-8 h-8" />,
    tag: "Career",
  },
  {
    title: "Infrastructure",
    description: "Enterprise-grade infrastructure migration to cloud-native stacks, delivered with agility.",
    icon: <Layers className="w-8 h-8" />,
    tag: "Scalability",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-surface-2 relative overflow-hidden">
      {/* ATMOSPHERIC DEPTH - Subdued */}
      <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[70vh] bg-primary/[0.01] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-[10%] -left-[10%] w-[40%] h-[50vh] bg-accent/[0.01] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container-tight relative">
        <div className="space-y-6 mb-24 text-center mx-auto max-w-4xl">
           <Reveal direction="up">
             <span className="text-label">Core Capabilities v4.0</span>
           </Reveal>
           <Reveal direction="up" delay={0.1}>
             <h2>Engineered For <br/><span className="text-white/30 italic">High-Tempo Growth.</span></h2>
           </Reveal>
           <Reveal direction="up" delay={0.2}>
             <p className="text-lead mx-auto max-w-2xl px-6">
               We eliminate technical debt through high-velocity sprints. Every capability is engineered for speed and absolute scalability.
             </p>
           </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {services.map((service, i) => (
              <Reveal key={service.title} direction="up" delay={i * 0.05}>
                 <div className="glass-card h-full group">
                    <div className="text-white/40 mb-10 transition-colors duration-300 group-hover:text-accent group-hover:scale-110 group-hover:rotate-3">
                       {service.icon}
                    </div>
                    <div className="space-y-4 mb-10">
                       <h3 className="h4">{service.title}</h3>
                       <p className="text-sm font-light text-foreground/50">{service.description}</p>
                    </div>
                    <div className="pt-8 mt-auto border-t border-white/5 flex items-center justify-between">
                       <span className="text-[10px] text-white/20 uppercase tracking-widest">{service.tag}</span>
                       <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0" />
                    </div>
                 </div>
              </Reveal>
           ))}
        </div>

        {/* Primary Section CTA */}
        <div className="mt-24 flex justify-center">
           <Reveal direction="up" delay={0.4}>
              <button className="btn-premium group">
                 Start Engineering Sprint
                 <Zap className="w-5 h-5 fill-current" />
              </button>
           </Reveal>
        </div>
      </div>
    </section>
  );
}
