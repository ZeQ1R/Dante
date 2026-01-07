import React from 'react';
import { atmosphereFeatures } from '../data/mock';
import { Check } from 'lucide-react';

const Atmosphere = () => {
  return (
    <section className="py-20 bg-[#1A1A1A] relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="bg-texture w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features List */}
          <div>
            <span className="font-sans text-sm font-medium text-[#C9A962] tracking-widest uppercase">
              What Makes Us Special
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mt-3 mb-10">
              Atmosphere & Details
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {atmosphereFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white/5 rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-colors duration-500"
                >
                  <div className="w-10 h-10 rounded-full bg-[#8B2635] flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-sans text-white/90">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Content */}
          <div className="text-center lg:text-right">
            <div className="inline-block">
              <p className="font-serif text-6xl md:text-8xl text-[#8B2635]/20 font-semibold">
                20+
              </p>
              <p className="font-sans text-white/60 text-sm tracking-widest uppercase mt-2">
                Years of Excellence
              </p>
            </div>
            <div className="mt-12">
              <p className="font-serif text-4xl md:text-6xl text-[#C9A962]/30 font-semibold">
                1000+
              </p>
              <p className="font-sans text-white/60 text-sm tracking-widest uppercase mt-2">
                Happy Guests
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Atmosphere;
