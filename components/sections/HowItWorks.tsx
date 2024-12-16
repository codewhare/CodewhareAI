"use client";

import { LineChart, Settings, Users } from "lucide-react";

const steps = [
  {
    icon: Settings,
    title: "Choose Your Package",
    description: "Select a plan that suits your business needs."
  },
  {
    icon: Users,
    title: "Onboarding & Setup",
    description: "We'll work closely with you to integrate AI solutions seamlessly into your operations."
  },
  {
    icon: LineChart,
    title: "Grow with Confidence",
    description: "Experience the efficiency and results of AI-driven processes."
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Getting Started is Easy</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}