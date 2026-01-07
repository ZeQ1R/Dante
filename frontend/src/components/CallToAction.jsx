import React from 'react';
import { ctaContent } from '../data/mock';
import { Button } from './ui/button';

const CallToAction = () => {
  return (
    <section className="py-24 bg-[#F5F0E8] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8B2635]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C9A962]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Decorative Line */}
        <div className="w-24 h-0.5 bg-[#8B2635] mx-auto mb-10" />

        <h2 className="font-serif text-4xl md:text-6xl font-semibold text-[#1A1A1A] mb-8">
          {ctaContent.headline}
        </h2>

        <p className="font-sans text-lg text-[#6B6B6B] mb-10 max-w-xl mx-auto">
          Join us for an unforgettable dining experience. We can't wait to serve you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-[#8B2635] hover:bg-[#6B1D29] text-white font-sans text-base px-10 py-6 rounded-full transition-all duration-500 hover:shadow-xl hover:shadow-[#8B2635]/20"
          >
            {ctaContent.buttonText}
          </Button>
          <Button
            variant="outline"
            className="border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white font-sans text-base px-10 py-6 rounded-full transition-all duration-500"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
