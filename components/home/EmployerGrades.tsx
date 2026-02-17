'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Star, Activity, Zap, Search, Globe } from 'lucide-react';

const GRADES = [
  {
    rank: "A+",
    title: "Elite Partners",
    metrics: { response: "< 12h", accuracy: "99.2%", ctc: "Market Top" },
    color: "from-blue-400 to-cyan-400",
    glow: "shadow-blue-500/20",
    description: "Fortune 500 & Unicorns with autonomous hiring pipelines."
  },
  {
    rank: "A",
    title: "Verified Growth",
    metrics: { response: "< 24h", accuracy: "96.5%", ctc: "Competitive" },
    color: "from-indigo-400 to-purple-400",
    glow: "shadow-indigo-500/20",
    description: "Series B+ startups with verified digital footprints."
  },
  {
    rank: "B",
    title: "Standard",
    metrics: { response: "< 48h", accuracy: "92.0%", ctc: "Standard" },
    color: "from-slate-400 to-slate-500",
    glow: "shadow-slate-500/20",
    description: "Emerging companies undergoing identity synchronization."
  }
];

const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; vx: number; vy: number }[] = [];

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || 800;
      particles = Array.from({ length: 40 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.lineWidth = 0.5;

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        particles.slice(i + 1).forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    setup();
    draw();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-30" />;
};

export default function EmployerGrades() {
  return (
    <section id="employers" className="relative py-32 bg-[#020617] overflow-hidden border-t border-white/5">
      <NeuralBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
          <div className="max-w-2xl text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
            >
              <Search size={12} />
              Reputation Monitoring Active
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase italic">
              Verified <br />
              <span className="text-blue-500">Oppor-Tunities.</span>
            </h2>
          </div>
          
          <div className="p-6 bg-white/[0.02] border border-white/10 rounded-[2rem] backdrop-blur-xl max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <Zap size={20} className="text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-black text-white uppercase italic tracking-widest">AI Trust Protocol</span>
            </div>
            <p className="text-slate-400 text-sm font-medium leading-relaxed">
              Our agent autonomously scrapes Glassdoor, LinkedIn, and social footprints to verify employer grade categories in real-time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {GRADES.map((grade, idx) => (
            <motion.div 
              key={grade.rank} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className={`group relative bg-white/[0.02] border border-white/5 rounded-[3rem] p-10 hover:bg-white/[0.05] transition-all duration-500 shadow-2xl ${grade.glow}`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent -translate-y-full group-hover:animate-[scan_4s_linear_infinite]" />
              
              <div className={`text-7xl font-black bg-gradient-to-br ${grade.color} bg-clip-text text-transparent mb-6 italic tracking-tighter`}>
                {grade.rank}
              </div>
              
              <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">{grade.title}</h3>
              <p className="text-slate-500 text-xs font-bold mb-8 uppercase tracking-widest leading-relaxed">
                {grade.description}
              </p>
              
              <div className="space-y-4 pt-6 border-t border-white/5">
                {Object.entries(grade.metrics).map(([key, val]) => (
                  <div key={key} className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                    <span className="text-slate-500">{key}</span>
                    <span className="text-white">{val}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex items-center justify-between">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className={`w-3 h-3 ${idx === 0 ? 'text-blue-400 fill-blue-400' : 'text-slate-700'}`} />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-[9px] font-black text-slate-400 uppercase">Live Auth</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-[3rem] backdrop-blur-3xl shadow-2xl">
          {[
            { label: "JD Accuracy", val: "98.4%", icon: <ShieldCheck size={14}/> },
            { label: "Avg. Response", val: "< 12h", icon: <Activity size={14}/> },
            { label: "Candidate Sat.", val: "4.8/5", icon: <Star size={14}/> },
            { label: "Digital Footprint", val: "AI-V", icon: <Globe size={14}/> }
          ].map((stat, i) => (
            <div key={i} className={`text-center ${i !== 3 ? 'md:border-r border-white/5' : ''}`}>
              <div className="flex items-center justify-center gap-2 text-blue-500 mb-2">
                {stat.icon}
                <span className="text-2xl font-black text-white tracking-tighter">{stat.val}</span>
              </div>
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}