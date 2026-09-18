import React from 'react';
import LogoLoop, { LogoItem } from '../ui/LogoLoop';

// SVG Icon Definitions
const ReactIcon = () => (
  <svg viewBox="0 0 115.3 100" className="w-5 h-5 flex-shrink-0">
    <ellipse cx="57.65" cy="50" rx="16.7" ry="43.5" transform="matrix(0.866 -0.5 0.5 0.866 -17.28 35.85)" fill="none" stroke="#00D8FF" strokeWidth="5.5" />
    <ellipse cx="57.65" cy="50" rx="16.7" ry="43.5" transform="matrix(-0.866 -0.5 0.5 -0.866 82.55 105.85)" fill="none" stroke="#00D8FF" strokeWidth="5.5" />
    <ellipse cx="57.65" cy="50" rx="16.7" ry="43.5" fill="none" stroke="#00D8FF" strokeWidth="5.5" />
    <circle cx="57.65" cy="50" r="9" fill="#00D8FF" />
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 128 128" className="w-5 h-5 flex-shrink-0">
    <rect width="128" height="128" rx="20" fill="#3178C6" />
    <path d="M72.2 78.5c0-1.8 1-3.2 2.8-4.2 1.9-1 4.5-1.9 7.8-2.6 3.3-.8 6.5-1.5 9.7-2.3 4.2-1.1 7.6-2.8 10.2-5.1 2.6-2.3 3.9-5.7 3.9-10.2 0-3.3-.8-6.1-2.4-8.5-1.6-2.4-3.8-4.3-6.6-5.8-2.8-1.5-6-2.5-9.6-3.2-3.6-.7-7.3-1-11.1-1-4.7 0-9.2.6-13.6 1.8-4.4 1.2-8.3 3-11.7 5.4l5.4 12.3c2.7-1.9 5.8-3.4 9.2-4.5 3.4-1.1 6.8-1.7 10.2-1.7 3.7 0 6.6.7 8.6 2 2 1.3 3 3.3 3 5.9 0 1.6-.7 2.9-2.1 3.9-1.4 1-3.6 1.8-6.6 2.6-3.7.9-7.2 1.8-10.5 2.7-4.4 1.2-7.9 3-10.4 5.3-2.5 2.3-3.8 5.7-3.8 10.1 0 3.3.8 6.3 2.5 8.9 1.7 2.6 4.1 4.7 7.2 6.3 3.1 1.6 6.7 2.7 10.8 3.3 4.1.6 8.3.9 12.6.9 5.3 0 10.5-.7 15.6-2.1 5.1-1.4 9.5-3.5 13.2-6.3l-5.6-12.2c-3.1 2.1-6.5 3.8-10.2 5-3.7 1.2-7.4 1.8-11.1 1.8-3.6 0-6.4-.7-8.3-2-2.1-1.3-3.1-3.2-3.1-5.7zM28.4 46.5H45v56.8H28.4z" fill="#FFF" />
    <path d="M12 46.5h49.6V35H12z" fill="#FFF" />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 fill-[#38BDF8]">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
  </svg>
);

const ViteIcon = () => (
  <svg viewBox="0 0 32 32" className="w-5 h-5 flex-shrink-0">
    <path d="M29.5 5.5L16.8 28.7a1 1 0 01-1.7.1L2.5 6a1 1 0 01.9-1.5h25.2a1 1 0 01.9 1z" fill="url(#viteGrad2)" />
    <path d="M19.5 3L11 16h6l-3.5 10.5L25 12h-6.5L19.5 3z" fill="#FFD62E" />
    <defs>
      <linearGradient id="viteGrad2" x1="2" y1="5" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#41D1FF" />
        <stop offset="1" stopColor="#BD34FE" />
      </linearGradient>
    </defs>
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 128 128" className="w-5 h-5 flex-shrink-0">
    <path d="M63.6 5.8c-28.7 0-26.9 12.4-26.9 12.4l.1 12.9h27.4v3.9H23.5S5.4 33 5.4 61.8c0 28.7 15.8 27.6 15.8 27.6h9.4V76.2s-.5-15.8 15.5-15.8h26.7s14.8.3 14.8-14.4V20.2S89 5.8 63.6 5.8zM47.7 15.6a4.2 4.2 0 110 8.4 4.2 4.2 0 010-8.4z" fill="#387EB8" />
    <path d="M64.4 122.2c28.7 0 26.9-12.4 26.9-12.4l-.1-12.9H63.8v-3.9h40.7s18.1 2 18.1-26.8c0-28.7-15.8-27.6-15.8-27.6h-9.4v13.2s.5 15.8-15.5 15.8H45.6s-14.8-.3-14.8 14.4v25.8s-1.3 14.4 24.1 14.4h9.5zm15.9-9.8a4.2 4.2 0 110-8.4 4.2 4.2 0 010 8.4z" fill="#FFE052" />
  </svg>
);

const FirebaseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
    <path d="M4.6 17.5L6.8 3.8a.7.7 0 011.3-.2l3.4 6.5-6.9 7.4z" fill="#FFA000" />
    <path d="M12.4 9.4l2.1-4.1a.7.7 0 011.3.1l3.6 12.1-7-8.1z" fill="#F57C00" />
    <path d="M12.4 14.8l-7.8 2.7 7.4 4.1a.7.7 0 00.7 0l6.7-4.1-7-2.7z" fill="#FFCA28" />
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 fill-[#F05032]">
    <path d="M21.6 10.8l-8.4-8.4a1.7 1.7 0 00-2.4 0L8.6 4.6l3.4 3.4a2 2 0 012.3 2.3l3.3 3.3a2 2 0 11-1.2 1.2l-3.1-3.1v4.4a2 2 0 11-1.7 0v-4.5a2 2 0 01-1-2.7L5.3 5.4 2.4 8.3a1.7 1.7 0 000 2.4l8.4 8.4a1.7 1.7 0 002.4 0l8.4-8.4a1.7 1.7 0 000-2.4z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 fill-cream">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const VercelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 fill-cream">
    <path d="M12 2L24 22H0L12 2Z" />
  </svg>
);

const GSAPIcon = () => (
  <svg viewBox="0 0 32 32" className="w-5 h-5 flex-shrink-0 fill-[#88CE02]">
    <rect width="32" height="32" rx="8" fill="#111111" stroke="#88CE02" strokeWidth="2" />
    <path d="M8 16c0-3.3 2.7-6 6-6h4v3h-4a3 3 0 000 6h4v3h-4c-3.3 0-6-2.7-6-6z" fill="#88CE02" />
    <circle cx="21" cy="16" r="2.5" fill="#88CE02" />
  </svg>
);

const ClaudeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 fill-[#D97706]">
    <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 14.93V14h-2v2.93a8 8 0 112 0zM12 4a8 8 0 017.93 7H16a4 4 0 00-8 0H4.07A8 8 0 0112 4z" />
  </svg>
);

const GeminiIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
    <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" fill="url(#geminiGrad2)" />
    <defs>
      <linearGradient id="geminiGrad2" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3874FF" />
        <stop offset="0.5" stopColor="#A855F7" />
        <stop offset="1" stopColor="#EC4899" />
      </linearGradient>
    </defs>
  </svg>
);

const CursorIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 fill-cream">
    <path d="M5.5 2.5l14 8.5-6.5 1.5 4.5 7.5-2.5 1.5-4.5-7.5-3.5 5.5v-17z" />
  </svg>
);

const OpenAIIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 fill-[#10A37F]">
    <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 0010.59.8a6.046 6.046 0 00-5.772 3.997 6.066 6.066 0 00-3.957 2.87 6.046 6.046 0 00.738 7.15 5.98 5.98 0 00.516 4.911 6.05 6.05 0 006.51 2.9A6.056 6.056 0 0013.41 23.2a6.046 6.046 0 005.772-3.997 6.06 6.06 0 003.957-2.87 6.047 6.047 0 00-.738-7.15l-.119-.362zM13.41 21.6a4.47 4.47 0 01-2.912-1.07l.142-.08 4.832-2.79a.8.8 0 00.4-.693V10.22l2.072 1.196a.07.07 0 01.036.052v5.698A4.476 4.476 0 0113.41 21.6zM3.483 14.5a4.462 4.462 0 01-.527-3.058c.27-.013.418-.01.554.07l4.832 2.79a.79.79 0 00.793 0l5.836-3.37v2.393a.07.07 0 01-.035.06l-4.935 2.85a4.474 4.474 0 01-6.518-1.735z" />
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
    <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83" />
    <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF" />
    <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill="#F24E1E" />
    <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262" />
    <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1ABCFE" />
  </svg>
);

// Track 1: Core Web Stack & Frameworks
const coreTechItems: LogoItem[] = [
  {
    node: (
      <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#111111] border border-cream/15 text-cream hover:border-cream/40 transition-colors">
        <ReactIcon />
        <span className="text-sm font-hn font-medium tracking-wide">React 19</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#111111] border border-cream/15 text-cream hover:border-cream/40 transition-colors">
        <TypeScriptIcon />
        <span className="text-sm font-hn font-medium tracking-wide">TypeScript</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#111111] border border-cream/15 text-cream hover:border-cream/40 transition-colors">
        <TailwindIcon />
        <span className="text-sm font-hn font-medium tracking-wide">Tailwind CSS</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#111111] border border-cream/15 text-cream hover:border-cream/40 transition-colors">
        <ViteIcon />
        <span className="text-sm font-hn font-medium tracking-wide">Vite</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#111111] border border-cream/15 text-cream hover:border-cream/40 transition-colors">
        <PythonIcon />
        <span className="text-sm font-hn font-medium tracking-wide">Python 3</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#111111] border border-cream/15 text-cream hover:border-cream/40 transition-colors">
        <FirebaseIcon />
        <span className="text-sm font-hn font-medium tracking-wide">Firebase</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#111111] border border-cream/15 text-cream hover:border-cream/40 transition-colors">
        <GSAPIcon />
        <span className="text-sm font-hn font-medium tracking-wide">GSAP</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#111111] border border-cream/15 text-cream hover:border-cream/40 transition-colors">
        <GitIcon />
        <span className="text-sm font-hn font-medium tracking-wide">Git</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#111111] border border-cream/15 text-cream hover:border-cream/40 transition-colors">
        <GitHubIcon />
        <span className="text-sm font-hn font-medium tracking-wide">GitHub</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#111111] border border-cream/15 text-cream hover:border-cream/40 transition-colors">
        <VercelIcon />
        <span className="text-sm font-hn font-medium tracking-wide">Vercel</span>
      </div>
    )
  }
];

