import React, { useState } from 'react';
import { Check, Car, Bike } from 'lucide-react';
import { cn } from '../lib/utils';

const carPlans = [
  {
    name: "Sedan (Swift Dzire/Etios)",
    price: "₹12/km",
    period: "Local/Outstation",
    features: ["4 Passengers + 1 Driver", "Comfortable Seating", "AC/Non-AC Options", "Best for Small Families"]
  },
  {
    name: "SUV (Innova/Ertiga)",
    price: "₹18/km",
    period: "Local/Outstation",
    features: ["6-7 Passengers + 1 Driver", "Spacious Luggage Room", "Experienced Hill Driver", "Perfect for Groups"]
  },
  {
    name: "Hatchback (Alto/Tiago)",
    price: "₹10/km",
    period: "Local Only",
    features: ["4 Passengers + 1 Driver", "Economical Choice", "Quick City Travel", "Easy Parking"]
  }
];

const bikePlans = [
  {
    name: "Standard Bike (Pulsar/Splendor)",
    price: "₹5/km",
    period: "Local Only",
    features: ["1 Passenger + 1 Rider", "Fast & Agile", "Perfect for Solo Travelers", "Avoid Traffic Jams"]
  },
  {
    name: "Premium Bike (Royal Enfield)",
    price: "₹8/km",
    period: "Local/Sightseeing",
    features: ["1 Passenger + 1 Rider", "Classic Experience", "Great for Hill Rides", "Comfortable Seating"]
  },
  {
    name: "Scooter (Activa/Jupiter)",
    price: "₹4/km",
    period: "Local Only",
    features: ["1 Passenger + 1 Rider", "Easy to Ride", "Budget Friendly", "Convenient for Short Trips"]
  }
];

export default function Pricing() {
  const [category, setCategory] = useState<'car' | 'bike'>('car');
  const activePlans = category === 'car' ? carPlans : bikePlans;

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Fleet & Pricing</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-10">Choose the vehicle that fits your needs. No hidden costs, transparent per-kilometer rates for Dharamshala and beyond.</p>
          
          {/* Category Toggle */}
          <div className="inline-flex p-1 bg-slate-200 rounded-2xl mb-8">
            <button 
              onClick={() => setCategory('car')}
              className={cn(
                "flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all",
                category === 'car' ? "bg-white text-black shadow-sm" : "text-slate-500 hover:text-slate-700"
              )}
            >
              <Car className="w-5 h-5" />
              Car
            </button>
            <button 
              onClick={() => setCategory('bike')}
              className={cn(
                "flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all",
                category === 'bike' ? "bg-white text-black shadow-sm" : "text-slate-500 hover:text-slate-700"
              )}
            >
              <Bike className="w-5 h-5" />
              Bike
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {activePlans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-500 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-slate-400">/ {plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-slate-600">
                    <div className="bg-green-100 p-1 rounded-full">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href={`https://wa.me/916230454302?text=Hi, I want to book a ${plan.name} ${category}.`}
                className="w-full py-4 rounded-xl bg-slate-100 text-black font-bold hover:bg-brand transition-all text-center"
              >
                Book This {category === 'car' ? 'Car' : 'Bike'}
              </a>
            </div>
          ))}
        </div>

        
        <p className="text-center mt-12 text-slate-400 text-sm italic">
          * Prices may vary based on vehicle type and peak season.
        </p>
      </div>
    </section>
  );
}
