import React from 'react';
import { restaurantInfo } from '../data/mock';
import { MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="font-sans text-sm font-medium text-[#C9A962] tracking-widest uppercase">
              Visit Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mt-3 mb-10">
              Contact & Hours
            </h2>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-[#8B2635]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#8B2635]" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-white mb-1">Address</h3>
                  <p className="font-sans text-white/70">{restaurantInfo.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-[#8B2635]/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#8B2635]" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-white mb-1">Phone</h3>
                  <p className="font-sans text-white/70">{restaurantInfo.phone}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-[#8B2635]/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#8B2635]" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-white mb-2">Opening Hours</h3>
                  <div className="space-y-1">
                    <p className="font-sans text-white/70">
                      <span className="text-white/90">Mon - Fri:</span> {restaurantInfo.hours.weekdays}
                    </p>
                    <p className="font-sans text-white/70">
                      <span className="text-white/90">Saturday:</span> {restaurantInfo.hours.weekend}
                    </p>
                    <p className="font-sans text-white/70">
                      <span className="text-white/90">Sunday:</span> {restaurantInfo.hours.sunday}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative">
            <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden bg-[#2D2D2D] flex items-center justify-center">
              {/* Stylized Map Placeholder */}
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-full bg-[#8B2635]/20 flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-10 h-10 text-[#8B2635]" />
                </div>
                <p className="font-serif text-2xl text-white mb-2">Find Us Here</p>
                <p className="font-sans text-white/60 text-sm">
                  {restaurantInfo.address}
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 font-sans text-sm text-[#C9A962] hover:text-[#8B2635] transition-colors duration-300 underline-animate"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -left-4 w-full h-full border border-[#8B2635]/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
