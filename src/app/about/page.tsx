import PageHero from "@/components/sections/PageHero";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Zap, Shield, Target, Cpu } from "lucide-react";

export default function About() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <PageHero 
        title="Engineering Success" 
        subtitle="We are a collective of high-performance developers and strategists dedicated to technical excellence."
        badge="About Devsongo"
      />
      
      <section className="py-24 px-6 bg-stone-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
           <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group">
             <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
               alt="Team at work" 
               className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
           </div>
           <div className="space-y-8">
             <h2 className="text-4xl md:text-5xl text-white font-serif tracking-tight leading-tight">
               Built for Speed. <br /> Dedicated to <span className="text-accent italic">Quality.</span>
             </h2>
             <p className="text-lg text-foreground/50 font-light leading-relaxed">
               Devsongo was founded on the principle that high-quality engineering shouldn't be slow. 
               We've refined our sprint-based model over hundreds of projects to deliver enterprise-grade 
               solutions at the speed of a startup.
             </p>
             <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                   <h4 className="text-white font-bold text-3xl">100+</h4>
                   <p className="text-xs uppercase tracking-widest text-white/40">Projects Shipped</p>
                </div>
                <div className="space-y-2">
                   <h4 className="text-white font-bold text-3xl">15+</h4>
                   <p className="text-xs uppercase tracking-widest text-white/40">Core Engineers</p>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6 bg-stone-950">
        <div className="max-w-7xl mx-auto space-y-20">
           <div className="text-center space-y-4">
             <h2 className="text-4xl md:text-6xl text-white font-serif tracking-tight">Our Core Principles</h2>
             <p className="text-foreground/40 max-w-xl mx-auto">The DNA of our delivery model.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {[
               { title: "Velocity", icon: <Zap />, text: "We move fast without breaking things." },
               { title: "Precision", icon: <Target />, text: "Detailed audits and zero-compromise code." },
               { title: "Trust", icon: <Shield />, text: "Transparent process and reliable timelines." },
               { title: "Innovation", icon: <Cpu />, text: "Leveraging the latest in AI and architecture." }
             ].map((value) => (
                <div key={value.title} className="p-8 glass-card border-white/5 space-y-6 group">
                   <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                     {value.icon}
                   </div>
                   <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                   <p className="text-sm text-foreground/40 font-light leading-relaxed">{value.text}</p>
                </div>
             ))}
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
