"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur rounded-3xl">
      <div className="max-w-8xl mx-auto px-4 rounded-3xl">
        <div className="flex h-16 items-center justify-between px-42">
          {/* Left: Brand/Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8">
              <iframe
                src="https://my.spline.design/cubeandballs-mdDq1f8PdRhOVMKjkcVNsal5/"
                width="32"
                height="32"
                frameBorder="0"
                title="Inventure Logo"
                className="rounded-lg"
              />
            </div>
            <Link
              href="/"
              className="text-slate-900 font-bold text-xl tracking-tight"
              aria-label="Inventure"
            >
              Inventure
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <Link href="#" className="hover:text-slate-900 transition-colors font-semibold text-sm">Home</Link>
            <Link 
              href="#about" 
              className="hover:text-slate-900 transition-colors font-semibold text-sm"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('about');
                if (element) {
                  element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className="hover:text-slate-900 transition-colors font-semibold text-sm"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              Contact
            </Link>
            <Link
              href="#coming-soon"
              className="rounded-full border border-slate-300 px-3 py-1.5 hover:border-slate-400 transition-colors text-sm font-medium"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('coming-soon');
                if (element) {
                  element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              Coming soon
            </Link>
          </nav>

          {/* Right: Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#login"
              className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-semibold"
            >
              Log in
            </Link>
            <Link
              href="#start-free"
              className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium"
            >
              Start for free
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 border border-slate-300"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" className="text-slate-700">
              <path strokeWidth="1.5" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3 text-slate-700">
            <Link href="#" onClick={() => setOpen(false)} className="font-semibold text-sm">Home</Link>
            <Link href="#about" onClick={() => setOpen(false)} className="font-semibold text-sm">About</Link>
            <Link href="#contact" onClick={() => setOpen(false)} className="font-semibold text-sm">Contact</Link>
            <Link href="#coming-soon" onClick={() => setOpen(false)} className="font-semibold text-sm">Coming soon</Link>
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <Link href="#login" onClick={() => setOpen(false)} className="block font-semibold text-sm">Log in</Link>
              <Link 
                href="#start-free" 
                onClick={() => setOpen(false)}
                className="block bg-slate-900 text-white px-4 py-2 rounded-lg text-center font-medium"
              >
                Start for free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
