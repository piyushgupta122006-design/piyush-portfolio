import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export const StatementSection: React.FC = () => {
  return (
    <section id="statement" className="relative w-full bg-[#070707] text-cream font-hn px-6 py-20 sm:px-12 sm:py-28 lg:px-20 lg:py-36 flex flex-col justify-between border-t border-cream/15 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-cream/[0.02] blur-[140px] pointer-events-none" />

      {/* Top Header Eyebrow / Minimal Classification */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-10 border-b border-cream/15">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-cream animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#e2e0d8] font-medium font-mono">
            01 // Statement &amp; Philosophy
          </span>
        </div>
        <div className="text-xs uppercase tracking-[0.2em] text-cream/60 font-mono">
          Piyush Gupta &mdash; Full-Stack Engineer &amp; AI Builder
        </div>
      </div>

      {/* Core Highlight: Big, Bold Editorial Statement Headline */}
      <div className="my-14 sm:my-20 max-w-5xl">
        <span className="block text-[11px] uppercase tracking-[0.28em] text-cream/50 mb-6 font-mono">
          Core Thesis
        </span>
        <ScrollReveal
          baseOpacity={0.12}
          enableBlur={true}
          baseRotation={2}
          blurStrength={6}
          textClassName="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[-0.03em] leading-[1.12] text-cream"
        >
          Building high-performance tools for students. Obsessed with Logic, Data &amp; Clean UI.
        </ScrollReveal>

        {/* Refined Secondary Narrative */}
        <p className="mt-8 sm:mt-10 text-base sm:text-lg lg:text-xl text-cream/70 font-light leading-[1.75] max-w-2xl">
          Undergraduate Computer Science student at <span className="text-cream font-normal">BNN College, Bhiwandi (SYCS)</span>. Creator of <span className="text-cream font-normal">BNN CS Study Hub</span> (adopted by 107+ college students across 4 semesters) and <span className="text-cream font-normal">FlashCrush</span> (100% client-side Wasm media &amp; on-device AI studio).
        </p>
      </div>

      {/* Bottom Minimalist Pillars */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-cream/15 font-mono">
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] uppercase tracking-[0.22em] text-cream/45">
            01 / Architecture
          </span>
          <p className="text-xs sm:text-sm text-cream/90 font-light uppercase tracking-wider font-hn">
            Full-Stack Systems
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] uppercase tracking-[0.22em] text-cream/45">
            02 / Intelligence
          </span>
          <p className="text-xs sm:text-sm text-cream/90 font-light uppercase tracking-wider font-hn">
            AI &amp; Vibe Coding
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] uppercase tracking-[0.22em] text-cream/45">
            03 / Privacy
          </span>
          <p className="text-xs sm:text-sm text-cream/90 font-light uppercase tracking-wider font-hn">
            100% Client-Side Wasm
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] uppercase tracking-[0.22em] text-cream/45">
            04 / Academics
          </span>
          <p className="text-xs sm:text-sm text-cream/90 font-light uppercase tracking-wider font-hn">
            BNN College (SYCS)
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatementSection;
