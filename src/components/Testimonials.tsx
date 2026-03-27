import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Tourist from Delhi",
    content: "The best taxi service in Shimla. The driver was very professional and knew all the shortcuts. Highly recommended for family trips!",
    rating: 5
  },
  {
    name: "Priya Verma",
    role: "Local Resident",
    content: "I use their service for my daily commute to the office. Always on time and very reliable. The cars are clean and well-maintained.",
    rating: 5
  },
  {
    name: "Rahul Gupta",
    role: "Business Traveler",
    content: "Excellent airport transfer service. They were waiting for me at Chandigarh airport even though my flight was delayed. Great communication.",
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Real experiences from real customers who trust DharamshalaTaxi.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-[2rem] relative group hover:bg-brand/10 transition-colors">
              <Quote className="absolute top-6 right-8 w-12 h-12 text-brand/20 group-hover:text-brand/40 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'fill-brand text-brand' : 'text-slate-300'}`} 
                  />
                ))}
              </div>
              <p className="text-lg text-slate-700 mb-8 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={`https://picsum.photos/seed/${testimonial.name}/100/100`} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
