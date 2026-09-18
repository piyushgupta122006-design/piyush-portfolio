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

      // 1. BUILD
      tl.to(
        word1Chars,
        {
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          ease: 'back.inOut(2)',
          stagger: 0.05,
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

      // 2. AUTOMATE
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

      // 3. SHIP
      tl.set(word3, { autoAlpha: 1, pointerEvents: 'auto' }, 2.95);
      tl.to(
        word3Chars,
        {
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          ease: 'back.inOut(2)',
          stagger: 0.05,
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
      ref={sectionRef}
      className="relative z-10 w-full h-screen bg-[#070707] text-cream font-hn flex flex-col justify-between px-6 sm:px-12 lg:px-20 py-8 sm:py-12 border-t border-cream/15 overflow-hidden select-none"
    >
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-cream/[0.02] blur-[140px] pointer-events-none" />

      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-cream/10 pb-5 w-full z-10">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-cream animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-cream/60">
            02 // Core Primitives
          </span>
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-cream/40 font-mono">
          [ 0{activeStep} / 03 ]
        </div>
      </div>

      {/* Center Stage */}
      <div className="relative w-full max-w-5xl mx-auto my-auto h-[180px] sm:h-[240px] flex items-center justify-center z-10">
        <div
          ref={word1Ref}
          className="absolute inset-0 flex items-center justify-center text-center overflow-hidden"
        >
          <span className="font-hn font-black tracking-tight text-[clamp(3.6rem,11.5vw,9.5rem)] leading-none text-cream inline-block">
            {renderChars('BUILD', 'word-1-char')}
          </span>
        </div>

        <div
          ref={word2Ref}
          className="absolute inset-0 flex items-center justify-center text-center overflow-hidden"
        >
          <span className="font-hn font-black tracking-tight text-[clamp(3.1rem,10vw,8.3rem)] leading-none text-cream inline-block">
            {renderChars('AUTOMATE', 'word-2-char')}
          </span>
        </div>

        <div
          ref={word3Ref}
          className="absolute inset-0 flex items-center justify-center text-center overflow-hidden"
        >
          <span className="font-hn font-black tracking-tight text-[clamp(3.6rem,11.5vw,9.5rem)] leading-none text-cream inline-block">
            {renderChars('SHIP', 'word-3-char')}
          </span>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-cream/10 w-full z-10">
        <div className="text-[11px] uppercase tracking-[0.24em] text-cream/40">
          From Architecture &rarr; Autonomous Agents &rarr; Production Deployment
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`h-1 rounded-full transition-all duration-300 ${
              activeStep === 1 ? 'w-8 bg-cream' : 'w-4 bg-cream/20'
            }`}
          />
          <span
            className={`h-1 rounded-full transition-all duration-300 ${
              activeStep === 2 ? 'w-8 bg-cream' : 'w-4 bg-cream/20'
            }`}
          />
          <span
            className={`h-1 rounded-full transition-all duration-300 ${
              activeStep === 3 ? 'w-8 bg-cream' : 'w-4 bg-cream/20'
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default EthosSection;
