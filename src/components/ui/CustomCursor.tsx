"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "play" | "drag" | "view" | "scrub">("default");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverParent = target.closest("[data-cursor]") as HTMLElement;

      if (hoverParent) {
        const type = hoverParent.getAttribute("data-cursor") as any;
        const text = hoverParent.getAttribute("data-cursor-text") || "";
        setCursorType(type || "view");
        setCursorText(text);
      } else {
        setCursorType("default");
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  const variants = {
    default: {
      width: 8,
      height: 8,
      backgroundColor: "rgb(255, 255, 255)",
      borderRadius: "50%",
    },
    play: {
      width: 80,
      height: 80,
      backgroundColor: "rgb(255, 255, 255)",
      color: "rgb(0, 0, 0)",
      borderRadius: "50%",
    },
    drag: {
      width: 70,
      height: 70,
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      color: "rgb(0, 0, 0)",
      borderRadius: "50%",
    },
    view: {
      width: 80,
      height: 80,
      backgroundColor: "rgb(255, 255, 255)",
      color: "rgb(0, 0, 0)",
      borderRadius: "50%",
    },
    scrub: {
      width: 90,
      height: 90,
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      color: "rgb(255, 255, 255)",
      border: "1px solid rgba(255, 255, 255, 0.4)",
      borderRadius: "50%",
      backdropFilter: "blur(4px)",
    }
  };

  return (
    <motion.div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        pointerEvents: "none",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      animate={cursorType}
      variants={variants}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className="hidden md:flex overflow-hidden font-mono text-[9px] font-bold tracking-widest text-center uppercase"
    >
      {cursorType !== "default" && (
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.15 }}
        >
          {cursorText || cursorType}
        </motion.span>
      )}
    </motion.div>
  );
}
