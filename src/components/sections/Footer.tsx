"use client";

import { motion } from "framer-motion";
import { Zap, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="py-24 px-6 bg-black text-white relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-8 col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
                <Zap className="w-6 h-6 text-black fill-black" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">
                DEVSONGO
              </span>
            </Link>
            <p className="text-foreground/40 max-w-sm leading-relaxed font-light">
              High-velocity software engineering for ambitious companies. 
              We don't build software. We build systems of momentum.
            </p>
            <div className="flex items-center gap-4">
               <button className="flex items-center gap-2 text-sm text-foreground/50 hover:text-accent transition-colors underline underline-offset-4">
                 Careers
               </button>
               <button className="flex items-center gap-2 text-sm text-foreground/50 hover:text-accent transition-colors underline underline-offset-4">
                 Privacy Policy
               </button>
               <button className="flex items-center gap-2 text-sm text-foreground/50 hover:text-accent transition-colors underline underline-offset-4">
                 Terms
               </button>
            </div>
          </div>

          {/* Nav */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold tracking-widest uppercase text-accent">Navigation</h4>
            <div className="flex flex-col gap-4">
              <Link href="#services" className="text-foreground/40 hover:text-white transition-colors">Services</Link>
              <Link href="#about" className="text-foreground/40 hover:text-white transition-colors">About</Link>
              <Link href="#process" className="text-foreground/40 hover:text-white transition-colors">Process</Link>
              <Link href="#work" className="text-foreground/40 hover:text-white transition-colors">Case Studies</Link>
              <Link href="#mentoring" className="text-foreground/40 hover:text-white transition-colors">AI Mentoring</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold tracking-widest uppercase text-accent">Connect</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:hello@devsongo.com" className="flex items-center gap-2 text-foreground/40 hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> hello@devsongo.com
              </a>
              <a href="tel:+123456789" className="flex items-center gap-2 text-foreground/40 hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> (123) 456-7890
              </a>
              <div className="flex items-center gap-2 text-foreground/40">
                <MapPin className="w-4 h-4" /> Silicon Valley, CA
              </div>
              <div className="flex items-center gap-4 mt-4">
                 <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all cursor-pointer">
                   <ArrowRight className="w-4 h-4" />
                 </div>
                 <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all cursor-pointer">
                   <ArrowRight className="w-4 h-4 rotate-90" />
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Footnote */}
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
           <p className="text-xs text-foreground/30">
             © 2026 devSongo. All rights reserved. Designed for High Speed.
           </p>
           <motion.div 
             className="flex items-center gap-3 text-xs text-accent/50 font-bold uppercase tracking-widest"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
           >
             <div className="w-10 h-1 bg-accent/20 rounded-full overflow-hidden">
               <motion.div 
                 className="h-full bg-accent"
                 animate={{ x: ["-100%", "100%"] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               />
             </div>
             Status: High Performance
           </motion.div>
        </div>
      </div>
    </footer>
  );
}
