import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 sm:py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="relative max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          {/* Brand Column */}
          <div className="space-y-4 max-w-md">
            <div className="flex justify-center">
              <Image
                src="/assets/codewhare-logo.svg"
                alt="CodewareAI"
                width={160}
                height={36}
                className="h-8 sm:h-10 w-auto"
              />
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Empowering businesses with intelligent AI solutions for enhanced customer engagement and automation.
            </p>
            <p className="text-sm sm:text-base text-gray-400">Kingston, Jamaica • Miami, Florida</p>
            <a href="mailto:info@codewhare.com" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-200">
              info@codewhare.com
            </a>
            <div className="flex gap-4 pt-2 justify-center">
              <a
                href="https://twitter.com/codeware"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://linkedin.com/company/codeware"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://github.com/codeware"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center sm:text-left">
              © {currentYear} CodewareAI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}