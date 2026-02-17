'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Award, 
  Activity, 
  Code2, 
  Globe, 
  ShieldCheck, 
  Zap,
  Cpu,
  Fingerprint
} from 'lucide-react';

const SKILLS = [
  { name: "SQL", score: 85, color: "from-blue-600 to-cyan-500" },
  { name: "Next.js", score: 92, color: "from-blue-400 to-indigo-500" },
  { name: "Node.js", score: 78, color: "from-indigo-600 to-purple-500" },
];

const ReportCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; r: number; opacity: number; speed: number }[] = [];

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || 800;
      particles = Array.from({ length: 100 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5,
        opacity: Math.random(),
        speed: 0.1 + Math.random() * 0.3
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.y -= p.speed;
        if (p.y < 0) p.y = canvas.height;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 0.2})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    setup();
    draw();
    window.addEventListener('resize', setup);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setup);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

export default function CandidatePreview() {
  return (
    <section id="reports" className="relative py-32 bg-[#020617] overflow-hidden border-t border-white/5">
      <ReportCanvas />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-blue-500/5 border border-blue-500/20 mb-6 backdrop-blur-xl"
          >
            <Activity className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em]">Autonomous Dossier Generation</span>
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase">
            The Living <br /> <span className="text-blue-500 italic">360° Profile.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 bg-white/[0.02] rounded-[3rem] p-8 border border-white/5 backdrop-blur-3xl flex flex-col justify-between group hover:border-blue-500/30 transition-all duration-500"
          >
            <div className="relative">
              <div className="relative w-28 h-28 mb-8">
                <div className="absolute inset-0 bg-blue-600 rounded-3xl blur-2xl opacity-20 animate-pulse" />
                <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] flex items-center justify-center border border-white/10 shadow-2xl">
                  <Fingerprint size={48} className="text-white opacity-80" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 p-2 rounded-full border-4 border-[#020617]">
                  <ShieldCheck size={14} className="text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-black text-white tracking-tight uppercase italic">Altaf Raja</h3>
              <p className="text-slate-500 font-bold mb-6 uppercase tracking-widest text-xs">Principal Neural Engineer</p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                <div className="px-3 py-1 bg-white/5 border border-white/10 text-white text-[9px] font-black rounded-full uppercase tracking-widest">Rank #04</div>
                <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] font-black rounded-full uppercase tracking-widest">Verified DNA</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-black/40 rounded-2xl border border-white/5 group-hover:bg-blue-500/5 transition-all">
                <div className="flex items-center gap-3">
                  <Github size={18} className="text-white" />
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">GitHub Sync</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
              </div>
              <div className="flex items-center justify-between p-4 bg-black/40 rounded-2xl border border-white/5 group-hover:bg-blue-500/5 transition-all">
                <div className="flex items-center gap-3">
                  <Linkedin size={18} className="text-blue-400" />
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">LinkedIn Neural</span>
                </div>
                <span className="text-[10px] font-black text-blue-500 uppercase">Synced</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-5 bg-gradient-to-br from-white/[0.05] to-transparent rounded-[3rem] p-10 border border-white/10 relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-center mb-12">
                <div>
                  <h4 className="text-xl font-black text-white tracking-tight uppercase italic">Autonomous Matrix</h4>
                  <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] mt-1">Live AI Benchmarking</p>
                </div>
                <Zap size={24} className="text-yellow-400 fill-yellow-400 animate-pulse" />
              </div>

              <div className="space-y-10 flex-1">
                {SKILLS.map((skill) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between mb-3">
                      <span className="font-black tracking-[0.2em] text-[10px] uppercase text-slate-500">{skill.name}</span>
                      <span className="font-black text-white text-sm tracking-tighter">{skill.score}<span className="text-blue-500 text-[10px] ml-1">v.2.5</span></span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.score}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-blue-500/5 rounded-3xl border border-blue-500/10 backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-400/20 animate-[scan_3s_linear_infinite]" />
                <p className="text-xs text-slate-300 leading-relaxed font-medium italic">
                  "Candidate metrics indicate <span className="text-white font-bold">Elite Proficiency</span> in system architecture. Point-to-point sync confirmed via Manee Pro 2.5."
                </p>
                <div className="mt-6 flex items-center justify-between text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
                  <span className="flex items-center gap-2"><Cpu size={12} className="text-blue-500"/> Agent v.04</span>
                  <span className="text-blue-400">Node Secure</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-3 grid grid-cols-1 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-blue-600 rounded-[3rem] p-10 text-white flex flex-col justify-center items-center text-center shadow-[0_0_50px_rgba(37,99,235,0.3)] group hover:scale-[1.02] transition-transform"
            >
              <Award size={48} className="mb-6 text-blue-200 group-hover:rotate-12 transition-transform" />
              <div className="text-7xl font-black tracking-tighter mb-2 italic">A+</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80">Autonomous Tier</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/[0.02] rounded-[3rem] p-8 border border-white/5 flex flex-col justify-between hover:bg-white/[0.05] transition-all group"
            >
               <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-blue-500/30 transition-colors shadow-2xl">
                    <Globe size={24} className="text-blue-400 animate-spin-slow" />
                  </div>
                  <div>
                    <span className="block font-black text-white text-sm tracking-tight uppercase">Live Sync</span>
                    <span className="block text-[10px] font-bold text-green-500 uppercase tracking-widest animate-pulse">Online</span>
                  </div>
               </div>
               <p className="text-[11px] text-slate-400 font-bold leading-relaxed mt-6 uppercase tracking-wider">
                  Verified <span className="text-white underline decoration-blue-500">5 Neural Repos</span> with 100% commit integrity via GitHub API.
               </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}