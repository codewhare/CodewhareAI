"use client";

import { Button } from "@/components/ui/button";
import { Bot, Cpu, MessageSquare, Check } from "lucide-react";

const packages = [
  {
    title: "Basic Package",
    icon: MessageSquare,
    description: "Perfect for businesses starting their AI journey",
    price: "$300",
    period: "per month",
    features: [
      "24/7 Intelligent Chatbot",
      "Customer Support Automation",
      "Basic Analytics Dashboard",
      "Up to 1,000 Conversations/mo",
      "Email Support"
    ],
    cta: "Get Started"
  },
  {
    title: "Standard Package",
    icon: Bot,
    description: "Ideal for growing businesses",
    price: "$500",
    period: "per month",
    features: [
      "Everything in Basic, plus:",
      "CRM Integration",
      "Advanced Analytics",
      "Custom Workflows",
      "Up to 5,000 Conversations/mo",
      "Priority Support"
    ],
    cta: "Choose Plan",
    popular: true
  },
  {
    title: "Premium Package",
    icon: Cpu,
    description: "For enterprises seeking full AI automation",
    price: "Custom",
    period: "pricing",
    features: [
      "Everything in Standard, plus:",
      "Full Process Automation",
      "Custom AI Model Training",
      "Unlimited Conversations",
      "API Access",
      "24/7 Dedicated Support",
      "Custom Integration"
    ],
    cta: "Contact Sales"
  }
];

export function Features() {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 to-transparent" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Solutions Designed for Your Success</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Choose the perfect plan to accelerate your business growth with AI
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-1 ${
                pkg.popular
                  ? "bg-gradient-to-b from-blue-600 to-blue-800 border border-blue-500"
                  : "bg-gray-900/60 backdrop-blur-lg border border-gray-800"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/20 mb-6">
                <pkg.icon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
              <p className="text-gray-400 mb-6">{pkg.description}</p>
              <div className="mb-8">
                <span className="text-3xl font-bold text-white">{pkg.price}</span>
                <span className="text-gray-400 ml-2">{pkg.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={pkg.popular ? "default" : "outline"}
                className="w-full text-base py-6"
              >
                {pkg.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}