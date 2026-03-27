import React, { useState } from 'react';
import { Send, Phone, MessageCircle } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    pickup: '',
    drop: '',
    time: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I need a taxi booking:\nName: ${formData.name}\nPickup: ${formData.pickup}\nDrop: ${formData.drop}\nTime: ${formData.time}\nPhone: ${formData.phone}`;
    window.open(`https://wa.me/916230454302?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="booking" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to Book <br />
              <span className="text-brand-dark">Your Ride?</span>
            </h2>
            <p className="text-lg text-slate-600 mb-12 max-w-md">
              Fill out the form or contact us directly via WhatsApp or Phone. We are available 24/7 to assist you.
            </p>

            <div className="space-y-6">
              <a href="tel:+916230454302" className="flex items-center gap-4 group">
                <div className="bg-white p-4 rounded-2xl shadow-sm group-hover:bg-brand transition-colors">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Call Us Directly</div>
                  <div className="text-xl font-bold">+91 62304 54302</div>
                </div>
              </a>
              <a href="https://wa.me/916230454302" className="flex items-center gap-4 group">
                <div className="bg-white p-4 rounded-2xl shadow-sm group-hover:bg-[#25D366] transition-colors">
                  <MessageCircle className="w-6 h-6 text-black group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">WhatsApp Us</div>
                  <div className="text-xl font-bold">+91 62304 54302</div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Pickup Location</label>
                <input 
                  type="text" 
                  required
                  placeholder="Hotel/Landmark in Dharamshala"
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand transition-all"
                  value={formData.pickup}
                  onChange={(e) => setFormData({...formData, pickup: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Drop Location</label>
                <input 
                  type="text" 
                  required
                  placeholder="Destination City/Point"
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand transition-all"
                  value={formData.drop}
                  onChange={(e) => setFormData({...formData, drop: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Pickup Time & Date</label>
                <input 
                  type="datetime-local" 
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand transition-all"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                />
              </div>

              <button 
  type="submit"
  className="w-full bg-black text-white px-6 py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3"
>
  <Send className="w-5 h-5" />
  Send Booking Request
</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
