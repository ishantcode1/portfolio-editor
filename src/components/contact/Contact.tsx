"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="relative bg-transparent pt-32 pb-10 flex flex-col justify-end min-h-[60vh] border-t border-white/5 mx-6 md:mx-12">
      <div className="max-w-[90rem] mx-auto w-full relative z-10">

        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-24">

          {/* 1. BRAND COLUMN */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-white font-bold tracking-[0.2em] uppercase text-sm">
              [ED. CUT]
            </h3>
            <p className="text-gray-200 font-mono text-xs tracking-wide leading-relaxed max-w-[200px] font-medium">
              Cinematic edits that turn moments into emotion.
            </p>
            <div className="pt-4">
              <span className="font-mono text-[10px] text-gray-400 font-bold tracking-widest uppercase">
                Rishu
              </span>
            </div>
          </div>

          {/* 2. NAVIGATION COLUMN */}
          <div className="lg:col-span-1 space-y-4">
            <h4 className="font-mono text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 font-mono text-xs tracking-wide text-gray-300 font-medium capitalize">
              <li>
                <Link href="#work" className="hover:text-white transition-colors duration-300">Work</Link>
              </li>
              <li>
                <Link href="#rhythm" className="hover:text-white transition-colors duration-300">Rhythm</Link>
              </li>
              <li>
                <Link href="#before-after" className="hover:text-white transition-colors duration-300">Before / After</Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors duration-300">About</Link>
              </li>
              <li>
                <Link href="#contact" className="text-white">Contact</Link>
              </li>
            </ul>
          </div>

          {/* 3. SERVICES COLUMN */}
          <div className="lg:col-span-1 space-y-4">
            <h4 className="font-mono text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-3 font-mono text-xs tracking-wide text-gray-300 font-medium">
              <li className="hover:text-white transition-colors duration-300 cursor-default">Reels / Short Videos</li>
              <li className="hover:text-white transition-colors duration-300 cursor-default">Event Recaps</li>
              <li className="hover:text-white transition-colors duration-300 cursor-default">YouTube Videos (Shorts)</li>
            </ul>
          </div>

          {/* 4. CONNECT COLUMN */}
          <div className="lg:col-span-1 space-y-4">
            <h4 className="font-mono text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase mb-6">
              Connect
            </h4>
            <ul className="space-y-3 font-mono text-xs tracking-wide text-gray-300 font-medium uppercase">
              <li>
                <a
                  href="https://instagram.com/pickle.pickly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors duration-300 group"
                >
                  {/* Custom Minimal Instagram Icon */}
                  <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></line></svg>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:rishitabusiness06@gmail.com"
                  className="flex items-center gap-3 hover:text-white transition-colors duration-300 group"
                >
                  <Mail className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* 5. LET'S WORK COLUMN */}
          <div className="lg:col-span-1 space-y-6">
            <h4 className="font-mono text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase mb-6">
              Let&apos;s Work
            </h4>
            <div className="space-y-1">
              <p className="text-gray-200 font-mono text-xs tracking-wide font-medium">Have a project in mind?</p>
              <p className="text-gray-300 font-mono text-xs tracking-wide font-medium">Let&apos;s create something worth watching.</p>
            </div>

            <a
              href="mailto:rishitabusiness06@gmail.com"
              className="inline-flex items-center justify-between w-full max-w-[200px] mt-4 px-4 py-3 border border-gray-500 rounded-sm font-mono text-[10px] tracking-[0.2em] uppercase text-gray-200 font-bold hover:border-white hover:bg-white hover:text-black transition-all duration-300 group"
            >
              Get In Touch
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform font-bold" />
            </a>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-center md:text-left">

          {/* Left */}
          <div className="font-mono text-[9px] text-gray-400 font-bold tracking-widest uppercase flex-1">
            &copy; {currentYear} Rishu. All Rights Reserved.
          </div>

          {/* Center */}
          <div className="font-mono text-[9px] text-gray-200 tracking-[0.3em] font-bold hidden md:block flex-1 text-center">
            CREATE &bull; CUT &bull; FEEL
          </div>

          {/* Right */}
          <div className="font-mono text-[9px] text-gray-400 font-bold tracking-widest uppercase flex-1 md:text-right">
            BASED IN DEHRADUN, INDIA
          </div>

        </div>

      </div>
    </section>
  );
}
