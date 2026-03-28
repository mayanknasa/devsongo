import PageHero from "@/components/sections/PageHero";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function ResumeReview() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <PageHero 
        title="Resume Reviewing" 
        subtitle="Stronger positioning for tech careers. Audits by industry experts for top-tier companies."
        badge="Career Acceleration"
      />
      
      <section className="py-24 px-6 bg-stone-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto space-y-24">
           <div className="flex flex-col md:flex-row items-end justify-between gap-12">
             <div className="max-w-2xl space-y-6">
               <h2 className="text-4xl md:text-5xl text-white font-serif tracking-tight">Your Passport to Silicon Valley.</h2>
               <p className="text-lg text-foreground/50 font-light flex items-center gap-4">
                 Get noticed by Google, Apple, Meta, and high-performance startups.
               </p>
             </div>
             <div className="p-8 rounded-3xl bg-accent text-black font-bold text-center">
               95% Interview Success Rate
             </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               {
                 title: "Technical Audit",
                 text: "In-depth review of your technical stack, projects, and presentation."
               },
               {
                 title: "Positioning",
                 text: "Strategic framing of your experience to match high-level roles."
               },
               {
                 title: "Interview Prep",
                 text: "Mock interviews and technical deep dives with industry lead developers."
               }
             ].map((item) => (
                <div key={item.title} className="p-10 glass-card border-white/5 space-y-6 flex flex-col items-center text-center">
                   <div className="w-16 h-1 bg-accent/40 rounded-full" />
                   <h3 className="text-2xl font-serif text-white">{item.title}</h3>
                   <p className="text-foreground/40 text-sm font-light leading-relaxed">{item.text}</p>
                </div>
             ))}
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
