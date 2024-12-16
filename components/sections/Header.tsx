"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#how-it-works", label: "How it Works" },
    { href: "#contact", label: "Contact" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Close mobile menu if open
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-6">
        <nav className="flex items-center justify-between h-[72px]">
          <div className="flex items-center gap-12">
            <a href="/" className="hover:opacity-80 transition-opacity duration-300">
              <Image
                src="/assets/codewhare-logo.svg"
                alt="Codewhare"
                width={140}
                height={32}
                className="h-8 w-auto"
              />
            </a>
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  onClick={(e) => handleClick(e, item.href)}
                  className="relative text-[15px] text-gray-400 hover:text-white transition-colors duration-300 group"
                >
                  {item.label}
                  <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/10 animate-fade-in">
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-[15px] text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}