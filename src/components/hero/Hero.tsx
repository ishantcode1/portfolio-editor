"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    setHasStarted(true);
    // Scroll to next section smoothly
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-transparent flex items-center justify-center">
      {/* Background Video (Optional - will be placeholder for now) */}
      <div className="absolute inset-0 opacity-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/dummy.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Main Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-12 md:mb-16"
        >
          EVERY FRAME
          <br />
          HAS A REASON.
        </motion.h1>

        {/* Editor Name & Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-wider mb-2">
            RISHU
          </p>
          <p className="text-sm md:text-base text-gray-400 tracking-widest uppercase font-mono">
            Video Editor
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleStart}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-mono text-sm tracking-widest uppercase font-bold overflow-hidden"
          data-cursor="play"
          data-cursor-text="START"
        >
          <Play className="w-4 h-4 fill-current" />
          <span>PRESS PLAY</span>

          {/* Hover Effect */}
          <motion.div
            className="absolute inset-0 bg-gray-200"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
            style={{ zIndex: -1 }}
          />
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}