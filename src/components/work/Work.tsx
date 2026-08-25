"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { useState, useRef, useEffect } from "react";

export function Work() {
  return (
    <section id="work" className="min-h-screen bg-transparent px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            THE CUT
          </h2>
          <p className="text-gray-400 font-mono text-sm tracking-wider">
            SELECTED WORK
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Auto-pause when scrolling out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        // Pause video when scrolled out of view
        if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      },
      { threshold: 0.3 } // Pause when less than 30% visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Only play if card is in viewport
    if (videoRef.current && isVisible) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative cursor-pointer"
    >
      {/* STRICT 16:9 Video Preview */}
      <div className="relative bg-gray-900 overflow-hidden mb-6 aspect-video">
        <video
          ref={videoRef}
          poster={project.posterUrl}
          loop
          playsInline
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
        >
          <source src={project.videoPreviewUrl} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

        {/* Project Number */}
        <div className="absolute top-4 right-4 font-mono text-xs tracking-widest text-white/70 pointer-events-none">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-gray-300 transition-colors">
            {project.title}
          </h3>
          <span className="font-mono text-xs text-gray-500 tracking-wider mt-2 shrink-0">
            {project.year}
          </span>
        </div>

        <div className="flex flex-wrap gap-3 text-xs font-mono tracking-wider text-gray-400">
          <span>{project.category}</span>
          {project.client && (
            <>
              <span>•</span>
              <span>{project.client}</span>
            </>
          )}
          {project.role && (
            <>
              <span>•</span>
              <span>{project.role}</span>
            </>
          )}
        </div>

        <p className="text-sm text-gray-400 leading-relaxed mt-3">
          {project.description}
        </p>
      </div>

      {/* Hover Indicator */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: isHovered ? "100%" : 0 }}
        className="h-[1px] bg-white mt-4"
      />
    </motion.div>
  );
}