// Track 2: AI Tooling & Autonomous Workflows
const aiTechItems: LogoItem[] = [
  {
    node: (
      <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#111111] border border-cream/15 text-cream hover:border-cream/40 transition-colors">
        <ClaudeIcon />
        <span className="text-sm font-hn font-medium tracking-wide">Claude</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#111111] border border-cream/15 text-cream hover:border-cream/40 transition-colors">
        <GeminiIcon />
        <span className="text-sm font-hn font-medium tracking-wide">Gemini</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#111111] border border-cream/15 text-cream hover:border-cream/40 transition-colors">
        <CursorIcon />
        <span className="text-sm font-hn font-medium tracking-wide">Cursor</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#111111] border border-cream/15 text-cream hover:border-cream/40 transition-colors">
        <OpenAIIcon />
        <span className="text-sm font-hn font-medium tracking-wide">OpenAI</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#111111] border border-cream/15 text-cream hover:border-cream/40 transition-colors">
        <FigmaIcon />
        <span className="text-sm font-hn font-medium tracking-wide">Figma</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#111111] border border-cream/15 text-cream hover:border-cream/40 transition-colors">
        <ClaudeIcon />
        <span className="text-sm font-hn font-medium tracking-wide">Claude Code</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#111111] border border-cream/15 text-cream hover:border-cream/40 transition-colors">
        <GeminiIcon />
        <span className="text-sm font-hn font-medium tracking-wide">Google AI Studio</span>
      </div>
    )
  }
];

export const TechStackSection: React.FC = () => {
  return (
    <section id="tech-stack" className="relative w-full bg-[#070707] text-cream font-hn py-12 sm:py-16 border-t border-cream/15 overflow-hidden">
      <div className="flex flex-col gap-4 sm:gap-6">
        {/* Track 1: Core Technologies (Left) */}
        <LogoLoop
          logos={coreTechItems}
          speed={55}
          direction="left"
          gap={18}
          logoHeight={40}
          pauseOnHover={true}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="#070707"
          ariaLabel="Core Web Technologies"
        />

        {/* Track 2: AI and Autonomous Tools (Right) */}
        <LogoLoop
          logos={aiTechItems}
          speed={50}
          direction="right"
          gap={18}
          logoHeight={40}
          pauseOnHover={true}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="#070707"
          ariaLabel="AI and Autonomous Tools"
        />
      </div>
    </section>
  );
};

export default TechStackSection;
