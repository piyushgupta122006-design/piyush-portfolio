import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export const StatementSection: React.FC = () => {
  return (
    <section id="statement" className="relative w-full bg-[#07080A] text-[#F4F4F5] font-hn px-6 py-20 sm:px-12 sm:py-28 lg:px-20 lg:py-36 flex flex-col justify-between border-t border-white/[0.08] overflow-hidden">
      {/* Subtle ambient amber lighting */}
      <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[#FF6B00]/[0.03] blur-[140px] pointer-events-none" />

      {/* Top Header Eyebrow / Minimal Classification */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-10 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#FF6B00] animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#FF6B00] font-medium font-mono">
            01 // Statement &amp; Philosophy
          </span>
        </div>
        <div className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-mono">
          Piyush Gupta &mdash; Full-Stack Engineer &amp; AI Builder
        </div>
      </div>

      {/* Core Highlight: Big, Bold Editorial Statement Headline */}
      <div className="my-14 sm:my-20 max-w-5xl">
        <span className="block text-[11px] uppercase tracking-[0.28em] text-[#FFA043] mb-6 font-mono font-medium">
          Core Thesis
        </span>
        <ScrollReveal
          baseOpacity={0.15}
          enableBlur={true}
          baseRotation={2}
          blurStrength={6}
          textClassName="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[-0.03em] leading-[1.12] text-white"
        >
          Building high-performance tools for humans. Obsessed with Logic, Data &amp; Clean UI.
        </ScrollReveal>

        {/* Refined Secondary Narrative */}
        <p className="mt-8 sm:mt-10 text-base sm:text-lg lg:text-xl text-zinc-300 font-light leading-[1.75] max-w-2xl">
          Undergraduate Computer Science student at <span className="text-white font-medium">BNN College, Bhiwandi (SYCS)</span>. Creator of <span className="text-[#FF6B00] font-medium">FlashCrush</span> (100% client-side Wasm media &amp; on-device AI studio) and <span className="text-white font-medium">BNN CS Study Hub</span> (adopted by 107+ college students across 4 semesters).
        </p>
      </div>

      {/* Bottom Minimalist Pillars */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-white/[0.08] font-mono">
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            01 / Architecture
          </span>
          <p className="text-xs sm:text-sm text-zinc-200 font-light uppercase tracking-wider font-hn">
            Zero-Bloat Full-Stack
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            02 / Intelligence
          </span>
          <p className="text-xs sm:text-sm text-zinc-200 font-light uppercase tracking-wider font-hn">
            On-Device AI &amp; Gemini
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            03 / Privacy
          </span>
          <p className="text-xs sm:text-sm text-[#FF6B00] font-light uppercase tracking-wider font-hn font-medium">
            100% Client-Side Wasm
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            04 / Academics
          </span>
          <p className="text-xs sm:text-sm text-zinc-200 font-light uppercase tracking-wider font-hn">
            BNN College (SYCS)
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatementSection;
