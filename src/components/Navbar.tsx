import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-brand p-2 rounded-lg group-hover:bg-brand-dark transition-colors">
            <Car className="w-6 h-6 text-black" />
          </div>
          <span className="text-xl font-bold tracking-tight">Dharamshala<span className="text-brand-dark">Taxi</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className="hover:text-brand-dark transition-colors">Home</Link>
          <a href="#services" className="hover:text-brand-dark transition-colors">Services</a>
          <a href="#pricing" className="hover:text-brand-dark transition-colors">Pricing</a>
          <a href="#booking" className="hover:text-brand-dark transition-colors">Book Now</a>
          <a href="tel:+916230454302" className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all">
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top duration-300">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="py-2 border-b">Home</Link>
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="py-2 border-b">Services</a>
          <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="py-2 border-b">Pricing</a>
          <a href="#booking" onClick={() => setIsMenuOpen(false)} className="py-2 border-b">Book Now</a>
          <a href="tel:+916230454302" className="flex items-center justify-center gap-2 bg-brand text-black font-bold py-3 rounded-xl">
            <Phone className="w-5 h-5" />
            <span>Call +91 62304 54302</span>
          </a>
        </div>
      )}
    </nav>
  );
}
