"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

const transition = {
  duration: 0.3, // High-tempo duration
  ease: [0.33, 1, 0.68, 1], // Aggressive Quart Out for instant perceived movement
};

export const Reveal = ({ 
  children, 
  width = "fit-content", 
  delay = 0, 
  direction = "up",
  distance = 30
}: RevealProps) => {
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : direction === "up" ? distance : direction === "down" ? -distance : 0,
      x: prefersReducedMotion ? 0 : direction === "left" ? distance : direction === "right" ? -distance : 0,
      filter: "blur(4px)",
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      filter: "blur(0px)",
    },
  };

  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ ...transition, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const StaggerContainer = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, distance = 20 }: { children: ReactNode, distance?: number }) => {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      variants={{
        hidden: { 
          opacity: 0, 
          y: prefersReducedMotion ? 0 : distance,
        },
        visible: { 
          opacity: 1, 
          y: 0,
        },
      }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};
