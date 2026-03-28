"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Background() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  // Hydration safety: Dynamic values should only run on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Multi-Layer Parallax Depths (Extreme subtle)
  const layer1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  const layer2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const layer3Y = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none -z-50 overflow-hidden bg-background">
      {/* 1. ATMOSPHERIC BASE: SOFT RADIAL BLOOMS */}
      <motion.div 
        style={{ y: layer1Y }}
        className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_20%_30%,hsla(38,92%,50%,0.04)_0%,transparent_50%)] blur-[120px]"
      />
      
      <motion.div 
        style={{ y: layer2Y }}
        className="absolute top-[20%] right-[-10%] w-[100%] h-[100%] bg-[radial-gradient(circle_at_70%_50%,hsla(22,90%,45%,0.03)_0%,transparent_60%)] blur-[140px]"
      />

      <motion.div 
        style={{ y: layer3Y }}
        className="absolute bottom-[-10%] left-[20%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_40%_80%,hsla(38,92%,50%,0.02)_0%,transparent_50%)] blur-[160px]"
      />

      {/* 2. TEXTURAL DEPTH: TECHNICAL GRID & NOISE */}
      <div className="absolute inset-0 noise-overlay opacity-[0.05]" />
      
      <motion.div
        style={{ y: layer2Y }}
        className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"
      />

      {/* 3. LIGHT TRAILS: AMBIENT MOTIONS (Drifting Tech Dust) */}
      <div className="absolute inset-0">
        {mounted && [...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: `${(i * 12345 % 100)}%`, y: `${(i * 67890 % 100)}%` }} // Deterministic initial values
            animate={{ 
              opacity: [0, 0.2, 0],
              y: ["0%", "100%"],
              x: ["0%", "10%"]
            }}
            transition={{
              duration: 15 + (i % 5) * 5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
            className="absolute w-[1px] h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent"
          />
        ))}
      </div>

      {/* 4. SECTION CONNECTORS: GRADIENT VIGNETTES */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(4,4,5,0.4)_100%)]" />
      
      {/* Subtle Section Fade-out Separation */}
      <div className="absolute inset-x-0 top-0 h-[30vh] bg-gradient-to-b from-background via-transparent to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-background via-transparent to-transparent z-10" />
    </div>
  );
}
