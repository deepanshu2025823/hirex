'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Features', href: '#features' },
  { name: 'Employers', href: '#employers' },
  { name: 'AI Test', href: '#test' },
  { name: 'Reports', href: '#reports' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-[100] px-4 sm:px-6 lg:px-8">
      <nav 
        className="max-w-7xl mx-auto bg-[#020617]/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl transition-all duration-300"
        aria-label="Main Navigation"
      >
        <div className="flex justify-between items-center h-16 px-6">
          
          <Link 
            href="/" 
            className="flex items-center gap-2 group"
            aria-label="HireX Home"
          >
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image 
                src="https://www.careerlabconsulting.com/favicon.ico"
                alt="CLC Logo"
                fill
                sizes="32px"
                priority
                className="object-contain"
              />
            </div>
            <span className="text-xl font-black tracking-tighter text-white group-hover:text-blue-400 transition-colors">
              HireX
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-[11px] font-black uppercase tracking-widest text-slate-300 hover:text-white">
              Log in
            </button>
            <button className="px-5 py-2 bg-blue-600 text-white text-[11px] font-black uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-blue-500 transition-all active:scale-95">
              Sign up
            </button>
            
            <button 
              className="md:hidden text-white p-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-6 text-center">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="h-px bg-white/10 w-full" />
                <button className="text-xs font-black uppercase tracking-widest text-white py-2">
                  Candidate Login
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}