import React from 'react';
import { ShieldCheck, Award, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutOwner() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white aspect-[4/5] bg-slate-200">
              {/* Image Placeholder for Akshay Rana */}
              <img 
                src="https://picsum.photos/seed/akshayrana/800/1000" 
                alt="Akshay Rana - Owner" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand p-8 rounded-3xl shadow-xl">
              <div className="text-4xl font-bold mb-1">10+</div>
              <div className="text-sm font-bold uppercase tracking-wider">Years Experience</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-brand/20 text-brand-dark px-4 py-1 rounded-full text-sm font-bold mb-6">
              MEET THE OWNER
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Driven by Passion, <br />
              <span className="text-brand-dark">Led by Akshay Rana</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Hi, I'm Akshay Rana, the founder of DharamshalaTaxi. With over a decade of experience in the travel industry, I started this service with one mission: to provide the most reliable and comfortable travel experience in Himachal Pradesh.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We don't just provide rides; we ensure safety, punctuality, and a local touch that makes your journey memorable. Whether you're a tourist exploring the hills or a local resident, you can trust us for your every trip.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-brand-dark" />
                </div>
                <span className="font-bold">Safety First Policy</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <Award className="w-6 h-6 text-brand-dark" />
                </div>
                <span className="font-bold">Best Service Award</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <Users className="w-6 h-6 text-brand-dark" />
                </div>
                <span className="font-bold">5000+ Happy Trips</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
