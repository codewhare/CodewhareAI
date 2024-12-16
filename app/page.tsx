"use client";

import { Header } from "@/components/sections/Header";
import { Introduction } from "@/components/sections/Introduction";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ImageSection } from "@/components/ui/image-section";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900">
      <Header />
      <Introduction />
      <Features />
      <ImageSection />
      <HowItWorks />
      <Contact />
      <Footer />
    </main>
  );
}