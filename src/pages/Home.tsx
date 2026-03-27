import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import BookingForm from '../components/BookingForm';
import StickyCTA from '../components/StickyCTA';
import AboutOwner from '../components/AboutOwner';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Pricing />
      <Testimonials />
      <BookingForm />
      
      <AboutOwner />

      {/* Google Maps Integration Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Service Area</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We are centrally located in Dharamshala, providing quick access to all major tourist spots and transport hubs.</p>
          </div>
          
          <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white h-[500px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13543.0456208579!2d76.3248!3d32.2190!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39047062c54f2735%3A0xad4b3408c971387e!2sDharamshala%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1711512345678!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <StickyCTA />
    </main>
  );
}
