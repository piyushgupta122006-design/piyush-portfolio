import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Zap,
  ShieldCheck,
  Cpu,
  ArrowUpRight,
  ChevronRight,
  ExternalLink,
  Code2,
  X,
  FileCode,
  Sparkles,
  Layers,
} from 'lucide-react';

const navItems = [
  { name: 'Story', href: '#statement' },
  { name: 'Stack', href: '#tech-stack' },
  { name: 'Ethos', href: '#ethos' },
  { name: 'Work', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialItems = [
  { name: 'GitHub', href: 'https://github.com/piyushgupta122006-design' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/piyush-gupta-377694335/' },
  { name: 'Email', href: 'mailto:piyushgupta122006@gmail.com' },
];

export const Hero: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'flashcrush' | 'terminal'>('flashcrush');
  const [selectedTool, setSelectedTool] = useState<string>('compression');
  const [terminalLogIndex, setTerminalLogIndex] = useState<number>(0);

  // Lock scroll when mobile drawer is open
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

  const terminalCommands = [
    {
      cmd: '$ wasm-pack build --target web --release',
      output: '✓ [Wasm Engine] FlashCrush Core v2.4 compiled (SIMD enabled, 0ms server upload latency)',
    },
    {
      cmd: '$ cat engineer.json',
      output: '{\n  "name": "Piyush Gupta",\n  "education": "BSc CS (SYCS) @ BNN College",\n  "focus": ["On-Device AI", "Client-Side Wasm", "Zero-Bloat Web Systems"],\n  "status": "Ready for high-impact production roles"\n}',
    },
    {
      cmd: '$ node --test benchmark-onnx.js',
      output: '✓ ONNX Local Vision Runtime initialized in 14ms. Zero data leaves browser.',
    },
  ];

  return (
    <section
      id="hero-main"
      className="relative min-h-screen w-full overflow-hidden bg-[#07080A] text-[#F4F4F5] font-hn select-none flex flex-col justify-between pt-24 pb-12 px-6 sm:px-12 lg:px-16"
    >
      {/* 1. Ambient Background Grid & Solar Amber Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(#F4F4F5 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
        {/* Rich Solar Amber radial flare behind right-hand window */}
        <div className="absolute top-[15%] right-[5%] w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] bg-gradient-to-br from-[#FF6B00]/15 via-[#F59E0B]/5 to-transparent rounded-full blur-[120px]" />
        {/* Deep ambient glow bottom left */}
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#FF6B00]/8 rounded-full blur-[100px]" />
      </div>

      {/* 2. Top Navigation Header */}
      <header className="absolute inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-6 sm:px-12 lg:px-16 border-b border-white/[0.06] bg-[#07080A]/80 backdrop-blur-md">
        {/* Brand Logo & Status Beacon */}
        <a href="#" className="flex items-center gap-3 group">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6B00]" />
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-white group-hover:text-[#FF6B00] transition-colors">
              Piyush Gupta
            </span>
            <span className="text-[10px] font-mono text-zinc-400 tracking-wider">
              SYS.DEV // 2026
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-zinc-300">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-[#FF6B00] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Social Links */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/piyushgupta122006-design"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-full text-xs font-medium bg-[#FF6B00] text-black hover:bg-[#FFA043] transition-all duration-200 shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)]"
          >
            Connect
          </a>
        </div>

        {/* Mobile Drawer Trigger */}
        <button
          type="button"
          aria-label={isDrawerOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="md:hidden relative z-50 flex items-center justify-center h-10 w-10 text-white focus:outline-none"
        >
          <div className="flex flex-col justify-between h-3.5 w-5">
            <span
              className={`h-[2px] w-full bg-white rounded-full transition-transform duration-300 ${
                isDrawerOpen ? 'rotate-45 translate-y-[6px]' : ''
              }`}
            />
            <span
              className={`h-[2px] w-full bg-white rounded-full transition-opacity duration-200 ${
                isDrawerOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-[2px] w-full bg-white rounded-full transition-transform duration-300 ${
                isDrawerOpen ? '-rotate-45 -translate-y-[6px]' : ''
              }`}
            />
          </div>
        </button>
      </header>

      {/* 3. Main Asymmetric Hero Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto pt-6 lg:pt-8">
        {/* Left Column (60% on desktop) - Editorial Persona & Core Value */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          {/* Live Availability Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#14151C] border border-[#FF6B00]/25 text-xs font-mono text-zinc-300 shadow-[0_2px_12px_rgba(255,107,0,0.08)]">
            <span className="h-2 w-2 rounded-full bg-[#FF6B00] animate-pulse" />
            <span className="text-zinc-200">Open for High-Impact Software Roles</span>
            <span className="text-zinc-500">•</span>
            <span className="text-[#F59E0B]">Mumbai, IN</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.04em] leading-[1.05] text-white">
            Architecting <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FFA043] to-[#F59E0B]">
              Zero-Latency Systems
            </span> <br />
            &amp; On-Device AI.
          </h1>

          {/* Persona Statement */}
          <p className="max-w-xl text-base sm:text-lg font-light text-zinc-300 leading-relaxed">
            I am <strong className="font-semibold text-white">Piyush Gupta</strong>, an undergraduate Computer Science engineer (BNN College, SYCS) crafting high-performance client-side WebAssembly runtimes, private AI workflows, and resilient full-stack platforms.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF6B00] text-black text-sm font-semibold hover:bg-[#FFA043] transition-all duration-200 shadow-[0_0_25px_rgba(255,107,0,0.35)] hover:translate-y-[-1px]"
            >
              <span>Explore Projects</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="https://piyush-flash-crush-files.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#14151C] border border-white/10 hover:border-[#FF6B00]/40 text-sm font-medium text-white hover:text-[#FFA043] transition-all duration-200 hover:bg-[#1C1E26]"
            >
              <span>Launch FlashCrush</span>
              <ArrowUpRight className="w-4 h-4 text-[#FF6B00]" />
            </a>
          </div>

          {/* Key Specs Micro-Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/[0.08] w-full text-xs font-mono">
            <div className="flex flex-col gap-0.5">
              <span className="text-zinc-400">Architecture</span>
              <span className="text-white font-medium">100% Client-Side</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-zinc-400">Core Runtime</span>
              <span className="text-[#FF6B00] font-medium">WebAssembly (Wasm)</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-zinc-400">AI Engine</span>
              <span className="text-white font-medium">ONNX &amp; Gemini</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-zinc-400">Frontend Core</span>
              <span className="text-white font-medium">React 19 &amp; Vite</span>
            </div>
          </div>
        </div>

        {/* Right Column (50% on desktop) - Interactive 3D Window Card */}
        <div className="lg:col-span-5 w-full">
          <div className="relative rounded-2xl bg-[#0F1015] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(255,107,0,0.08)] overflow-hidden transition-all duration-300 hover:border-[#FF6B00]/30">
            {/* Mac Window Titlebar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#14151C] border-b border-white/[0.08]">
              {/* Traffic Lights */}
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#EF4444]/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-[#F59E0B]/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-[#10B981]/80 inline-block" />
              </div>

              {/* Tab Switcher */}
              <div className="flex items-center gap-1 bg-[#090A0D] p-1 rounded-lg border border-white/5 text-[11px] font-mono">
                <button
                  type="button"
                  onClick={() => setActiveTab('flashcrush')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${
                    activeTab === 'flashcrush'
                      ? 'bg-[#FF6B00] text-black font-semibold shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Zap className="w-3 h-3" />
                  <span>FlashCrush Studio</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('terminal')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${
                    activeTab === 'terminal'
                      ? 'bg-[#FF6B00] text-black font-semibold shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Terminal className="w-3 h-3" />
                  <span>Telemetry HUD</span>
                </button>
              </div>

              {/* Status Dot */}
              <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-zinc-400">
                <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                <span>ONLINE</span>
              </div>
            </div>

            {/* Window Body */}
            <div className="p-6">
              {activeTab === 'flashcrush' ? (
                /* Tab 1: FlashCrush Interactive Showcase */
                <div className="flex flex-col gap-5">
                  {/* Header info */}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-base font-semibold text-white">FlashCrush Core</h2>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#FF6B00]/15 text-[#FFA043] border border-[#FF6B00]/30 font-medium">
                          FLAGSHIP
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1">
                        100% Client-Side File Manipulation &amp; On-Device AI Studio
                      </p>
                    </div>
                  </div>

                  {/* Simulated interactive tool selector */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-mono uppercase text-zinc-400">Select Wasm Pipeline</span>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        { id: 'compression', label: 'PDF Optimizer', desc: 'Wasm native compression' },
                        { id: 'onnx', label: 'ONNX BG Remover', desc: 'On-device vision model' },
                        { id: 'ocr', label: 'Tesseract OCR', desc: 'Client text extraction' },
                        { id: 'convert', label: 'Image Converter', desc: 'Lossless WebP / PNG' },
                      ].map((tool) => (
                        <button
                          key={tool.id}
                          type="button"
                          onClick={() => setSelectedTool(tool.id)}
                          className={`p-2.5 rounded-xl border text-left transition-all ${
                            selectedTool === tool.id
                              ? 'bg-[#1C1E26] border-[#FF6B00] text-white shadow-[0_0_15px_rgba(255,107,0,0.15)]'
                              : 'bg-[#14151C]/60 border-white/5 text-zinc-400 hover:border-white/20'
                          }`}
                        >
                          <div className="font-medium text-xs text-white">{tool.label}</div>
                          <div className="text-[10px] text-zinc-400 mt-0.5">{tool.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Drop Simulator Box */}
                  <div className="p-4 rounded-xl border border-dashed border-[#FF6B00]/30 bg-[#FF6B00]/5 flex flex-col items-center justify-center text-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-zinc-200">
                        Drop media to test {selectedTool.toUpperCase()} pipeline
                      </div>
                      <div className="text-[10px] text-zinc-400 mt-0.5 font-mono">
                        Instant computation • Zero bytes sent to any remote server
                      </div>
                    </div>
                  </div>

                  {/* Telemetry live counters */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/[0.08] text-center font-mono">
                    <div className="p-2 rounded-lg bg-[#14151C] border border-white/5">
                      <div className="text-[10px] text-zinc-400">Latency</div>
                      <div className="text-xs font-semibold text-[#10B981] mt-0.5">0.00 ms</div>
                    </div>
                    <div className="p-2 rounded-lg bg-[#14151C] border border-white/5">
                      <div className="text-[10px] text-zinc-400">Tools</div>
                      <div className="text-xs font-semibold text-[#FF6B00] mt-0.5">17 Active</div>
                    </div>
                    <div className="p-2 rounded-lg bg-[#14151C] border border-white/5">
                      <div className="text-[10px] text-zinc-400">Privacy</div>
                      <div className="text-xs font-semibold text-white mt-0.5">100% Local</div>
                    </div>
                  </div>

                  {/* Launch button */}
                  <a
                    href="https://piyush-flash-crush-files.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#1C1E26] hover:bg-[#272935] border border-white/10 text-xs font-mono text-white transition-all group"
                  >
                    <span>Open Live Studio</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#FF6B00] group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              ) : (
                /* Tab 2: Live Terminal HUD */
                <div className="flex flex-col gap-4 font-mono text-xs">
                  {/* Console screen */}
                  <div className="bg-[#090A0D] p-4 rounded-xl border border-white/5 min-h-[260px] flex flex-col justify-between">
                    <div className="flex flex-col gap-3">
                      <div className="text-zinc-500 text-[11px]">
                        // Piyush Gupta Engineering Telemetry Shell v2.4
                      </div>

                      {terminalCommands.slice(0, terminalLogIndex + 1).map((item, i) => (
                        <div key={i} className="flex flex-col gap-1">
                          <div className="text-[#FF6B00]">{item.cmd}</div>
                          <div className="text-zinc-300 whitespace-pre-wrap pl-2 border-l border-[#FF6B00]/40 text-[11px] leading-relaxed">
                            {item.output}
                          </div>
                        </div>
                      ))}

                      {/* Blinking Prompt Cursor */}
                      <div className="flex items-center gap-1.5 text-zinc-400 mt-1">
                        <span className="text-[#10B981]">➜</span>
                        <span className="text-zinc-200">piyush@engine:~$</span>
                        <span className="inline-block h-3.5 w-2 bg-[#FF6B00] animate-pulse" />
                      </div>
                    </div>

                    {/* Interactive quick buttons */}
                    <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/5 mt-4">
                      <span className="text-[10px] text-zinc-500">Run:</span>
                      <button
                        type="button"
                        onClick={() =>
                          setTerminalLogIndex((prev) => (prev + 1) % terminalCommands.length)
                        }
                        className="px-2 py-1 rounded bg-[#14151C] border border-white/10 text-[10px] text-zinc-300 hover:text-[#FF6B00] transition-colors"
                      >
                        next command ↵
                      </button>
                      <button
                        type="button"
                        onClick={() => setTerminalLogIndex(0)}
                        className="px-2 py-1 rounded bg-[#14151C] border border-white/10 text-[10px] text-zinc-400 hover:text-white transition-colors"
                      >
                        clear
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Footer Metadata */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06] text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B00]" />
          <span>BSc CS (SYCS) • BNN College, Bhiwandi, Mumbai</span>
        </div>
        <div className="flex items-center gap-6">
          <span>Obsessed with Logic, Performance &amp; Clean UI</span>
          <a
            href="#statement"
            className="text-[#FF6B00] hover:text-[#FFA043] transition-colors flex items-center gap-1"
          >
            <span>Scroll to explore</span>
            <span>&darr;</span>
          </a>
        </div>
      </footer>

      {/* 5. Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          onClick={() => setIsDrawerOpen(false)}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />
        <div
          className={`absolute top-0 right-0 h-full w-[80%] max-w-xs bg-[#0F1015] border-l border-white/10 p-8 flex flex-col justify-between transition-transform duration-300 ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B00]">Navigation</span>
              <button
                type="button"
                onClick={() => setIsDrawerOpen(false)}
                className="text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-2xl font-light text-white hover:text-[#FF6B00] transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10 text-xs font-mono">
            {socialItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                {item.name} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
