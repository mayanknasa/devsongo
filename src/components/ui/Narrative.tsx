"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface NarrativeSectionProps {
  children: ReactNode;
  index: number;
}

export const NarrativeSection = ({ children, index }: NarrativeSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Snappier acceleration curve [0.22, 1, 0.36, 1]
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.96, 1, 1, 0.96]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [80, 0, 0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  
  // Directional momentum (left to right)
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -30 : 30, index % 2 === 0 ? 30 : -30]);

  const springY = useSpring(y, { stiffness: 120, damping: 25 });
  const springScale = useSpring(scale, { stiffness: 120, damping: 25 });
  const springX = useSpring(x, { stiffness: 120, damping: 25 });

  return (
    <motion.div
      ref={ref}
      style={{ 
        scale: springScale, 
        y: springY, 
        opacity,
        x: springX 
      }}
      className="relative w-full overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

export const NarrativeProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-accent z-[200] origin-left shadow-[0_0_15px_rgba(202,138,4,0.5)]"
      style={{ scaleX }}
    />
  );
};
