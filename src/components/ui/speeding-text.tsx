"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export interface SpeedingTextProps {
  children?: React.ReactNode;
  text?: string;
  value?: number;
  from?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number; // duration in seconds (default: 0.85)
  travel?: number; // travel distance in px (default: 80)
  direction?: "left" | "right";
  blurStrength?: number; // max blur in px (default: 10)
  startOnView?: boolean;
  once?: boolean; // whether to animate only once or restart on every view (default: false)
  amount?: number | "some" | "all"; // trigger threshold (default: "some")
  loop?: boolean;
  loopDelay?: number;
  className?: string;
  italic?: boolean;
  replayOnHover?: boolean;
}

export const SpeedingText: React.FC<SpeedingTextProps> = ({
  children,
  text,
  value,
  from = 0,
  decimals,
  prefix = "",
  suffix = "",
  duration = 0.85,
  travel = 80,
  direction = "left",
  blurStrength = 10,
  startOnView = true,
  once = false,
  amount = "some",
  loop = false,
  loopDelay = 3000,
  className = "",
  italic = false,
  replayOnHover = true,
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once, amount });
  const [animationKey, setAnimationKey] = useState(0);

  const targetIsDecimal = value !== undefined && !Number.isInteger(value);

  const formatVal = (v: number) => {
    if (decimals !== undefined) {
      return v.toFixed(decimals);
    }
    if (targetIsDecimal) {
      return parseFloat(v.toFixed(1));
    }
    return Math.round(v);
  };

  const [displayValue, setDisplayValue] = useState<string | number | null>(
    value !== undefined ? formatVal(from) : null
  );

  const initialX = direction === "left" ? -travel : travel;
  const initialSkew = direction === "left" ? -22 : 22;

  const shouldAnimate = startOnView ? isInView : true;

  useEffect(() => {
    if (isInView) {
      setAnimationKey((prev) => prev + 1);
    } else if (!once) {
      setDisplayValue(value !== undefined ? formatVal(from) : null);
    }
  }, [isInView, once, from, value, decimals]);

  useEffect(() => {
    if (!shouldAnimate || value === undefined) return;

    let startTimestamp: number | null = null;
    const animDurationMs = duration * 1000;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / animDurationMs, 1);

      const easeOut = 1 - Math.pow(1 - progress, 4);
      const current = from + (value - from) * easeOut;

      setDisplayValue(formatVal(current));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(formatVal(value));
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [shouldAnimate, value, from, duration, decimals, animationKey]);

  useEffect(() => {
    if (!loop || !isInView) return;

    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, duration * 1000 + loopDelay);

    return () => clearInterval(interval);
  }, [loop, isInView, duration, loopDelay]);

  const handleHover = () => {
    if (replayOnHover) {
      setAnimationKey((prev) => prev + 1);
    }
  };

  const displayText =
    value !== undefined
      ? `${prefix}${displayValue !== null ? displayValue : formatVal(value)}${suffix}`
      : children ?? text;

  return (
    <span
      ref={containerRef}
      onMouseEnter={handleHover}
      className={`inline-block overflow-visible relative will-change-transform cursor-pointer select-none ${className}`}
      style={{
        fontStyle: italic ? "italic" : "normal",
      }}
    >
      <motion.span
        key={animationKey}
        initial={
          shouldAnimate
            ? {
                opacity: 0,
                x: initialX,
                scaleX: 2.2,
                scaleY: 0.9,
                skewX: initialSkew,
                filter: `blur(${blurStrength}px)`,
              }
            : false
        }
        animate={
          shouldAnimate
            ? {
                opacity: 1,
                x: 0,
                scaleX: 1,
                scaleY: 1,
                skewX: 0,
                filter: "blur(0px)",
              }
            : {}
        }
        transition={{
          duration: duration,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="inline-block transform-gpu origin-left"
      >
        {displayText}
      </motion.span>
    </span>
  );
};

export default SpeedingText;
