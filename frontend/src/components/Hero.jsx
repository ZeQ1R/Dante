import React from 'react';
import { restaurantInfo, heroImages } from '../data/mock';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImages.main}
          alt="Dante Restaurant Interior"
          className="w-full h-full object-cover"
        />
        {/* Warm Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/70 via-[#1A1A1A]/50 to-[#1A1A1A]/80" />
        {/* Subtle Texture */}
        <div className="absolute inset-0 bg-texture" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          {restaurantInfo.tagline}
        </h1>
        <p
          className="font-sans text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          {restaurantInfo.subheading}
        </p>
        <div
          className="opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          <Button
            className="bg-[#8B2635] hover:bg-[#6B1D29] text-white font-sans text-base px-8 py-6 rounded-full transition-all duration-500 hover:shadow-lg hover:shadow-[#8B2635]/30"
          >
            View Menu
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#menu"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-300 animate-gentle-pulse"
      >
        <ChevronDown className="w-8 h-8" />
      </a>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F5F0E8] to-transparent" />
    </section>
  );
};

export default Hero;
