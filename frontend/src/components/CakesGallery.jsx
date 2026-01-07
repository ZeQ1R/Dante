import React, { useRef, useEffect, useState } from 'react';
import { cakesGallery } from '../data/mock';

const CakesGallery = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const handleMouseLeave = () => setIsDragging(false);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="cakes" className="py-24 bg-[#FAF8F4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-sm font-medium text-[#8B2635] tracking-widest uppercase">
            Sweet Delights
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1A1A1A] mt-3">
            Cakes & Desserts
          </h2>
          <div className="w-16 h-0.5 bg-[#8B2635] mx-auto mt-6" />
          <p className="font-sans text-[#6B6B6B] mt-6 max-w-lg mx-auto">
            Each creation is handcrafted with love, using the finest ingredients
            to bring you moments of pure indulgence.
          </p>
        </div>
      </div>

      {/* Horizontal Gallery */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`flex gap-6 overflow-x-auto pb-8 px-6 lg:px-12 scrollbar-hide cursor-grab ${
          isDragging ? 'cursor-grabbing' : ''
        }`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {cakesGallery.map((cake) => (
          <div
            key={cake.id}
            className="flex-shrink-0 w-80 group"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={cake.image}
                alt={cake.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                draggable="false"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl font-semibold text-white mb-2">
                  {cake.name}
                </h3>
                <p className="font-sans text-white/80 text-sm">
                  {cake.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Hint */}
      <p className="text-center font-sans text-sm text-[#6B6B6B] mt-8">
        ← Drag to explore →
      </p>
    </section>
  );
};

export default CakesGallery;
