import React from 'react';
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const locations = [
    "Shimla", "Manali", "Chandigarh", "Kufri", "Narkanda", "Dharamshala"
  ];

  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-brand p-2 rounded-lg">
                <Car className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl font-bold tracking-tight">Dharamshala<span className="text-brand-dark">Taxi</span></span>
            </Link>
            <p className="text-slate-500 leading-relaxed">
              Premium 24/7 taxi service in Dharamshala and surrounding areas. We provide safe, reliable, and affordable travel solutions for tourists and locals alike.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-brand transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-brand transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-brand transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-500">
              <li><Link to="/" className="hover:text-brand-dark transition-colors">Home</Link></li>
              <li><a href="#services" className="hover:text-brand-dark transition-colors">Our Services</a></li>
              <li><a href="#pricing" className="hover:text-brand-dark transition-colors">Pricing Plans</a></li>
              <li><a href="#booking" className="hover:text-brand-dark transition-colors">Book Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Service Areas</h4>
            <ul className="space-y-4 text-slate-500">
              {locations.map((loc) => (
                <li key={loc}>
                  <Link to={`/taxi-in-${loc.toLowerCase()}`} className="hover:text-brand-dark transition-colors">
                    Taxi in {loc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-slate-500">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-dark shrink-0" />
                <span>Main Square, McLeod Ganj, Dharamshala, Himachal Pradesh 176219</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-dark shrink-0" />
                <a href="tel:+916230454302" className="hover:text-brand-dark">+91 62304 54302</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-dark shrink-0" />
                <a href="mailto:akshayrana.taxi@demo.com" className="hover:text-brand-dark">akshayrana.taxi@demo.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Akshay Rana - DharamshalaTaxi. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-brand-dark transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-dark transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
