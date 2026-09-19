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
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#07080A] select-none"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="h-2 w-2 rounded-full bg-[#FF6B00] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#FF6B00]">
              SYS.DEV // 2026
            </span>
          </div>
          <FlipFadeText
            words={["PIYUSH GUPTA", "ZERO-LATENCY", "ON-DEVICE AI"]}
            letterDuration={0.4}
            staggerDelay={0.04}
            className="min-h-0"
            textClassName="text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.2em] text-[#F4F4F5] font-hn"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroPreloader;
