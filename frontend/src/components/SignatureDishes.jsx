import React from 'react';
import { signatureDishes } from '../data/mock';
import { Card, CardContent } from './ui/card';

const SignatureDishes = () => {
  return (
    <section id="menu" className="py-24 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-sm font-medium text-[#8B2635] tracking-widest uppercase">
            Our Specialties
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1A1A1A] mt-3">
            Signature Dishes
          </h2>
          <div className="w-16 h-0.5 bg-[#8B2635] mx-auto mt-6" />
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {signatureDishes.map((dish, index) => (
            <Card
              key={dish.id}
              className="group bg-white border-0 rounded-2xl overflow-hidden hover-lift cursor-pointer"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
              </div>

              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-[#1A1A1A] mb-3 group-hover:text-[#8B2635] transition-colors duration-500">
                  {dish.title}
                </h3>
                <p className="font-sans text-[#6B6B6B] leading-relaxed">
                  {dish.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
