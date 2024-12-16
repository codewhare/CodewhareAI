"use client";

export function HowItWorks() {
  const steps = [
    {
      title: "Define Your Needs",
      description: "Tell us about your business requirements and AI automation goals."
    },
    {
      title: "Configuration",
      description: "Our experts configure and train the AI models to match your needs."
    },
    {
      title: "Integration Setup",
      description: "Seamlessly integrate the AI solution with your existing systems."
    },
    {
      title: "Launch & Optimize",
      description: "Go live with your AI solution and continuously optimize performance."
    }
  ];

  return (
    <section id="how-it-works" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,#000_70%,transparent_100%)]" />
      
      <div className="relative max-w-[1200px] mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
            Get started with AI automation in four simple steps
          </p>
        </div>
        <br></br>
        <br></br>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/[0.08] group hover:border-white/[0.16] transition-all">
              <div className="absolute -top-4 -left-4 flex items-center justify-center w-8 h-8 rounded-full bg-white text-black font-bold">
                {index + 1}
              </div>
              <div className="space-y-4">
                <h3 className="text-xl text-white font-semibold pt-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-[15px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}