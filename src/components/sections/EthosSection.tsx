import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const EthosSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const word1Ref = useRef<HTMLDivElement | null>(null);
  const word2Ref = useRef<HTMLDivElement | null>(null);
  const word3Ref = useRef<HTMLDivElement | null>(null);
  const [activeStep, setActiveStep] = useState<number>(1);

  const renderChars = (word: string, charClass: string) => {
    return word.split('').map((char, index) => (
      <span
        key={index}
        className={`${charClass} inline-block`}
        style={{ willChange: 'opacity, transform' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const word1 = word1Ref.current;
      const word2 = word2Ref.current;
      const word3 = word3Ref.current;

      const word1Chars = section.querySelectorAll('.word-1-char');
      const word2Chars = section.querySelectorAll('.word-2-char');
      const word3Chars = section.querySelectorAll('.word-3-char');

      gsap.set([word1Chars, word2Chars, word3Chars], {
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: '50% 0%'
      });

      gsap.set([word2, word3], {
        autoAlpha: 0,
        pointerEvents: 'none'
      });
      gsap.set(word1, {
        autoAlpha: 1,
        pointerEvents: 'auto'
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=300%',
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.35) {
              setActiveStep(1);
            } else if (p < 0.7) {
              setActiveStep(2);
            } else {
              setActiveStep(3);
            }
          }
        }
      });

      // 1. LOCAL-FIRST
      tl.to(
        word1Chars,
        {
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          ease: 'back.inOut(2)',
          stagger: 0.04,
          duration: 0.7
        },
        0
      );

      tl.to({}, { duration: 0.4 }, 0.7);

      tl.to(
        word1Chars,
        {
          opacity: 0,
          yPercent: -110,
          scaleY: 0.8,
          ease: 'power2.in',
          stagger: 0.03,
          duration: 0.35
        },
        1.1
      );
      tl.set(word1, { autoAlpha: 0 }, 1.45);

      // 2. INTELLIGENT
      tl.set(word2, { autoAlpha: 1, pointerEvents: 'auto' }, 1.45);
      tl.to(
        word2Chars,
        {
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          ease: 'back.inOut(2)',
          stagger: 0.04,
          duration: 0.7
        },
        1.5
      );

      tl.to({}, { duration: 0.4 }, 2.2);

      tl.to(
        word2Chars,
        {
          opacity: 0,
          yPercent: -110,
          scaleY: 0.8,
          ease: 'power2.in',
          stagger: 0.03,
          duration: 0.35
        },
        2.6
      );
      tl.set(word2, { autoAlpha: 0 }, 2.95);

      // 3. ZERO-LATENCY
      tl.set(word3, { autoAlpha: 1, pointerEvents: 'auto' }, 2.95);
      tl.to(
        word3Chars,
        {
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          ease: 'back.inOut(2)',
          stagger: 0.04,
          duration: 0.7
        },
        3.0
      );

      tl.to({}, { duration: 0.5 }, 3.7);

      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="ethos"
      ref={sectionRef}
      className="relative z-10 w-full h-screen bg-[#07080A] text-[#F4F4F5] font-hn flex flex-col justify-between px-6 sm:px-12 lg:px-20 py-8 sm:py-12 border-t border-white/[0.08] overflow-hidden select-none"
    >
      {/* Background ambient radial glow in Solar Amber */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] rounded-full bg-[#FF6B00]/[0.04] blur-[150px] pointer-events-none" />

      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-5 w-full z-10">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#FF6B00] animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-mono">
            02 // Engineering Core Philosophy
          </span>
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-[#FF6B00] font-mono font-medium">
          [ 0{activeStep} / 03 ]
        </div>
      </div>

      {/* Center Stage */}
      <div className="relative w-full max-w-6xl mx-auto my-auto h-[180px] sm:h-[240px] flex items-center justify-center z-10">
        {/* Word 1: LOCAL-FIRST */}
        <div
          ref={word1Ref}
          className="absolute inset-0 flex flex-col items-center justify-center text-center overflow-hidden"
        >
          <span className="font-hn font-black tracking-tight text-[clamp(2.8rem,9.5vw,8.5rem)] leading-none text-white inline-block">
            {renderChars('LOCAL-FIRST', 'word-1-char')}
          </span>
          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-[#FF6B00] mt-3 opacity-90">
            01 // Zero-Server Privacy • In-Browser Execution
          </span>
        </div>

        {/* Word 2: INTELLIGENT */}
        <div
          ref={word2Ref}
          className="absolute inset-0 flex flex-col items-center justify-center text-center overflow-hidden"
        >
          <span className="font-hn font-black tracking-tight text-[clamp(2.8rem,9.5vw,8.5rem)] leading-none text-white inline-block">
            {renderChars('INTELLIGENT', 'word-2-char')}
          </span>
          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-[#FFA043] mt-3 opacity-90">
            02 // On-Device Neural Models &amp; Gemini Agents
          </span>
        </div>

        {/* Word 3: ZERO-LATENCY */}
        <div
          ref={word3Ref}
          className="absolute inset-0 flex flex-col items-center justify-center text-center overflow-hidden"
        >
          <span className="font-hn font-black tracking-tight text-[clamp(2.5rem,8.5vw,7.8rem)] leading-none text-white inline-block">
            {renderChars('ZERO-LATENCY', 'word-3-char')}
          </span>
          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-[#10B981] mt-3 opacity-90">
            03 // WebAssembly SIMD • Sub-Millisecond Compute
          </span>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-white/[0.08] w-full z-10">
        <div className="text-[11px] uppercase tracking-[0.24em] text-zinc-500 font-mono">
          Local In-Memory Runtimes &rarr; On-Device Intelligence &rarr; Zero Server Latency
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`h-1 rounded-full transition-all duration-300 ${
              activeStep === 1 ? 'w-8 bg-[#FF6B00]' : 'w-4 bg-white/20'
            }`}
          />
          <span
            className={`h-1 rounded-full transition-all duration-300 ${
              activeStep === 2 ? 'w-8 bg-[#FFA043]' : 'w-4 bg-white/20'
            }`}
          />
          <span
            className={`h-1 rounded-full transition-all duration-300 ${
              activeStep === 3 ? 'w-8 bg-[#10B981]' : 'w-4 bg-white/20'
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default EthosSection;
