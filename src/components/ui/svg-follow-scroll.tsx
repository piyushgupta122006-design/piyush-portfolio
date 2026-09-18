"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { ArrowUpRight, Github, Mail, MapPin } from "lucide-react";
import GlyphPortal from "./glyph-portal";

export interface SvgFollowScrollProps {
  headingLine1?: string;
  headingLine2?: string;
  headingLine3?: string;
  subheading?: string;
  footerTitle?: string;
  email?: string;
  githubUrl?: string;
  location?: string;
  className?: string;
}

const LinePath = ({
  className,
  scrollYProgress,
}: {
  className: string;
  scrollYProgress: any;
}) => {
  const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  return (
    <svg
      width="1278"
      height="2319"
      viewBox="0 0 1278 2319"
      fill="none"
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        d="M876.605 394.131C788.982 335.917 696.198 358.139 691.836 416.303C685.453 501.424 853.722 498.43 941.95 409.714C1016.1 335.156 1008.64 186.907 906.167 142.846C807.014 100.212 712.699 198.494 789.049 245.127C889.053 306.207 986.062 116.979 840.548 43.3233C743.932 -5.58141 678.027 57.1682 672.279 112.188C666.53 167.208 712.538 172.943 736.353 163.088C760.167 153.234 764.14 120.924 746.651 93.3868C717.461 47.4252 638.894 77.8642 601.018 116.979C568.164 150.908 557 201.079 576.467 246.924C593.342 286.664 630.24 310.55 671.68 302.614C756.114 286.446 729.747 206.546 681.86 186.442C630.54 164.898 492 209.318 495.026 287.644C496.837 334.494 518.402 366.466 582.455 367.287C680.013 368.538 771.538 299.456 898.634 292.434C1007.02 286.446 1192.67 309.384 1242.36 382.258C1266.99 418.39 1273.65 443.108 1247.75 474.477C1217.32 511.33 1149.4 511.259 1096.84 466.093C1044.29 420.928 1029.14 380.576 1033.97 324.172C1038.31 273.428 1069.55 228.986 1117.2 216.384C1152.2 207.128 1188.29 213.629 1194.45 245.127C1201.49 281.062 1132.22 280.104 1100.44 272.673C1065.32 264.464 1044.22 234.837 1032.77 201.413C1019.29 162.061 1029.71 131.126 1056.44 100.965C1086.19 67.4032 1143.96 54.5526 1175.78 86.1513C1207.02 117.17 1186.81 143.379 1156.22 166.691C1112.57 199.959 1052.57 186.238 999.784 155.164C957.312 130.164 899.171 63.7054 931.284 26.3214C952.068 2.12513 996.288 3.87363 1007.22 43.58C1018.15 83.2749 1003.56 122.644 975.969 163.376C948.377 204.107 907.272 255.122 913.558 321.045C919.727 385.734 990.968 497.068 1063.84 503.35C1111.46 507.456 1166.79 511.984 1175.68 464.527C1191.52 379.956 1101.26 334.985 1030.29 377.017C971.109 412.064 956.297 483.647 953.797 561.655C947.587 755.413 1197.56 941.828 936.039 1140.66C745.771 1285.32 321.926 950.737 134.536 1202.19C-6.68295 1391.68 -53.4837 1655.38 131.935 1760.5C478.381 1956.91 1124.19 1515 1201.28 1997.83C1273.66 2451.23 100.805 1864.7 303.794 2668.89"
        stroke="#C2F84F"
        strokeWidth="22"
        strokeLinecap="round"
        style={{
          pathLength,
          strokeDashoffset: useTransform(pathLength, (value) => 1 - value),
        }}
      />
    </svg>
  );
};

