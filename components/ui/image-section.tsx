"use client";

import Image from "next/image";

export function ImageSection() {
  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Trusted by Industry Leaders</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
              alt="AI Technology"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
              alt="Data Analysis"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}