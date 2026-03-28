"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  mode?: "glow" | "line" | "gradient";
}

export default function SectionDivider({ mode = "line" }: SectionDividerProps) {
  if (mode === "glow") {
    return (
      <div className="relative h-px w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <motion.div 
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        />
      </div>
    );
  }

  if (mode === "gradient") {
    return (
      <div className="h-48 w-full bg-gradient-to-b from-background to-surface/20" />
    );
  }

  return (
    <div className="h-px w-full bg-white/[0.03] max-w-7xl mx-auto" />
  );
}
