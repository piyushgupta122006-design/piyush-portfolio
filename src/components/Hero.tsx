import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const navItems = [
  { name: 'Story', href: '#statement' },
  { name: 'Stack', href: '#tech-stack' },
  { name: 'Work', href: '#projects' },
  { name: 'Impact', href: '#stats' },
  { name: 'Contact', href: '#contact' },
];

const socialItems = [
  { name: 'GitHub', href: 'https://github.com/piyushgupta122006-design' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/piyush-gupta-377694335/' },
  { name: 'Email', href: 'mailto:piyushgupta122006@gmail.com' },
];

export const Hero: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Lock document body scroll while mobile drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  return (
    <section id="hero-main" className="relative h-[100dvh] w-full overflow-hidden bg-black text-cream font-hn select-none">
      {/* 1. Background Image */}
      <img
        src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85"
        alt=""
        className="absolute inset-0 h-full w-full object-cover anim-fade-in"
      />

      {/* 2. Marquee Name */}
      <div
        className="absolute inset-x-0 top-[16vh] sm:top-[14vh] z-10 overflow-hidden anim-fade-up pointer-events-none"
        style={{ animationDelay: '500ms' }}
      >
        <div className="marquee flex w-max whitespace-nowrap font-hn text-[14vh] sm:text-[23vh] leading-none text-cream tracking-tight">
          <span className="pr-[6vw]">
            Piyush &mdash; Gupta&nbsp;
          </span>
          <span className="pr-[6vw]">
            Piyush &mdash; Gupta&nbsp;
          </span>
        </div>
      </div>

      {/* 3. Horizontal Cream Rule */}
      <div
        className="absolute inset-x-6 sm:inset-x-10 bottom-[5.5rem] sm:bottom-28 z-10 h-0.5 bg-cream anim-line"
        style={{ animationDelay: '1200ms' }}
      />

      {/* 4. Desktop Footer / Mobile Footer */}
      <footer className="absolute inset-x-0 bottom-0 z-30 sm:z-10 flex items-end justify-between px-6 pb-5 sm:px-10 sm:pb-8 text-xs sm:text-sm leading-relaxed font-hn">
        {/* Footer Left */}
        <div
          className="flex flex-col text-left anim-fade-up text-cream"
          style={{ animationDelay: '1400ms' }}
        >
          <span className="font-semibold text-white">Piyush Gupta</span>
          <span>BSc CS Student (SYCS) &bull; BNN College</span>
          <span>Full-Stack &amp; AI Systems Builder</span>
        </div>

        {/* Footer Right */}
        <div
          className="flex flex-col text-right anim-fade-up text-cream"
          style={{ animationDelay: '1550ms' }}
        >
          <span>Obsessed with Logic,</span>
          <span>Data &amp; Clean UI</span>
        </div>
      </footer>

      {/* 5. Front Portrait (Transparent Anime Boy Cutout) */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none z-20">
        <img
          src="/assets/projects/Profile.png"
          alt="Piyush Gupta Avatar"
          className="h-[70vh] sm:h-[78vh] lg:h-[84vh] w-auto max-w-none object-contain object-bottom anim-rise-in drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
          style={{ animationDelay: '300ms' }}
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
      </div>

      {/* 6. Header */}
      <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8">
        {/* Top-Left Brand Logo */}
        <a
          href="#"
          className="font-hn text-lg tracking-wide text-cream transition-opacity duration-300 hover:opacity-60 anim-fade-up font-bold"
          style={{ animationDelay: '800ms' }}
        >
          Piyush
        </a>

        {/* Right Cluster (Desktop) */}
        <div className="hidden sm:flex items-start gap-16 lg:gap-24">
          {/* Year */}
          <span
            className="text-sm text-cream font-hn anim-fade-up"
            style={{ animationDelay: '900ms' }}
          >
            2026 Edition
          </span>

          {/* Nav Links Column */}
          <nav className="flex flex-col gap-0.5 text-sm font-hn">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-cream transition-opacity duration-300 hover:opacity-60 anim-fade-up"
                style={{ animationDelay: `${1000 + index * 80}ms` }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Links Column */}
          <div className="flex flex-col gap-0.5 text-sm font-hn">
            {socialItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="text-cream transition-opacity duration-300 hover:opacity-60 anim-fade-up"
                style={{ animationDelay: `${1150 + index * 80}ms` }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Hamburger Trigger (Mobile only) */}
        <button
          type="button"
          aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="sm:hidden relative z-50 flex items-center justify-center h-10 w-10 focus:outline-none anim-fade-up"
          style={{ animationDelay: '900ms' }}
        >
          <div className="flex flex-col justify-between h-4 w-6">
            <span
              className={`h-[2px] w-full bg-cream rounded-full transition-transform duration-500 ease-drawer-ease ${
                isDrawerOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`h-[2px] w-full bg-cream rounded-full transition-opacity duration-300 ${
                isDrawerOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-[2px] w-full bg-cream rounded-full transition-transform duration-500 ease-drawer-ease ${
                isDrawerOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </div>
        </button>
      </header>

      {/* 7. Mobile Drawer */}
      <div
        className={`sm:hidden fixed inset-0 z-40 transition-opacity duration-500 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setIsDrawerOpen(false)}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* Slide-in Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-[#141414] px-8 py-10 flex flex-col justify-between transition-transform duration-[600ms] ease-drawer-ease ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            type="button"
            aria-label="Close drawer"
            onClick={() => setIsDrawerOpen(false)}
            className={`absolute right-6 top-6 z-50 text-cream p-1 transition-all duration-300 focus:outline-none ${
              isDrawerOpen ? 'rotate-0 opacity-100 delay-[300ms]' : 'rotate-90 opacity-0 pointer-events-none'
            }`}
          >
            <X size={26} strokeWidth={1.5} />
          </button>

          {/* Top section: Site Index + Nav Links */}
          <div className="pt-12">
            <span
              className={`block text-xs uppercase tracking-[0.2em] text-cream/50 mb-8 transition-all duration-500 ${
                isDrawerOpen ? 'translate-y-0 opacity-100 delay-[250ms]' : 'translate-y-4 opacity-0'
              }`}
            >
              Site Index
            </span>
            <div className="flex flex-col gap-5">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsDrawerOpen(false)}
                  className={`text-4xl text-cream font-hn transition-all duration-500 hover:opacity-60 ${
                    isDrawerOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isDrawerOpen ? `${300 + index * 80}ms` : '0ms',
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom section: Find Me + Socials */}
          <div className="pb-4">
            <span
              className={`block text-xs uppercase tracking-[0.2em] text-cream/50 mb-4 transition-all duration-500 ${
                isDrawerOpen ? 'translate-y-0 opacity-100 delay-[500ms]' : 'translate-y-4 opacity-0'
              }`}
            >
              Find Me
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {socialItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  onClick={() => setIsDrawerOpen(false)}
                  className={`text-sm text-cream font-hn transition-all duration-500 hover:opacity-60 ${
                    isDrawerOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isDrawerOpen ? `${550 + index * 60}ms` : '0ms',
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
