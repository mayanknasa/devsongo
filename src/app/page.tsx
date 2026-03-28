import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Work from "@/components/sections/Work";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main className="relative flex flex-col justify-between">
      <Navbar />
      
      {/* 1. HERO - Atmospheric Peak */}
      <Hero />
      <SectionDivider mode="glow" />

      {/* 2. SERVICES - Deep Zinc Tones */}
      <div className="bg-surface/20 relative z-10">
        <Services />
      </div>
      <SectionDivider mode="line" />

      {/* 3. PROCESS - Primary Narrative */}
      <div className="bg-background relative z-10">
        <Process />
      </div>
      <SectionDivider mode="glow" />

      {/* 4. WORK - High-Vibrancy Showcase */}
      <div className="bg-surface/30 relative z-10">
        <Work />
      </div>
      <SectionDivider mode="line" />

      {/* 5. FINAL CTA - Closing Energy */}
      <div className="bg-background relative z-10">
        <FinalCTA />
      </div>
      
      <Footer />
    </main>
  );
}
