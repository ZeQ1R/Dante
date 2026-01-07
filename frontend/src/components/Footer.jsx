import React from 'react';
import { restaurantInfo, navLinks } from '../data/mock';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Tagline */}
          <div>
            <h3 className="font-serif text-3xl font-semibold text-white mb-4">
              {restaurantInfo.name}
            </h3>
            <p className="font-sans text-white/60 leading-relaxed">
              Where every meal is a memory, and every guest becomes family.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href={restaurantInfo.social.instagram}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8B2635] transition-colors duration-500"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href={restaurantInfo.social.facebook}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8B2635] transition-colors duration-500"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href={restaurantInfo.social.twitter}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8B2635] transition-colors duration-500"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-white/60 hover:text-[#8B2635] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="font-sans text-white/60">
                {restaurantInfo.address}
              </li>
              <li>
                <a
                  href={`tel:${restaurantInfo.phone}`}
                  className="font-sans text-white/60 hover:text-[#8B2635] transition-colors duration-300"
                >
                  {restaurantInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${restaurantInfo.email}`}
                  className="font-sans text-white/60 hover:text-[#8B2635] transition-colors duration-300"
                >
                  {restaurantInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-sm text-white/40">
              © {new Date().getFullYear()} {restaurantInfo.name}. All rights reserved.
            </p>
            <p className="font-sans text-sm text-white/40">
              Crafted with love in the heart of the city.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