export const Skiper19: React.FC<SvgFollowScrollProps> = ({
  headingLine1 = "Let's Build",
  headingLine2 = "Something Exceptional",
  headingLine3 = "Together.",
  subheading = "Open for high-impact full-stack platforms, autonomous AI systems, and engineering collaborations.",
  footerTitle = "PIYUSH",
  email = "piyush@example.com",
  githubUrl = "https://github.com",
  location = "Mumbai, India",
  className = "",
}) => {
  const lineSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineSectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className={`relative w-full overflow-x-clip bg-[#FAFDEE] text-[#1F3A4B] font-hn ${className}`}>
      {/* Top Statement & Scroll-Following SVG Line Section */}
      <section
        ref={lineSectionRef}
        className="relative mx-auto flex min-h-[140vh] sm:min-h-[160vh] w-full flex-col items-center px-6 sm:px-12"
      >
        {/* Top classification header */}
        <div className="w-full max-w-7xl pt-16 sm:pt-24 flex items-center justify-between border-b border-[#1F3A4B]/15 pb-6 z-10">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#1F3A4B] animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#1F3A4B]/70 font-mono">
              04 // Colophon &amp; Connect
            </span>
          </div>
          <span className="text-xs uppercase tracking-[0.2em] text-[#1F3A4B]/50 font-mono">
            Interactive Scroll Odyssey
          </span>
        </div>

        {/* Main Impact Statement & Scroll-following Line */}
        <div className="mt-24 sm:mt-32 relative flex w-full max-w-5xl flex-col items-center justify-center gap-6 text-center z-10">
          <h2 className="relative z-10 text-5xl sm:text-7xl lg:text-8xl font-light tracking-[-0.05em] leading-[1.05] text-[#1F3A4B]">
            {headingLine1} <br />
            <span className="font-normal italic font-serif">{headingLine2}</span> <br />
            {headingLine3}
          </h2>

          <p className="relative z-10 max-w-2xl text-base sm:text-lg lg:text-xl font-light text-[#1F3A4B]/80 leading-relaxed">
            {subheading}
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1F3A4B]/5 border border-[#1F3A4B]/15 text-xs font-mono uppercase tracking-widest text-[#1F3A4B]/70 mt-2">
            <span>Scroll down to enter portal</span>
            <span className="animate-bounce">&darr;</span>
          </div>

          {/* Scroll Following SVG Line Path */}
          <div className="absolute -right-[25%] sm:-right-[35%] lg:-right-[40%] top-[-20%] pointer-events-none z-0 opacity-90">
            <LinePath
              className="w-[850px] sm:w-[1100px] lg:w-[1278px] h-auto"
              scrollYProgress={scrollYProgress}
            />
          </div>
        </div>
      </section>

      {/* Full-Page Interactive Glyph Portal covering the complete viewport and page */}
      <section className="relative w-full z-20">
        <style>{`
          .gp-full-portal [data-gp-caption] {
            inset: auto 24px 32px;
            justify-content: space-between;
          }
          @media (min-width: 640px) {
            .gp-full-portal [data-gp-caption] {
              inset: auto 48px 40px;
            }
          }
          .gp-full-portal [data-gp-enter] {
            min-height: 44px;
            padding: 0 24px;
            gap: 12px;
            background: #C2F84F;
            border: 1px solid #C2F84F;
            border-radius: 9999px;
            color: #1F3A4B;
            font-size: 13px;
            font-weight: 600;
            box-shadow: 0 4px 16px rgba(194, 248, 79, 0.3);
            transition: all 0.2s ease;
          }
          .gp-full-portal [data-gp-enter]:hover {
            background: #d4fa73;
            box-shadow: 0 6px 24px rgba(194, 248, 79, 0.45);
            transform: translateY(-1px);
          }
          .gp-full-portal [data-gp-hint] {
            color: rgba(250, 253, 238, 0.7);
            font-size: 12px;
            font-family: ui-monospace, monospace;
            letter-spacing: 0.05em;
          }
        `}</style>

        <GlyphPortal
          word={footerTitle}
          className="gp-full-portal w-full"
          fontFamily="'Helvetica Neue', Arial, sans-serif"
          fontWeight={900}
          interactive={true}
          scrollLength={2.4}
          enterLabel="Step inside"
          style={{
            "--gp-paper": "#1F3A4B",
            "--gp-ink": "#FAFDEE",
            "--gp-field": "#FAFDEE",
            "--gp-foreground": "#1F3A4B",
          }}
          background={
            <div className="absolute inset-0 w-full h-full bg-[#FAFDEE] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FAFDEE] via-[#f7fbe8] to-[#FAFDEE]" />
              <div className="absolute -top-32 -right-32 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-[#C2F84F]/40 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-[#C2F84F]/30 rounded-full blur-3xl pointer-events-none" />
            </div>
          }
          front={
            <div className="w-full px-6 sm:px-12 lg:px-16 pt-8 sm:pt-12">
              <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#FAFDEE]/15 pb-6">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#C2F84F] animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.25em] text-[#FAFDEE]/70 font-mono">
                    Direct Inquiries &amp; Network
                  </span>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#C2F84F] font-mono">
                  Available for Collaborations
                </span>
              </div>
              <p className="text-center text-xs font-mono text-[#FAFDEE]/60 uppercase tracking-widest mt-6">
                Click or hover any letter &bull; Scroll down to step inside
              </p>
            </div>
          }
        >
          {/* Inside Realm revealed when traveling through the glyph */}
          <div className="w-full max-w-6xl mx-auto flex flex-col justify-center px-6 sm:px-12 py-10 text-[#1F3A4B]">
            <div className="mb-8 sm:mb-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-[#1F3A4B] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#1F3A4B]/70 font-semibold">
                  Inner Dimension &bull; Direct Connect
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#1F3A4B] leading-[1.1]">
                Let&apos;s Build <span className="font-serif italic font-normal text-[#1F3A4B]">Something Exceptional</span> Together.
              </h2>
              <p className="text-sm sm:text-base text-[#1F3A4B]/80 font-light mt-4 max-w-2xl leading-relaxed">
                Open for high-impact full-stack platforms, autonomous AI systems, and engineering collaborations.
              </p>
            </div>

            {/* Footer Metadata Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 pt-6 sm:pt-8 border-t border-[#1F3A4B]/15 font-hn">
              {/* Location */}
              <div className="flex flex-col gap-2 bg-[#1F3A4B]/5 p-5 sm:p-6 rounded-2xl border border-[#1F3A4B]/15 hover:bg-[#1F3A4B]/10 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1F3A4B] font-semibold">
                  <MapPin className="w-4 h-4 text-[#1F3A4B]" />
                  <span>Base of Operations</span>
                </div>
                <p className="text-xs sm:text-sm font-light text-[#1F3A4B]/90 leading-relaxed mt-1">
                  {location}
                </p>
              </div>

              {/* Email / Contact Action */}
              <div className="flex flex-col gap-2 bg-[#1F3A4B]/5 p-5 sm:p-6 rounded-2xl border border-[#1F3A4B]/15 hover:bg-[#1F3A4B]/10 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1F3A4B] font-semibold">
                  <Mail className="w-4 h-4 text-[#1F3A4B]" />
                  <span>Electronic Mail</span>
                </div>
                <a
                  href={`mailto:${email}`}
                  className="text-xs sm:text-sm font-medium text-[#1F3A4B] hover:text-[#1F3A4B]/70 transition-colors flex items-center gap-1.5 group mt-1 underline underline-offset-4"
                >
                  <span>{email}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* GitHub / Social Connection */}
              <div className="flex flex-col gap-2 bg-[#1F3A4B]/5 p-5 sm:p-6 rounded-2xl border border-[#1F3A4B]/15 hover:bg-[#1F3A4B]/10 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1F3A4B] font-semibold">
                  <Github className="w-4 h-4 text-[#1F3A4B]" />
                  <span>Open Source &amp; Code</span>
                </div>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-medium text-[#1F3A4B] hover:text-[#1F3A4B]/70 transition-colors flex items-center gap-1.5 group mt-1 underline underline-offset-4"
                >
                  <span>{githubUrl.replace('https://', '')}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#1F3A4B]/60 uppercase tracking-widest pt-5 border-t border-[#1F3A4B]/10">
              <div>&copy; {new Date().getFullYear()} {footerTitle}. All rights reserved.</div>
              <div className="text-[#1F3A4B]/80 font-medium">Scroll back up to return to surface &uarr;</div>
            </div>
          </div>
        </GlyphPortal>
      </section>
    </div>
  );
};

export default Skiper19;
