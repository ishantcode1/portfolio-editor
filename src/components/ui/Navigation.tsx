"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "WORK", href: "#work" },
    { label: "RHYTHM", href: "#rhythm" },
    { label: "BEFORE/AFTER", href: "#before-after" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 flex justify-between items-center px-6 md:px-12 py-8 pointer-events-none">
        {/* Editor Logo - Left */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-sm tracking-widest pointer-events-auto select-none font-bold"
        >
          [ED. CUT]
        </motion.a>

        {/* Menu Toggle - Right */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-auto p-2 bg-transparent text-white hover:text-gray-300 transition-colors z-50 md:hidden"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>

        {/* Desktop Editorial Navigation inline */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex gap-8 pointer-events-auto"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-mono text-[10px] tracking-widest text-gray-400 hover:text-white transition-colors relative group py-2"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full" />
            </a>
          ))}
        </motion.nav>
      </header>

      {/* Mobile Dynamic Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 bg-black z-30 flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-6">
              {links.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.4 }}
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-mono text-3xl font-bold tracking-tighter text-white hover:text-gray-400 transition-all"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            {/* Bottom Credits on Mobile Menu */}
            <div className="absolute bottom-12 left-8 text-gray-500 font-mono text-[10px] tracking-widest">
              &copy; {new Date().getFullYear()} Rishu. All Rights Reserved.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
