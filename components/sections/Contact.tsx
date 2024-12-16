"use client";

import { useState } from "react";
import { Mail, MessageSquare, X } from "lucide-react";

export function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="contact" className="relative py-24 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] animate-pulse delay-1000" />

        <div className="relative max-w-[1200px] mx-auto">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in-up delay-200">
              Get in touch with our AI experts and discover how we can help you achieve your goals
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-300">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Schedule a Demo
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
                </span>
              </button>

              <a
                href="mailto:contact@codewareai.com"
                className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg font-semibold text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Email Us
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-xl bg-[#0A0A0A] rounded-2xl p-8 shadow-2xl animate-fade-in">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Schedule a Demo</h3>
              <p className="text-gray-400">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}