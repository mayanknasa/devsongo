"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function KineticBeam() {
  const { scrollYProgress } = useScroll();
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <div className="fixed inset-y-0 left-12 w-1 pointer-events-none z-0 overflow-visible hidden lg:block">
      {/* 1. THE RAIL: HIGH-CONTRAST VECTOR LINE */}
      <div className="absolute inset-y-0 left-0 w-px bg-white/[0.08] shadow-[0_0_15px_hsla(38,92%,50%,0.1)]" />
      
      {/* 2. THE BEAM: SIGNATURE AMBER STREAM (Scroll Linked) */}
      <motion.div 
        style={{ top: y, opacity }}
        className="absolute left-1/2 -translate-x-1/2 w-[350px] flex flex-col items-center"
      >
        {/* Kinetic Energy Core */}
        <div className="relative">
          <div className="w-2 h-12 bg-primary shadow-[0_0_30px_hsla(38,92%,50%,1)] rounded-full animate-pulse" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary/30 blur-[90px] rounded-full" />
        </div>
        
        {/* Plasma Accelerator Tail */}
        <div className="w-[1px] h-[45vh] bg-gradient-to-b from-primary via-secondary/20 to-transparent" />
      </motion.div>

      {/* 3. PROPULSION PULSES: WARM LIGHT STREAKS (Independent) */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ top: "-20%" }}
          animate={{ top: "120%" }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 3.5,
          }}
          className="absolute left-1/2 -translate-x-1/2 w-[2px] h-80 bg-gradient-to-b from-transparent via-primary/50 to-transparent blur-[3px]"
        />
      ))}

      {/* 4. SECTIONS: TECHNICAL STATION MARKERS (Vivid Indicator) */}
      <div className="absolute inset-0 flex flex-col justify-between py-[12vh]">
         {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 group">
               <div className="w-3 h-0.5 bg-primary/40 group-hover:bg-primary transition-colors" />
               <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.3em] group-hover:text-primary/60">
                 STATION_0{i + 1}
               </span>
            </div>
         ))}
      </div>
    </div>
  );
}
