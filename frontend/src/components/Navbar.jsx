import React, { useState, useEffect } from 'react';
import { navLinks, restaurantInfo } from '../data/mock';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-[#F5F0E8]/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            className={`font-serif text-3xl font-semibold tracking-wide transition-colors duration-500 ${
              isScrolled ? 'text-[#8B2635]' : 'text-white'
            }`}
          >
            {restaurantInfo.name}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans text-sm font-medium tracking-wide underline-animate transition-colors duration-500 ${
                  isScrolled
                    ? 'text-[#3D3D3D] hover:text-[#8B2635]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button
              className={`ml-4 rounded-full px-6 py-2 font-sans text-sm font-medium transition-all duration-500 ${
                isScrolled
                  ? 'bg-[#8B2635] hover:bg-[#6B1D29] text-white'
                  : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30'
              }`}
            >
              Reserve a Table
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 transition-colors duration-500 ${
                  isScrolled ? 'text-[#3D3D3D]' : 'text-white'
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 transition-colors duration-500 ${
                  isScrolled ? 'text-[#3D3D3D]' : 'text-white'
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 bg-[#F5F0E8]/95 backdrop-blur-md rounded-2xl mb-4 px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 font-sans text-[#3D3D3D] hover:text-[#8B2635] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full mt-4 bg-[#8B2635] hover:bg-[#6B1D29] text-white rounded-full">
              Reserve a Table
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
