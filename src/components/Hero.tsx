import React from 'react';
import { Phone, MessageCircle, ArrowRight, Car } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-slate-50"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/10 skew-x-12 transform translate-x-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand/20 text-brand-dark px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-dark opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-dark"></span>
            </span>
            24/7 TAXI SERVICE IN DHARAMSHALA
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            Reliable Rides, <br />
            <span className="text-brand-dark">Anytime, Anywhere.</span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 max-w-lg">
            Experience the best taxi service in Dharamshala. Local rides, outstation trips, and airport transfers at affordable prices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:+916230454302" 
              className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all group"
            >
              <Phone className="w-5 h-5" />
              Book via Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://wa.me/916230454302?text=Hi, I need a taxi from [location] to [destination]" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#128C7E] transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Now
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-white"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="text-sm">
              <div className="font-bold">500+ Happy Customers</div>
              <div className="text-slate-500">Rated 4.9/5 in Shimla</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000" 
              alt="Taxi Service Shimla" 
              className="w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-brand p-2 rounded-lg">
                <Car className="w-5 h-5 text-black" />
              </div>
              <div className="font-bold">Fast Pickup</div>
            </div>
            <p className="text-sm text-slate-500">Our drivers reach your location within 15-20 minutes.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
