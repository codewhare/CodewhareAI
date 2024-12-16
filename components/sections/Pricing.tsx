"use client";

import { Check, Sparkles } from "lucide-react";
import { useState } from "react";

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Basic",
      description: "Perfect for businesses starting with AI customer engagement",
      price: isAnnual ? 300 : 349,
      features: [
        "24/7 Intelligent Chatbot",
        "Customer Support Automation",
        "Basic Analytics Dashboard",
        "Up to 1,000 Conversations/mo",
        "Email Support"
      ],
      gradient: "from-blue-600 to-purple-600",
      popular: false
    },
    {
      name: "Standard",
      description: "Ideal for growing businesses seeking more capabilities",
      price: isAnnual ? 500 : 599,
      features: [
        "Everything in Basic, plus:",
        "CRM Integration",
        "Advanced Analytics",
        "Custom Workflows",
        "Up to 5,000 Conversations/mo",
        "Priority Support"
      ],
      gradient: "from-purple-600 to-pink-600",
      popular: true
    },
    {
      name: "Premium",
      description: "For enterprises seeking full AI automation",
      price: "Custom",
      features: [
        "Everything in Standard, plus:",
        "Full Process Automation",
        "Custom AI Model Training",
        "Unlimited Conversations",
        "API Access",
        "24/7 Dedicated Support",
        "Custom Integration"
      ],
      gradient: "from-pink-600 to-red-600",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="relative py-16 sm:py-20 md:py-24 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/30 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="relative max-w-[1200px] mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg mb-8">
            Choose the perfect plan that scales with your business needs
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white/5 backdrop-blur-sm rounded-full p-1">
            <button
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base transition-all duration-300 ${!isAnnual ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base transition-all duration-300 ${isAnnual ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setIsAnnual(true)}
            >
              Annual
              <span className="ml-1 sm:ml-2 text-[10px] sm:text-xs text-emerald-500 font-medium">Save 15%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-6 sm:p-8 transition-all duration-500 ${
                plan.popular ? 'bg-white/10' : 'bg-white/5'
              } backdrop-blur-sm hover:scale-[1.02]`}
            >
              {/* Gradient Border Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                style={{ 
                  backgroundImage: `linear-gradient(to right, ${plan.gradient.split(' ')[1]}, ${plan.gradient.split(' ')[3]})` 
                }}
              />

              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="inline-flex items-center gap-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" /> Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm sm:text-base text-gray-400">{plan.description}</p>
              </div>

              <div className="mb-6 sm:mb-8">
                {typeof plan.price === 'number' ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-sm sm:text-base text-gray-400">/month</span>
                  </div>
                ) : (
                  <div className="text-3xl sm:text-4xl font-bold text-white">{plan.price}</div>
                )}
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`p-0.5 rounded-full bg-gradient-to-r ${plan.gradient} mt-1`}>
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
                  plan.popular
                    ? `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-lg hover:shadow-purple-500/30`
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 