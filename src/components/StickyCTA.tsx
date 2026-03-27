import React, { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function StickyCTA() {
  const vehicles = [
    "Sedan",
    "SUV",
    "Hatchback",
    "Standard Bike",
    "Premium Bike",
    "Scooter"
  ];

  const [selected, setSelected] = useState("Sedan");

  const whatsappMessage = `Hi, I want to book a ${selected}.
Pickup: 
Drop: 
Time: `;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t shadow-2xl md:hidden">

      {/* Vehicle Selector */}
      <div className="flex overflow-x-auto gap-2 px-3 py-2">
        {vehicles.map((item) => (
          <button
            key={item}
            onClick={() => setSelected(item)}
            className={`px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap ${
              selected === item
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-2 px-3 pb-3">
        
        <a 
          href="tel:+916230454302" 
          className="flex items-center justify-center gap-2 bg-black text-white w-full py-3 rounded-xl font-semibold text-sm"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>

        <a 
          href={`https://wa.me/916230454302?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] text-white w-full py-3 rounded-xl font-semibold text-sm"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>

      </div>
    </div>
  );
}
