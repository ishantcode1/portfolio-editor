"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track video aspect ratio to adapt the container automatically
  const [isVertical, setIsVertical] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", () => setIsDragging(false));
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", () => setIsDragging(false));
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", () => setIsDragging(false));
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", () => setIsDragging(false));
    };
  }, [isDragging]);

  const handleVideoLoad = () => {
    if (videoRef.current) {
      const { videoWidth, videoHeight } = videoRef.current;
      // If height is greater than width, it's a vertical/reel video
      setIsVertical(videoHeight > videoWidth);
    }
  };

  return (
    <section
      id="before-after"
      className="min-h-[80vh] flex flex-col justify-center bg-transparent px-6 md:px-12 py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-white">
              RAW VS FINAL
            </h2>
            <p className="text-gray-400 font-mono text-sm tracking-wider uppercase">
              The difference is the edit.
            </p>
          </div>

          <div className="md:text-right hidden sm:block">
             <p className="text-gray-500 font-mono text-[10px] tracking-[0.2em] uppercase max-w-[250px] ml-auto">
               Drag the slider to reveal the grade, the crop, and the intention.
             </p>
          </div>
        </motion.div>

        {/* Comparison Container */}
        {/* We center the container and restrict max-height so vertical reels fit on screen nicely */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`relative w-full mx-auto bg-gray-900 overflow-hidden border border-white/10 cursor-col-resize select-none shadow-2xl ${
            isVertical ? 'max-w-[400px] aspect-[9/16]' : 'aspect-video'
          }`}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          data-cursor="drag"
          data-cursor-text="DRAG"
        >
          {/* FINAL (Background) */}
          <div className="absolute inset-0">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              onLoadedMetadata={handleVideoLoad}
              className="w-full h-full object-cover"
              poster="/images/before-after-final-poster.jpg"
            >
              <source src="/videos/final.mp4" type="video/mp4" />
            </video>

            {/* FINAL LABEL - Fades out as slider moves right, so it doesn't clip awkwardly or double-up */}
            <div
              className="absolute top-6 right-6 font-mono text-[10px] uppercase font-bold tracking-[0.2em] bg-black/50 backdrop-blur-md text-white border border-white/20 px-4 py-2 z-10 pointer-events-none transition-opacity duration-150"
              style={{ opacity: sliderPosition > 85 ? 0 : 1 }}
            >
              FINAL
            </div>
          </div>

          {/* RAW (Clipped) */}
          <div
            className="absolute inset-0 overflow-hidden z-20"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="/images/before-after-raw-poster.jpg"
            >
              <source src="/videos/raw.mp4" type="video/mp4" />
            </video>

            {/* RAW LABEL - inside the clipped div so it perfectly wipes away when sliding left */}
            <div className="absolute top-6 left-6 font-mono text-[10px] uppercase font-bold tracking-[0.2em] bg-white text-black px-4 py-2 pointer-events-none">
              RAW
            </div>
          </div>

          {/* Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-white z-30 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Handle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-12 bg-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110">
              <div className="flex gap-[3px]">
                <div className="w-[1px] h-4 bg-black/40" />
                <div className="w-[1px] h-4 bg-black/80" />
                <div className="w-[1px] h-4 bg-black/40" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Description Fallback */}
        <div className="mt-8 text-center sm:hidden">
            <p className="text-gray-500 font-mono text-[10px] tracking-[0.2em] uppercase">
              Drag to reveal the grade &amp; crop.
            </p>
        </div>

      </div>
    </section>
  );
}