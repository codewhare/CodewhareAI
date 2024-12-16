"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Header() {
  return (
    <header className="relative min-h-[80vh] flex items-center justify-center px-4 bg-gradient-to-br from-black via-blue-950 to-blue-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="inline-block animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent text-sm font-medium mb-4">
          WELCOME TO CODEWHARE AI
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Empower Your Business with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            AI-Driven Solutions
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Streamline operations, enhance customer experience, and scale your business effortlessly with our tailored AI solutions.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" variant="default" className="text-base">
            Get Started Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="text-base">
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </header>
  );
}