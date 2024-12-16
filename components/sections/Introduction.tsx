export function Introduction() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      {/* Background grid with animation */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,#000_70%,transparent_100%)]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500/30 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/30 rounded-full blur-[128px] animate-pulse delay-700" />
      
      <div className="max-w-[1200px] mx-auto text-center pt-32 sm:pt-20 relative z-10">
        <div>
          <h1 className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent leading-[1.1] animate-gradient-x">
            Empower Your Business with AI-Driven Solutions
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-[800px] mx-auto mb-8 sm:mb-12">
            Streamline operations, enhance customer experience, and scale your business effortlessly with our tailored AI solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-16 sm:mb-24">
          <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] duration-300">
            <span className="flex items-center justify-center gap-2">
              Get Started Free
              <svg className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all hover:border-white/40 hover:scale-105 duration-300">
            Schedule Demo
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-[900px] mx-auto">
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl sm:text-[32px] md:text-[40px] font-bold text-white mb-1 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-blue-400 transition-all">99.9%</h3>
            <p className="text-sm sm:text-base text-gray-400">Uptime</p>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl sm:text-[32px] md:text-[40px] font-bold text-white mb-1 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-blue-400 transition-all">Enterprise</h3>
            <p className="text-sm sm:text-base text-gray-400">Grade Security</p>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl sm:text-[32px] md:text-[40px] font-bold text-white mb-1 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-blue-400 transition-all">24/7</h3>
            <p className="text-sm sm:text-base text-gray-400">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}