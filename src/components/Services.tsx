import React from 'react';
import { MapPin, Plane, Globe, Clock, Shield, UserCheck, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: "Local Rides",
    description: "Quick and easy taxi for your daily commute within Shimla city.",
    icon: MapPin,
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Outstation Trips",
    description: "Comfortable long-distance travel to Manali, Chandigarh, Delhi, and more.",
    icon: Globe,
    color: "bg-green-500/10 text-green-600"
  },
  {
    title: "Airport Transfers",
    description: "Reliable pickup and drop service for Chandigarh and Shimla airports.",
    icon: Plane,
    color: "bg-purple-500/10 text-purple-600"
  }
];

const features = [
  { title: "Fast Pickup", icon: Clock },
  { title: "Affordable", icon: Shield },
  { title: "Verified Drivers", icon: UserCheck }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">We provide a wide range of taxi services to meet all your travel needs in and around Dharamshala.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
              <a href="#booking" className="text-brand-dark font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Book Now <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="bg-black rounded-[3rem] p-8 md:p-16 text-white grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose DharamshalaTaxi?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-brand p-2 rounded-lg">
                    <feature.icon className="w-5 h-5 text-black" />
                  </div>
                  <span className="font-bold">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <a href="tel:+916230454302" className="bg-brand text-black px-10 py-5 rounded-2xl font-bold text-xl hover:bg-brand-dark transition-all">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
