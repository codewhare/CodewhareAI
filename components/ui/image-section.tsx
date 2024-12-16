"use client";

import { Bot, Cpu, Zap } from "lucide-react";

export function ImageSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />

      <div className="relative max-w-[1200px] mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience the Future of AI
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our intuitive platform brings the power of AI to your fingertips
          </p>
        </div>

        <div className="relative">
          {/* Main Platform Image */}
          <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl shadow-purple-500/10 animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 backdrop-blur-sm" />
            <img
              src="/dashboard.png"
              alt="Platform Dashboard"
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Floating Feature Cards */}
          <div className="absolute -left-4 top-1/4 animate-float delay-200">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">AI Assistant</h3>
                  <p className="text-gray-400 text-sm">24/7 Support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 top-1/3 animate-float delay-500">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Smart Processing</h3>
                  <p className="text-gray-400 text-sm">Real-time Analysis</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-1/4 bottom-1/4 animate-float delay-700">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Fast Integration</h3>
                  <p className="text-gray-400 text-sm">Quick Setup</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 blur-3xl" />
          <div className="absolute -z-10 top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
        </div>
      </div>
    </section>
  );
}