"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="min-h-screen bg-transparent px-6 md:px-12 py-24 md:py-32 flex items-center">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Main Statement */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
              I don&apos;t just cut footage.
              <br />
              <span className="text-gray-500">I decide what deserves to stay.</span>
            </h2>
          </div>

          {/* Divider */}
          <div className="w-24 h-[2px] bg-white" />

          {/* Philosophy */}
          <div className="space-y-8 text-gray-300 text-base md:text-xl leading-relaxed max-w-3xl font-medium">
            <p>
              Editing isn&apos;t just assembling clips. It&apos;s dictating rhythm, building tension, and knowing exactly when to let a moment breathe.
            </p>
            <p>
              I specialize in <span className="text-white font-bold">high-intensity visual storytelling.</span> I take raw, unstructured footage and craft it into content that commands attention.
            </p>
            <p className="text-gray-400 text-sm md:text-lg">
              Whether it&apos;s aggressive fitness reels, immersive event recaps, or surgical typography breakdowns — if it needs to hit hard, I&apos;m cutting it.
            </p>
          </div>

          {/* Skills/Tools */}
          <div className="pt-12">
            <p className="font-mono text-xs tracking-widest text-gray-500 mb-6 uppercase">
              The Suite
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono tracking-widest uppercase">
              {["Premiere Pro", "CapCut", "Canva"].map((tool) => (
                <span
                  key={tool}
                  className="px-5 py-3 border border-gray-600/50 text-gray-400 hover:text-white hover:border-white transition-all cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
