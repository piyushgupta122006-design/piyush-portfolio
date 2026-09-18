"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlipFadeText from "./flip-fade-text";

export interface IntroPreloaderProps {
  onComplete?: () => void;
}

export const IntroPreloader: React.FC<IntroPreloaderProps> = ({ onComplete }) => {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Ensure window starts at the top
    window.scrollTo(0, 0);

    // Lock scroll during preloader
    document.body.style.overflow = "hidden";
    if ((window as any).__lenis) {
      (window as any).__lenis.stop();
    }

    // Display for 2 seconds then fade out
    const timer = setTimeout(() => {
      setIsDone(true);
      document.body.style.overflow = "";
      if ((window as any).__lenis) {
        (window as any).__lenis.start();
        (window as any).__lenis.scrollTo(0, { immediate: true });
      }
      onComplete?.();
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
      if ((window as any).__lenis) {
        (window as any).__lenis.start();
      }
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: "blur(12px)",
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black select-none"
        >
          {/* Only text LOADING in the center using FlipFadeText */}
          <FlipFadeText
            words={["LOADING"]}
            letterDuration={0.5}
            staggerDelay={0.06}
            className="min-h-0"
            textClassName="text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.25em] text-[#FAFDEE] font-hn"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroPreloader;
