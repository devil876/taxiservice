import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function StickyCTA() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 bg-white/80 backdrop-blur-xl p-2 rounded-full shadow-2xl border border-white/20 md:hidden">
      <a 
        href="tel:+916230454302" 
        className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-bold text-sm"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <a 
        href="https://wa.me/916230454302" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-full"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
