"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);

  const springX = useSpring(mouseX, { stiffness: 450, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 50 });

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = () => {
      const isOverInteractive = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const isClickable = target.closest("button, a, .group") !== null;
        setIsHovering(isClickable);
      };
      window.addEventListener("mouseover", isOverInteractive);
      return () => window.removeEventListener("mouseover", isOverInteractive);
    };

    window.addEventListener("mousemove", moveMouse);
    handleHover();

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* 1. The Core Dot */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2"
      />
      
      {/* 2. The Kinetic Ring */}
      <motion.div
        style={{ x: springX, y: springY }}
        animate={{ 
          scale: isHovering ? 2 : 1, 
          opacity: isHovering ? 0.4 : 0.2,
          padding: isHovering ? "2rem" : "1.25rem"
        }}
        className="fixed top-0 left-0 border-[1.5px] border-accent rounded-full pointer-events-none z-[998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
      />

      {/* 3. The Energy Tail (Optional, minimal) */}
      {isHovering && (
         <motion.div 
           style={{ x: springX, y: springY }}
           className="fixed top-0 left-0 w-24 h-24 bg-accent/20 blur-3xl rounded-full pointer-events-none z-[997] -translate-x-1/2 -translate-y-1/2"
         />
      )}
    </>
  );
}
