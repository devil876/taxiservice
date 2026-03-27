import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowLeft, MapPin, Shield, Clock } from 'lucide-react';
import BookingForm from '../components/BookingForm';
import StickyCTA from '../components/StickyCTA';

export default function LocationPage() {
  const { location } = useParams();
  const locationName = location?.split('-').pop() || 'Shimla';
  const formattedLocation = locationName.charAt(0).toUpperCase() + locationName.slice(1);

  return (
    <main className="pt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-dark mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Best Taxi Service in <br />
              <span className="text-brand-dark">{formattedLocation}</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Looking for a reliable taxi in {formattedLocation}? We offer 24/7 pickup and drop services, outstation trips, and local sightseeing tours at the best prices.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <Clock className="w-8 h-8 text-brand-dark mb-4" />
                <h3 className="font-bold mb-2">24/7 Service</h3>
                <p className="text-sm text-slate-500">Available day and night for your convenience.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <Shield className="w-8 h-8 text-brand-dark mb-4" />
                <h3 className="font-bold mb-2">Safe Rides</h3>
                <p className="text-sm text-slate-500">Verified drivers and well-maintained vehicles.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+916230454302" className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a href="https://wa.me/916230454302" className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#128C7E] transition-all">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src={`https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000`} 
                alt={`Taxi in ${formattedLocation}`} 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-brand p-8 rounded-3xl shadow-xl font-bold text-2xl">
              Starting at <br />
              <span className="text-4xl">₹12/km</span>
            </div>
          </div>
        </div>

        <section className="py-24 border-t border-slate-100">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Local Sightseeing</h2>
              <p className="text-slate-600 mb-6">Explore the best spots in {formattedLocation} with our experienced local drivers who know every corner of the town.</p>
              <ul className="space-y-3 text-slate-500">
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-dark" /> Major Landmarks</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-dark" /> Hidden Gems</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-dark" /> Shopping Areas</li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <BookingForm />
            </div>
          </div>
        </section>
      </div>
      <StickyCTA />
    </main>
  );
}
