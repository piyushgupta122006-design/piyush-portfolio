import React from 'react';
import FlowArt, { FlowSection } from '../ui/story-scroll';
import { Github, ArrowUpRight, Layers, Terminal, Cpu, ShieldCheck, Sparkles, Zap, CheckCircle2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <div id="projects" className="w-full bg-[#07080A] text-[#F4F4F5] font-hn">
      <FlowArt aria-label="Featured Engineering Projects">
        {/* ========================================================================= */}
        {/* Project 01: FlashCrush (100% Client-Side File Studio & Wasm AI) - FLAGSHIP */}
        {/* ========================================================================= */}
        <FlowSection
          aria-label="FlashCrush File Studio"
          style={{ backgroundColor: '#090A0F', color: '#F4F4F5' }}
        >
          {/* Top Classification Eyebrow */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#FF6B00] animate-pulse" />
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#FF6B00] font-semibold">
                01 // Flagship Masterpiece &mdash; 100% Client-Side File Studio
              </p>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400">
              WebAssembly SIMD &bull; ONNX Vision &bull; Offline PWA
            </span>
          </div>

          {/* Main Content Layout */}
          <div className="my-auto py-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest bg-[#FF6B00]/15 text-[#FFA043] border border-[#FF6B00]/30 font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Solo Innovation</span>
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">Lead Architect &bull; 2026</span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-[4.2rem] font-black uppercase tracking-tight leading-[0.98] font-hn text-white">
                  FLASHCRUSH
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FFA043] to-[#F59E0B]">
                    FILE STUDIO
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                  A high-performance, 100% client-side file manipulation powerhouse that compresses, converts, and processes PDFs &amp; images locally using WebAssembly and on-device AI. Guarantees complete data privacy with zero server uploads, offline PWA capability, and seamless Google Drive sync.
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap items-center gap-2 mt-6">
                  {['React 19', 'Vite', 'WebAssembly (Wasm)', 'ONNX AI', 'Tesseract OCR', 'Google Drive API', 'PWA', 'IndexedDB'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-[#14151C] border border-white/10 text-zinc-200 font-medium hover:border-[#FF6B00]/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <a
                    href="https://piyush-flash-crush-files.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF6B00] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#FFA043] transition-all shadow-[0_0_25px_rgba(255,107,0,0.35)] hover:scale-105"
                  >
                    <span>Launch Live Studio</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://github.com/piyushgupta122006-design/flash-crush-files"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#14151C] border border-white/15 text-white text-xs uppercase tracking-wider hover:border-[#FF6B00]/40 hover:bg-[#1C1E26] transition-all font-medium"
                  >
                    <span>GitHub Repository</span>
                    <Github className="w-3.5 h-3.5 text-zinc-300" />
                  </a>
                </div>
              </div>

              {/* Right Column: High-Fidelity 3D Product Showcase Mockup */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="w-full rounded-2xl overflow-hidden border border-[#FF6B00]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(255,107,0,0.15)] bg-[#14151C] group">
                  <img
                    src="/assets/projects/flashcrush-mockup.png"
                    alt="FlashCrush 100% Client-Side File Studio 3D Showcase"
                    className="w-full h-auto max-h-[380px] sm:max-h-[440px] object-cover object-center group-hover:scale-[1.04] transition-transform duration-500 rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Highlights Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
            <div className="flex items-start gap-2">
              <span className="text-[#FF6B00] font-bold">01 /</span>
              <span><strong className="text-white">Zero Server Uploads:</strong> All processing executes in-memory via client WebAssembly workers.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#FF6B00] font-bold">02 /</span>
              <span><strong className="text-white">17+ Client Tools:</strong> PDF compression, OCR, merging, format conversion, and ONNX AI.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#FF6B00] font-bold">03 /</span>
              <span><strong className="text-white">Offline-First PWA:</strong> Fully operational without internet via Service Workers &amp; IndexedDB.</span>
            </div>
          </div>
        </FlowSection>

        {/* ========================================================================= */}
        {/* Project 02: BNN CS Study Hub (Academic Digital Vault) */}
        {/* ========================================================================= */}
        <FlowSection
          aria-label="BNN CS Study Hub"
          style={{ backgroundColor: '#0B0D13', color: '#F4F4F5' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#10B981] font-semibold">
                02 // Academic Platform &mdash; Digital Vault (107+ Active Students)
              </p>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400">
              Live &bull; FYCS &amp; SYCS Curriculum
            </span>
          </div>

          <div className="my-auto py-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest bg-[#10B981]/15 text-[#34D399] border border-[#10B981]/30 font-semibold">
                    Academic Vault
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">Collaborative Build &bull; Team: Rishikesh Sahu (Lead) &bull; Piyush Gupta (Co-Dev)</span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-[4.2rem] font-black uppercase tracking-tight leading-[0.98] font-hn text-white">
                  BNN CS
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#06B6D4]">
                    STUDY HUB
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                  A centralized digital repository and interactive academic portal built for Mumbai University CS undergraduates. Serves 107+ active students with 4 semesters of curated syllabus materials, in-browser PDF reader, and real-time Firestore analytics.
                </p>

                <div className="flex flex-wrap items-center gap-2 mt-6">
                  {['React 19', 'Vite 7', 'Firebase Firestore', 'Firebase Auth', 'Tailwind CSS', 'Framer Motion', 'PWA'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-[#14151C] border border-white/10 text-zinc-200 font-medium hover:border-[#10B981]/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <a
                    href="https://fycs-study-hub.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#10B981] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#34D399] transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105"
                  >
                    <span>Launch Study Hub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <span className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#14151C] border border-white/10 text-zinc-400 text-xs font-mono uppercase tracking-wider">
                    <span>Academic Student Portal</span>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0F1015] p-6 sm:p-8 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="font-bold text-white">STUDY HUB VAULT</span>
                    <span className="text-[#10B981] font-bold">&bull; REAL-TIME FIRESTORE</span>
                  </div>
                  <div className="my-6 text-center">
                    <div className="text-5xl sm:text-6xl font-black tracking-tight text-white">107+</div>
                    <div className="text-xs uppercase tracking-widest text-[#10B981] mt-1 font-mono">Active CS Undergraduates</div>
                  </div>
                  <div className="space-y-2 border-t border-white/10 pt-4 text-xs text-zinc-300 font-mono">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Coverage:</span>
                      <span className="font-bold text-white">4 Semesters (FYCS + SYCS)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Auth Engine:</span>
                      <span className="font-bold text-white">Google OAuth &amp; RBAC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">PDF Reader Delay:</span>
                      <span className="font-bold text-[#10B981]">0 ms (Client Render)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
            <div className="flex items-start gap-2">
              <span className="text-[#10B981] font-bold">01 /</span>
              <span><strong className="text-white">Semester Vault:</strong> Syllabus notes, unit manuals, and University PYQs.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#10B981] font-bold">02 /</span>
              <span><strong className="text-white">Real-Time Analytics:</strong> Firestore atomic counters tracking resource utilization.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#10B981] font-bold">03 /</span>
              <span><strong className="text-white">Mobile PWA:</strong> Offline syllabus caching during exams.</span>
            </div>
          </div>
        </FlowSection>

        {/* ========================================================================= */}
        {/* Project 03: StressSense (Biometric Telemetry) */}
        {/* ========================================================================= */}
        <FlowSection
          aria-label="StressSense Biometric Dashboard"
          style={{ backgroundColor: '#0B0B10', color: '#F4F4F5' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#F59E0B] animate-pulse" />
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#F59E0B] font-semibold">
                03 // Telemetry Engineering &mdash; Biometric Stress Monitoring
              </p>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400">
              Biometric Telemetry &bull; Interactive Graphing
            </span>
          </div>

          <div className="my-auto py-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30 font-semibold">
                    Prototype Engine
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">Full-Stack Prototype</span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-[4.2rem] font-black uppercase tracking-tight leading-[0.98] font-hn text-white">
                  STRESS
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#FFA043] to-[#FF6B00]">
                    SENSE TELEMETRY
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                  Real-time physiological telemetry dashboard tracking GSR, pulse metrics, and stress thresholds. Features interactive telemetry graphing, stress analytics, and cross-platform hardware connectivity.
                </p>

                <div className="flex flex-wrap items-center gap-2 mt-6">
                  {['JavaScript', 'Telemetry UI', 'Web Prototype', 'Data Visualization', 'Hardware API'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-[#14151C] border border-white/10 text-zinc-200 font-medium hover:border-[#F59E0B]/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <a
                    href="https://stress-sense-pvs.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F59E0B] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#FFA043] transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-105"
                  >
                    <span>View StressSense</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0F1015] p-6 sm:p-8 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="font-bold text-white">TELEMETRY STREAM</span>
                    <span className="text-[#10B981] font-bold">&bull; ACTIVE SENSOR</span>
                  </div>
                  <div className="my-6 text-center">
                    <div className="text-5xl sm:text-6xl font-black tracking-tight text-white">72 BPM</div>
                    <div className="text-xs uppercase tracking-widest text-[#F59E0B] mt-1 font-mono">GSR &amp; Pulse Telemetry</div>
                  </div>
                  <div className="space-y-2 border-t border-white/10 pt-4 text-xs text-zinc-300 font-mono">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Threshold:</span>
                      <span className="font-bold text-white">Optimal Baseline</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Latency:</span>
                      <span className="font-bold text-[#10B981]">&lt; 15 ms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
            <div className="flex items-start gap-2">
              <span className="text-[#F59E0B] font-bold">01 /</span>
              <span><strong className="text-white">Biometric Tracking:</strong> Live GSR &amp; pulse charting with responsive Canvas.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#F59E0B] font-bold">02 /</span>
              <span><strong className="text-white">Threshold Alerts:</strong> Configurable stress limits notifying users in real-time.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#F59E0B] font-bold">03 /</span>
              <span><strong className="text-white">Hardware Bridge:</strong> Interactive cross-platform sensor telemetry protocol.</span>
            </div>
          </div>
        </FlowSection>

        {/* ========================================================================= */}
        {/* Project 04: Quick QR Tool */}
        {/* ========================================================================= */}
        <FlowSection
          aria-label="Quick QR Tool Utility"
          style={{ backgroundColor: '#0A0B10', color: '#F4F4F5' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#8B5CF6] animate-pulse" />
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#8B5CF6] font-semibold">
                04 // Developer Utility &mdash; Client-Side QR Engine
              </p>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400">
              Instant Raster Export &bull; Open Source
            </span>
          </div>

          <div className="my-auto py-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest bg-[#8B5CF6]/15 text-[#A78BFA] border border-[#8B5CF6]/30 font-semibold">
                    Open Source
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">Frontend Developer</span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-[4.2rem] font-black uppercase tracking-tight leading-[0.98] font-hn text-white">
                  QUICK QR
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#C4B5FD]">
                    GENERATOR
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                  Lightweight client-side QR generation engine with customizable color palettes, instant SVG/PNG raster downloads, and dynamic URL encoding without external dependencies.
                </p>

                <div className="flex flex-wrap items-center gap-2 mt-6">
                  {['JavaScript', 'REST API', 'Async/Await', 'Canvas API', 'SVG Export'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-[#14151C] border border-white/10 text-zinc-200 font-medium hover:border-[#8B5CF6]/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <a
                    href="https://piyushgupta122006-design.github.io/QR-Generator/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B5CF6] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#7C3AED] transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:scale-105"
                  >
                    <span>Launch QR Tool</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://github.com/piyushgupta122006-design/QR-Generator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#14151C] border border-white/15 text-white text-xs uppercase tracking-wider hover:border-[#8B5CF6]/40 hover:bg-[#1C1E26] transition-all font-medium"
                  >
                    <span>GitHub Code</span>
                    <Github className="w-3.5 h-3.5 text-zinc-300" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0F1015] p-6 sm:p-8 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="font-bold text-white">QR VECTOR STUDIO</span>
                    <span className="text-[#8B5CF6] font-bold">&bull; INSTANT</span>
                  </div>
                  <div className="my-6 text-center">
                    <div className="text-5xl sm:text-6xl font-black tracking-tight text-white">SVG / PNG</div>
                    <div className="text-xs uppercase tracking-widest text-[#8B5CF6] mt-1 font-mono">Lossless Vector Downloads</div>
                  </div>
                  <div className="space-y-2 border-t border-white/10 pt-4 text-xs text-zinc-300 font-mono">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Client Execution:</span>
                      <span className="font-bold text-[#10B981]">100% In-Browser</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Custom Colors:</span>
                      <span className="font-bold text-white">HEX &amp; HSL Supported</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
            <div className="flex items-start gap-2">
              <span className="text-[#8B5CF6] font-bold">01 /</span>
              <span><strong className="text-white">Instant Vectors:</strong> Clean SVG vector paths ready for print and web.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#8B5CF6] font-bold">02 /</span>
              <span><strong className="text-white">Zero Bloat:</strong> Vanilla browser DOM APIs without third-party frameworks.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#8B5CF6] font-bold">03 /</span>
              <span><strong className="text-white">GitHub Pages:</strong> Direct continuous deployment from source repository.</span>
            </div>
          </div>
        </FlowSection>
      </FlowArt>
    </div>
  );
};

export default ProjectsSection;
