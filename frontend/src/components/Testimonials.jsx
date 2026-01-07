import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/mock';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[#FAF8F4]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-sm font-medium text-[#8B2635] tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1A1A1A] mt-3">
            What Our Guests Say
          </h2>
          <div className="w-16 h-0.5 bg-[#8B2635] mx-auto mt-6" />
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          {/* Quote Icon */}
          <Quote className="w-16 h-16 text-[#8B2635]/10 mx-auto mb-8" />

          {/* Testimonial Content */}
          <div className="text-center min-h-[200px] flex flex-col justify-center">
            <p
              className={`font-serif text-2xl md:text-3xl text-[#1A1A1A] leading-relaxed italic mb-8 transition-all duration-500 ${
                isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
              }`}
            >
              "{testimonials[currentIndex].quote}"
            </p>
            <div
              className={`transition-all duration-500 delay-100 ${
                isAnimating ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <p className="font-sans font-semibold text-[#1A1A1A]">
                {testimonials[currentIndex].author}
              </p>
              <p className="font-sans text-sm text-[#6B6B6B]">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-[#8B2635]/30 text-[#8B2635] hover:bg-[#8B2635] hover:text-white hover:border-[#8B2635] transition-all duration-500"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? 'bg-[#8B2635] w-6'
                      : 'bg-[#8B2635]/30 hover:bg-[#8B2635]/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-[#8B2635]/30 text-[#8B2635] hover:bg-[#8B2635] hover:text-white hover:border-[#8B2635] transition-all duration-500"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
