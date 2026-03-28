"use client";

import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Mentoring", href: "#mentoring" },
  { name: "Resume", href: "#resume" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Active section detection
      const sections = ["services", "about", "work", "process", "contact"];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        isScrolled ? "py-4 px-6 sm:px-12" : "py-8 px-6 sm:px-12"
      )}
    >
      {/* Scroll Progress Bar */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-[2px] bg-accent origin-left z-[102]"
        style={{ scaleX }}
      />

      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between px-10 py-5 rounded-[2rem] transition-all duration-700 relative",
        isScrolled ? "bg-black/40 backdrop-blur-3xl border border-white/5 shadow-2xl" : "bg-transparent"
      )}>
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group relative z-[101]">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center transition-transform group-hover:rotate-[15deg] group-hover:scale-110 shadow-accent/20 shadow-xl overflow-hidden relative">
            <Zap className="w-6 h-6 text-black fill-black relative z-10" />
            <motion.div 
               animate={{ x: ["-100%", "100%"] }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 bg-white/20 -skew-x-12"
            />
          </div>
          <span className="text-2xl font-bold tracking-[-0.05em] text-white flex items-center">
            DEVSONGO
            <span className="text-accent ml-0.5 mt-[-1px] text-xs">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[10px] font-bold tracking-[0.4em] uppercase transition-all duration-400 relative group",
                  isActive ? "text-accent" : "text-white/30 hover:text-white"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full transition-all duration-500",
                  isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                )} />
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle & Desktop CTA */}
        <div className="flex items-center gap-6 relative z-[101]">
          <Link
            href="#contact"
            className="hidden sm:inline-flex px-8 py-3 rounded-full bg-white text-black text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all duration-500 shadow-xl"
          >
            Start a Sprint
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white/50 hover:text-white transition-colors p-2 rounded-full border border-white/5"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Backdrop & Content */}
        <AnimatePresence>
           {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-0 bg-stone-950/98 backdrop-blur-3xl lg:hidden flex flex-col items-center justify-center gap-12 p-12 z-[100]"
              >
                 {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                       <Link 
                         href={link.href}
                         onClick={() => setIsMobileMenuOpen(false)}
                         className="text-4xl md:text-6xl font-serif text-white hover:text-accent transition-colors tracking-tight italic"
                       >
                         {link.name}
                       </Link>
                    </motion.div>
                 ))}
                 <div className="w-40 h-[1px] bg-white/5 mt-10" />
                 <div className="flex flex-col items-center gap-4 pt-10">
                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/20">Active Station</span>
                    <Zap className="w-6 h-6 text-accent fill-accent animate-pulse" />
                 </div>
              </motion.div>
           )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
