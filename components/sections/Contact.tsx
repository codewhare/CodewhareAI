"use client";

import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" variant="default">
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            Contact Sales
          </Button>
          <Button size="lg" variant="outline">
            Request a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}