import React from 'react';
import { storyContent } from '../data/mock';

const OurStory = () => {
  return (
    <section id="story" className="py-24 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <span className="font-sans text-sm font-medium text-[#8B2635] tracking-widest uppercase">
              Since 2003
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1A1A1A] mt-3 mb-8">
              {storyContent.title}
            </h2>
            
            <div className="space-y-6">
              {storyContent.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-sans text-[#6B6B6B] leading-relaxed text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Decorative Quote */}
            <div className="mt-10 pl-6 border-l-2 border-[#8B2635]">
              <p className="font-serif text-2xl text-[#1A1A1A] italic">
                "Food is love made visible."
              </p>
              <span className="font-sans text-sm text-[#8B2635] mt-2 block">
                — The Dante Family
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={storyContent.image}
                  alt="Dante Restaurant Interior"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              {/* Decorative Frame */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#8B2635]/30 rounded-2xl -z-10" />
              
              {/* Accent Element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#8B2635]/10 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
