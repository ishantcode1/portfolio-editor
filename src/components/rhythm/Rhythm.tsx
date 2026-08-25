"use client";

import { motion } from "framer-motion";
import { Film, Activity, Palette, AudioLines } from "lucide-react";

const processSteps = [
  { id: "narrative", title: "NARRATIVE", desc: "Finding the story hidden in the dailies.", icon: Film, color: "from-blue-500/20 to-cyan-500/20" },
  { id: "rhythm", title: "RHYTHM", desc: "Cutting strictly to the heartbeat of the track.", icon: Activity, color: "from-purple-500/20 to-pink-500/20" },
  { id: "color", title: "COLOR", desc: "Grading that establishes immediate mood.", icon: Palette, color: "from-orange-500/20 to-red-500/20" },
  { id: "sound", title: "SOUND", desc: "Layering audio that makes the timeline feel alive.", icon: AudioLines, color: "from-green-500/20 to-emerald-500/20" },
];

export function Rhythm() {
  return (
    <section id="rhythm" className="relative min-h-screen px-6 md:px-12 py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center select-none"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
            THE CRAFT
          </h2>
          <p className="text-gray-400 font-mono text-sm tracking-wider uppercase">
            Elements of a cinematic edit
          </p>
        </motion.div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-32">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-transparent border border-gray-600/30 p-8 overflow-hidden hover:border-white/50 transition-colors duration-500"
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-screen pointer-events-none`} />

                <div className="relative z-10 flex flex-col h-full justify-between min-h-[160px]">
                  <div className="flex justify-between items-start">
                    <Icon className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-500" />
                    <p className="font-mono text-[10px] tracking-widest text-gray-500 uppercase">
                      0{index + 1}
                    </p>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-2xl font-bold tracking-tight mb-2 text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 font-mono text-xs tracking-wide">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}