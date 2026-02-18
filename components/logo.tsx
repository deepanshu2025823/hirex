'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Logo({ isSticky = false }: { isSticky?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-4 w-fit">
      
      <div className="relative">
        <div 
          className={`absolute -inset-1 bg-gradient-to-r rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500 
          ${isSticky ? 'from-blue-400 to-cyan-300' : 'from-blue-600 to-cyan-400'}`} 
        />
        
        <div className="relative w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:8px_8px]" />

          <motion.div
            initial={{ top: '-100%' }}
            animate={{ top: '100%' }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "linear",
              repeatDelay: 1 
            }}
            className="absolute left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent w-full z-0 pointer-events-none"
          />

          <Image 
            src="https://www.careerlabconsulting.com/favicon.ico"
            alt="CLC Logo"
            fill
            sizes="48px"
            className="object-contain p-2 relative z-10"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center h-12">
        <span className={`text-2xl font-black tracking-tighter uppercase italic leading-none transition-colors duration-300 drop-shadow-sm group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.25)] ${isSticky ? 'text-slate-900' : 'text-white'}`}>
          Hire
          <span className={`relative inline-block text-transparent bg-clip-text bg-gradient-to-r ${isSticky ? 'from-blue-600 to-cyan-500' : 'from-blue-400 to-cyan-300'}`}>
            X
            <span className="absolute inset-0 blur-md bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </span>
        </span>

        <div className="flex items-center gap-1.5 mt-1.5">
            <span className="relative hidden sm:flex h-1.5 w-1.5">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
</span>
            
            <span className={`hidden sm:block text-[10px] font-mono font-bold uppercase tracking-widest leading-none group-hover:text-blue-500 transition-colors ${isSticky ? 'text-slate-500' : 'text-slate-400'}`}>
              Your gateway to jobs and top talent
            </span>
        </div>
      </div>
    </Link>
  );
}