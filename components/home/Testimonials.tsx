'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Quote, ShieldCheck, Globe } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Dr. Raheel Khan",
    role: "Senior Enterprise Partner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80",
    text: "The point-to-point synchronization between GitHub activity and the HireX score is revolutionary. It eliminates hiring bias completely.",
    rating: 5
  },
  {
    name: "Neeraj Kumar",
    role: "Full Stack Lead",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&q=80",
    text: "Manee Pro 2.5 flash tests are incredibly accurate. As a developer, having my skills verified autonomously adds massive value to my profile.",
    rating: 5
  },
  {
    name: "Deepanshu Joshi",
    role: "AI Architecture Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
    text: "We've built a 360-degree reporting system that finally makes resumes obsolete. HireX is the future of the autonomous workforce.",
    rating: 5
  }
];

export default function Testimonials() {
  const googleReviewLink = "https://www.google.com/search?q=career+lab+consulting#lrd=0x390ce5b02b6f908d:0x3f9da383c70066be,3,,,,";

  return (
    <section className="relative py-32 bg-[#020617] overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6 backdrop-blur-xl"
          >
            <Globe size={12} className="animate-spin" style={{ animationDuration: '8s' }} />
            Verified Global Reputation
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase italic">
            Trusted by the <br /> <span className="text-blue-500">AI Empire.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div 
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="relative bg-white/[0.03] backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition-all duration-500 group shadow-2xl"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-600/20 rotate-12 group-hover:rotate-0 transition-transform">
                <Quote size={20} className="text-white fill-white" />
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-white/10 bg-slate-800">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    fill 
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-tight italic">{testimonial.name}</h4>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed font-medium italic mb-8">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center gap-2 text-blue-500">
                  <ShieldCheck size={14} />
                  <span className="text-[9px] font-black uppercase tracking-widest">Verified Google Review</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-16 bg-white/[0.02] border border-white/10 rounded-[3rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-md shadow-2xl shadow-blue-500/5"
        >
          <div className="flex items-center gap-6">
            <div className="flex -space-x-4">
              {[
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&q=80",
                "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&q=80"
              ].map((src, i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-[#020617] bg-slate-800 overflow-hidden relative shadow-xl">
                   <Image src={src} alt="User node" fill sizes="48px" className="object-cover" />
                </div>
              ))}
            </div>
            <div>
              <div className="text-[18px] md:text-2xl font-black text-white tracking-tighter italic uppercase">4.9/5 Google Satisfaction</div>
              <div className="text-[12px] pt-4 font-bold text-slate-500 uppercase tracking-[0.2em]">Based on 1,500+ Verified Nodes</div>
            </div>
          </div>
          
          <a 
            href={googleReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-white text-black font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-white/5 active:scale-95 text-center flex items-center justify-center"
          >
            View All Testimonials
          </a>
        </motion.div>
      </div>
    </section>
  );
}