'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Code, 
  Terminal, 
  Timer, 
  ShieldCheck, 
  ChevronRight,
  BrainCircuit,
  Bot
} from 'lucide-react';

const SKILL_TESTS = [
  { name: "SQL Mastery", questions: 10, time: "15m", icon: <Database size={18} />, color: "text-blue-400" },
  { name: "Next.js Architecture", questions: 10, time: "20m", icon: <Terminal size={18} />, color: "text-indigo-400" },
  { name: "AI Prompt Engineering", questions: 10, time: "12m", icon: <Bot size={18} />, color: "text-cyan-400" },
];

export default function AssessmentHub() {
  return (
    <section id="test" className="relative py-32 bg-[#020617] overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
            >
              <BrainCircuit size={14} className="animate-pulse" />
              Skill Verification Protocol
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase italic mb-8">
              Validate Your <br /> <span className="text-blue-500">Neural DNA.</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed mb-12">
              Every skill added to your profile triggers a mandatory 10-question AI-orchestrated challenge. 
              Cheat-proof, autonomous, and instantly synced to your global 360° report.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest text-left">
                    Anti-Cheat <br /> Monitoring Active
                  </span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-400">
                    <Timer size={20} />
                  </div>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest text-left">
                    Real-time <br /> Scoring Node
                  </span>
               </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-10 shadow-2xl relative"
          >
            <div className="flex justify-between items-center mb-8 pb-6 border-b border-white/5">
              <div>
                <h4 className="text-white font-black uppercase tracking-widest italic text-lg">Test Terminal</h4>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Status: Ready for Sync</p>
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
            </div>

            <div className="space-y-4">
              {SKILL_TESTS.map((test, idx) => (
                <div 
                  key={idx} 
                  className="group flex items-center justify-between p-5 bg-black/40 rounded-2xl border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${test.color} group-hover:scale-110 transition-transform`}>
                      {test.icon}
                    </div>
                    <div>
                      <h5 className="text-sm font-black text-white uppercase tracking-tight">{test.name}</h5>
                      <div className="flex gap-3 mt-1">
                        <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">{test.questions} Questions</span>
                        <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">{test.time} Duration</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-slate-700 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>

            <button className="w-full mt-8 py-5 bg-blue-600 text-white font-black uppercase text-xs tracking-[0.3em] rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:bg-blue-500 transition-all active:scale-95">
              Start Evaluation Hub
            </button>

            <div className="mt-6 text-center">
              <span className="text-[8px] font-black text-slate-600 uppercase tracking-[0.2em]">
                Verified by Manee Pro 2.5 Flash Engine Node 04
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}