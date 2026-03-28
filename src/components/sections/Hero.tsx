"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.section 
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-20"
    >
      {/* ATMOSPHERIC DEPTH - Calmed */}
      <div className="absolute top-[10%] left-[10%] w-[40%] h-[40vh] bg-primary/[0.01] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[50%] h-[50vh] bg-accent/[0.01] blur-[150px] rounded-full pointer-events-none" />

      <div className="container-tight relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          
          <div className="space-y-6 max-w-4xl">
            <Reveal direction="down">
              <span className="text-label">Engineering Matrix</span>
            </Reveal>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
              }}
              className="mx-auto"
            >
              <motion.span 
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="block"
              >
                Orchestrating the
              </motion.span>
              
              <motion.span 
                variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                className="block italic relative mt-4 text-white"
              >
                Momentum.
                <motion.div 
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "80%", opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1, ease: [0.33, 1, 0.68, 1] }}
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-px bg-white/10"
                />
              </motion.span>
            </motion.h1>

            <Reveal direction="up" delay={0.6}>
              <p className="text-lead mx-auto max-w-2xl px-6">
                We build high-performance software for zero-latency products. Shift your technical debt into high-speed engineering sprints.
              </p>
            </Reveal>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-8"
          >
            <button className="btn-premium group">
              Start Your Project
              <Zap className="w-5 h-5 fill-current" />
            </button>
            
            <button className="btn-secondary group">
              View Our Matrix
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </button>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
