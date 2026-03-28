import PageHero from "@/components/sections/PageHero";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FinalCTA from "@/components/sections/FinalCTA";

export default function AIMentoring() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <PageHero 
        title="AI Mentoring" 
        subtitle="Practical growth in AI skills and workflows. Double your team's productivity."
        badge="Performance Upskilling"
      />
      
      {/* Feature section */}
      <section className="py-24 px-6 bg-stone-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-8">
             <div className="w-16 h-1 bg-accent" />
             <h2 className="text-4xl md:text-5xl text-white font-serif tracking-tight">Master the AI Stack.</h2>
             <p className="text-lg text-foreground/50 font-light leading-relaxed">
               We don't teach theory. We teach implementation. Our AI mentoring program is designed for developers 
               and tech leaders who want to leverage LLMs, autonomous agents, and AI-driven automation 
               to ship faster and smarter.
             </p>
          </div>
          <div className="grid grid-cols-1 gap-8">
             {[
               "Personalized Workflows",
               "LLM & Agent Architecture",
               "AI Automation Tools",
               "Productivity Coaching"
             ].map((item) => (
               <div key={item} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between group cursor-default">
                  <span className="text-xl font-medium text-white group-hover:text-accent transition-colors">{item}</span>
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    +
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
