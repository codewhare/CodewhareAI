"use client";

import { Bot, Brain, Fingerprint, Gauge, Lock, Zap } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Bot className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "AI-Powered Chatbots",
      description: "Deploy intelligent chatbots that understand context and provide human-like responses.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Machine Learning",
      description: "Advanced algorithms that learn and adapt to your business needs over time.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption and security measures to protect your sensitive data.",
      gradient: "from-pink-500 to-red-500"
    },
    {
      icon: <Gauge className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Real-time Analytics",
      description: "Monitor and analyze AI performance with comprehensive real-time dashboards.",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Fast Integration",
      description: "Quick and seamless integration with your existing systems and workflows.",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: <Fingerprint className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Custom Solutions",
      description: "Tailored AI solutions designed specifically for your business requirements.",
      gradient: "from-yellow-500 to-green-500"
    }
  ];

  return (
    <section id="features" className="relative py-16 sm:py-20 md:py-24 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />

      <div className="relative max-w-[1200px] mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features for Your Business
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Transform your operations with our comprehensive suite of AI-powered features
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-5 sm:p-6 hover:bg-white/10 transition-all duration-300 animate-fade-in-up border border-white/5 hover:border-white/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                style={{ 
                  backgroundImage: `linear-gradient(to right, ${feature.gradient.split(' ')[1]}, ${feature.gradient.split(' ')[3]})` 
                }} 
              />
              
              {/* Icon with gradient background */}
              <div className="relative inline-flex p-2.5 sm:p-3 rounded-lg bg-gradient-to-r mb-4"
                style={{ 
                  backgroundImage: `linear-gradient(to right, ${feature.gradient.split(' ')[1]}, ${feature.gradient.split(' ')[3]})` 
                }}>
                {feature.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-[14px] sm:text-[15px] text-gray-400">
                {feature.description}
              </p>

              {/* Hover arrow */}
              <div className="absolute bottom-5 sm:bottom-6 right-5 sm:right-6 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}