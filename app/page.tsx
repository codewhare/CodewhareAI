"use client";

import { Header } from "@/components/sections/Header";
import { Introduction } from "@/components/sections/Introduction";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Pricing } from "@/components/sections/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Header />
      <Introduction />
      <Features />
      <Pricing />
      <HowItWorks />
      <Contact />
      <Footer />
    </main>
  );
}