"use client";

import React from "react";
import { motion } from "framer-motion";
import SpeedingText from "./speeding-text";

export interface StatsBentoProps {
  primaryTag?: string;
  primaryStatValue?: number;
  primaryStatSuffix?: string;
  primaryDescription?: string;

  growthTag?: string;
  growthStatPrefix?: string;
  growthStatValue?: number;
  growthStatSuffix?: string;
  growthBars?: number[];

  metricBValue?: number;
  metricBSuffix?: string;
  metricBLabel?: string;

  metricCValue?: number;
  metricCSuffix?: string;
  metricCRating?: string;
  metricCLabel?: string;

  className?: string;
}

export const StatsBento: React.FC<StatsBentoProps> = ({
  primaryTag = "STUDENT IMPACT",
  primaryStatValue = 107,
  primaryStatSuffix = "+",
  primaryDescription = "Active Computer Science undergraduates at BNN College adopting BNN CS Study Hub for 4 semesters of syllabus materials, PYQs, and verified notes.",
  growthTag = "WASM & AI POWER TOOLS",
  growthStatPrefix = "+",
  growthStatValue = 17,
  growthStatSuffix = " Tools",
  growthBars = [15, 22, 32, 42, 54, 68, 80, 92, 100, 100, 88],
  metricBValue = 100,
  metricBSuffix = "%",
  metricBLabel = "CLIENT PRIVACY (WASM)",
  metricCValue = 5.0,
  metricCSuffix = " / 5.0",
  metricCRating = "5.0 / 5.0",
  metricCLabel = "Student & Peer Reviews",
  className = "",
}) => {
  return (
    <section
      className={`min-h-screen bg-black text-white font-sans flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-16 selection:bg-white selection:text-black ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-4 max-w-6xl mx-auto w-full">
        {/* Primary Stat Card (Left, Light Theme Card) */}
        <div className="md:col-span-3 md:row-span-2 bg-[#EBEBEB] text-[#111111] rounded-[32px] p-8 sm:p-10 lg:p-12 flex flex-col justify-between overflow-hidden relative shadow-2xl transition-transform duration-300 hover:scale-[1.01]">
          {/* Subtle diagonal hatched lines pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.14]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #000000 0px, #000000 1.2px, transparent 1.2px, transparent 12px)",
              maskImage:
                "radial-gradient(ellipse 75% 65% at 100% 0%, #000 30%, transparent 85%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 75% 65% at 100% 0%, #000 30%, transparent 85%)",
            }}
          />

          {/* Top content */}
          <div className="relative z-10">
            <span className="inline-block px-3.5 py-1 bg-[#D8D8DC] rounded-full text-[11px] font-sans font-medium text-[#555558] uppercase tracking-[0.12em] mb-8 select-none font-mono">
              {primaryTag}
            </span>

            <div className="text-6xl sm:text-7xl lg:text-[92px] font-normal tracking-tight text-[#111111] leading-none">
              <SpeedingText
                value={primaryStatValue}
                suffix={primaryStatSuffix}
                duration={0.9}
                travel={90}
                blurStrength={12}
                direction="left"
              />
            </div>
          </div>

          {/* Bottom description */}
          <p className="text-[#5A5A60] text-sm sm:text-base lg:text-[17px] max-w-sm leading-relaxed font-normal relative z-10 mt-8">
            {primaryDescription}
          </p>
        </div>

        {/* Secondary Stat Card: Growth (Top Right, Dark Slate Card) */}
        <div className="md:col-span-3 bg-[#1C1C1E] rounded-[28px] p-6 sm:p-8 flex items-center justify-between border border-[#2C2C2E]/40 shadow-lg transition-transform duration-300 hover:scale-[1.01]">
          <div>
            <p className="text-[11px] sm:text-xs font-mono font-medium uppercase tracking-[0.16em] text-[#8E8E93] mb-1.5 select-none">
              {growthTag}
            </p>
            <div className="text-3xl sm:text-4xl lg:text-5xl text-white font-medium tracking-tight">
              <SpeedingText
                value={growthStatValue}
                prefix={growthStatPrefix}
                suffix={growthStatSuffix}
                duration={0.85}
                travel={70}
                blurStrength={10}
                direction="left"
              />
            </div>
          </div>

          {/* Visualizer Bars */}
          <div className="flex gap-1.5 sm:gap-2 items-end h-10 sm:h-12 px-2">
            {growthBars.map((heightPercent, index) => (
              <motion.div
                key={index}
                initial={{ scaleY: 0.15, opacity: 0.3 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                viewport={{ once: false, amount: "some" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.035,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-1.5 sm:w-2 bg-white rounded-full origin-bottom transition-transform duration-300 hover:scale-y-110"
                style={{
                  height: `${Math.max(12, Math.min(heightPercent, 100))}%`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Tertiary Stat Card B: Privacy (Bottom Middle, Dark Slate Card) */}
        <div className="md:col-span-1 bg-[#1C1C1E] rounded-[28px] p-6 sm:p-7 border border-[#2C2C2E]/40 flex flex-col justify-center items-center text-center shadow-lg transition-transform duration-300 hover:scale-[1.01]">
          <div className="text-3xl sm:text-4xl text-white font-semibold tracking-tight">
            <SpeedingText
              value={metricBValue}
              suffix={metricBSuffix}
              duration={0.8}
              travel={50}
              blurStrength={8}
            />
          </div>
          <p className="text-[11px] sm:text-xs font-mono font-medium uppercase tracking-[0.16em] text-[#8E8E93] mt-1.5 select-none">
            {metricBLabel}
          </p>
        </div>

        {/* Tertiary Stat Card C: Reviews / Rating (Bottom Right, Dark Slate Card) */}
        <div className="md:col-span-2 bg-[#1C1C1E] rounded-[28px] p-6 sm:p-7 border border-[#2C2C2E]/40 flex items-center gap-4 sm:gap-5 shadow-lg transition-transform duration-300 hover:scale-[1.01]">
          <div className="size-11 sm:size-12 rounded-full bg-black flex items-center justify-center shrink-0 border border-[#2C2C2E] shadow-inner text-white select-none">
            <span className="text-base sm:text-lg leading-none">★</span>
          </div>
          <div>
            <div className="text-lg sm:text-xl font-semibold text-white tracking-tight leading-none">
              <SpeedingText
                value={metricCValue}
                decimals={1}
                suffix={metricCSuffix}
                text={metricCRating}
                duration={0.8}
                travel={60}
                blurStrength={9}
              />
            </div>
            <p className="text-xs sm:text-sm text-[#8E8E93] font-sans mt-1.5 select-none">
              {metricCLabel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBento;
