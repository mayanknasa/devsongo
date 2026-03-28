import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Background from "@/components/sections/Background";
import KineticBeam from "@/components/sections/KineticBeam";
import CustomCursor from "@/components/ui/CustomCursor";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Devsongo | High-Performance IT Agency",
  description: "Devsongo is a premium IT agency specializing in custom development, IT consultancy, and AI mentoring. Engineering that moves at sprint speed.",
  keywords: "IT Agency, software services, custom development, technical auditing, AI mentoring, resume reviewing, Devsongo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${cormorant.variable} ${montserrat.variable} font-sans`}
      >
        <Background />
        <KineticBeam />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
