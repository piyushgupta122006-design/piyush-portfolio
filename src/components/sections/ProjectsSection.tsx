import React from 'react';
import FlowArt, { FlowSection } from '../ui/story-scroll';
import { Github, ArrowUpRight, Layers, Terminal, Cpu, ShieldCheck } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <div id="projects" className="w-full bg-[#F5F0E8] text-black font-hn">
      <FlowArt aria-label="Featured Engineering Projects">
        {/* ========================================================================= */}
        {/* Project 01: FlashCrush (100% Client-Side File Studio & Wasm AI) */}
        {/* ========================================================================= */}
        <FlowSection
          aria-label="FlashCrush File Studio"
          style={{ backgroundColor: '#F5F0E8', color: '#0a0a0a' }}
        >
          {/* Top Classification Eyebrow */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/15 pb-4">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-black/70">
                01 // Flagship Application &mdash; 100% Client-Side File Studio
              </p>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-black/40">
              WebAssembly &bull; On-Device AI &bull; PWA
            </span>
          </div>

          {/* Main Content Layout */}
          <div className="my-auto py-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest bg-blue-600/10 text-blue-700 border border-blue-600/20 font-semibold">
                    Production System
                  </span>
                  <span className="text-[11px] font-mono text-black/40">Lead Engineer &bull; 2026</span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-[4.2rem] font-black uppercase tracking-tight leading-[0.98] font-hn text-black">
                  FLASHCRUSH
                  <br />
                  <span className="text-black/40">FILE</span> STUDIO
                </h2>

                <p className="mt-5 max-w-xl text-sm sm:text-base text-black/75 leading-relaxed font-normal">
                  A high-performance, 100% client-side file manipulation powerhouse that compresses, converts, and processes PDFs &amp; images locally using WebAssembly and on-device AI. Guarantees complete data privacy with zero server uploads, offline PWA capability, and seamless Google Drive sync.
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap items-center gap-2 mt-6">
                  {['React.js', 'Vite', 'WebAssembly (Wasm)', 'ONNX AI', 'Tesseract OCR', 'Google Drive API', 'PWA', 'IndexedDB'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-black/[0.04] border border-black/10 text-black/80 font-medium"
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white font-semibold text-xs uppercase tracking-wider hover:bg-black/85 hover:scale-105 transition-all shadow-md"
                  >
                    <span>Launch Live App</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://github.com/piyushgupta122006-design/flash-crush-files"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/20 text-black text-xs uppercase tracking-wider hover:border-black hover:bg-black/5 transition-all font-medium"
                  >
                    <span>GitHub Code</span>
                    <Github className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: High-Fidelity 3D Product Showcase Mockup */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="w-full rounded-2xl overflow-hidden border border-black/10 shadow-2xl bg-black/5 group">
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-black/15 text-xs text-black/65">
            <div>
              <span className="text-black font-semibold">01 / Zero Server Uploads:</span> All processing runs locally inside browser WebAssembly workers.
            </div>
            <div>
              <span className="text-black font-semibold">02 / 17+ Integrated Tools:</span> PDF compression, OCR, merging, format conversion, and passport sizing.
            </div>
            <div>
              <span className="text-black font-semibold">03 / Offline First PWA:</span> Fully functional offline via Service Workers and IndexedDB history.
            </div>
          </div>
        </FlowSection>

        {/* ========================================================================= */}
        {/* Project 02: BNN CS Study Hub (Academic Digital Vault) */}
        {/* ========================================================================= */}
        <FlowSection
          aria-label="BNN CS Study Hub"
          style={{ backgroundColor: '#ECE7DF', color: '#0a0a0a' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/15 pb-4">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-black/70">
                02 // Academic Platform &mdash; Digital Vault (107+ Active Students)
              </p>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-black/40">
              Live &bull; FYCS &amp; SYCS Curriculum
            </span>
          </div>

          <div className="my-auto py-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest bg-emerald-600/10 text-emerald-800 border border-emerald-600/20 font-semibold">
                    Academic Vault
                  </span>
                  <span className="text-[11px] font-mono text-black/40">Team: Rishikesh Sahu &bull; Piyush Gupta</span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-[4.2rem] font-black uppercase tracking-tight leading-[0.98] font-hn text-black">
                  BNN CS
                  <br />
                  <span className="text-emerald-800/70">STUDY</span> HUB
                </h2>

                <p className="mt-5 max-w-xl text-sm sm:text-base text-black/75 leading-relaxed font-normal">
                  A centralized digital repository and interactive academic portal built for Mumbai University CS undergraduates. Serves 107+ active students with 4 semesters of curated syllabus materials, in-browser PDF reader, and real-time Firestore analytics.
                </p>

                <div className="flex flex-wrap items-center gap-2 mt-6">
                  {['React 19', 'Vite 7', 'Firebase Firestore', 'Firebase Auth', 'Tailwind CSS', 'Framer Motion', 'PWA'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-black/[0.04] border border-black/10 text-black/80 font-medium"
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white font-semibold text-xs uppercase tracking-wider hover:bg-black/85 hover:scale-105 transition-all shadow-md"
                  >
                    <span>Launch Study Hub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/5 border border-black/10 text-black/60 text-xs font-mono uppercase tracking-wider">
                    <span>Academic Private Repo</span>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="w-full rounded-2xl overflow-hidden border border-black/10 shadow-md bg-white p-6 sm:p-8 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-mono text-black/50">
                    <span className="font-bold text-black">STUDY HUB VAULT</span>
                    <span className="text-emerald-600 font-bold">&bull; REAL-TIME FIRESTORE</span>
                  </div>
                  <div className="my-6 text-center">
                    <div className="text-5xl sm:text-6xl font-black tracking-tight text-black">107+</div>
                    <div className="text-xs uppercase tracking-widest text-black/60 mt-1 font-mono">Active CS Undergraduates</div>
                  </div>
                  <div className="space-y-2 border-t border-black/10 pt-4 text-xs text-black/70 font-mono">
                    <div className="flex justify-between">
                      <span>Coverage:</span>
                      <span className="font-bold text-black">4 Semesters (FYCS + SYCS)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Auth Engine:</span>
                      <span className="font-bold text-black">Google OAuth &amp; RBAC</span>
                    </div>
                    <div className="flex justify-between">
                      <span>PDF Reader Delay:</span>
                      <span className="font-bold text-emerald-600">0 ms (Client Render)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-black/15 text-xs text-black/65">
            <div>
              <span className="text-black font-semibold">01 / Semester-Wise Vault:</span> Syllabus notes, unit manuals, assignments &amp; university PYQs.
            </div>
            <div>
              <span className="text-black font-semibold">02 / Real-Time Analytics:</span> Firestore atomic counters track active student resource downloads.
            </div>
            <div>
              <span className="text-black font-semibold">03 / Mobile PWA:</span> Offline document caching ensures seamless study access during exam preparation.
            </div>
          </div>
        </FlowSection>

        {/* ========================================================================= */}
        {/* Project 03: StressSense (Biometric Telemetry) */}
        {/* ========================================================================= */}
        <FlowSection
          aria-label="StressSense Biometric Dashboard"
          style={{ backgroundColor: '#F7F3ED', color: '#0a0a0a' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/15 pb-4">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-amber-600 animate-pulse" />
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-black/70">
                03 // Telemetry Engineering &mdash; Biometric Stress Monitoring
              </p>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-black/40">
              Biometric Telemetry &bull; Interactive Graphing
            </span>
          </div>

          <div className="my-auto py-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest bg-amber-600/10 text-amber-800 border border-amber-600/20 font-semibold">
                    Prototype Engine
                  </span>
                  <span className="text-[11px] font-mono text-black/40">Full-Stack Prototype</span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-[4.2rem] font-black uppercase tracking-tight leading-[0.98] font-hn text-black">
                  STRESS
                  <br />
                  <span className="text-amber-800/70">SENSE</span> TELEMETRY
                </h2>

                <p className="mt-5 max-w-xl text-sm sm:text-base text-black/75 leading-relaxed font-normal">
                  Real-time physiological telemetry dashboard tracking GSR, pulse metrics, and stress thresholds. Features interactive telemetry graphing, stress analytics, and cross-platform hardware connectivity.
                </p>

                <div className="flex flex-wrap items-center gap-2 mt-6">
                  {['JavaScript', 'Telemetry UI', 'Web Prototype', 'Data Visualization', 'Hardware API'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-black/[0.04] border border-black/10 text-black/80 font-medium"
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white font-semibold text-xs uppercase tracking-wider hover:bg-black/85 hover:scale-105 transition-all shadow-md"
                  >
                    <span>View StressSense</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="w-full rounded-2xl overflow-hidden border border-black/10 shadow-md bg-white p-6 sm:p-8 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-mono text-black/50">
                    <span className="font-bold text-black">TELEMETRY STREAM</span>
                    <span className="text-emerald-600 font-bold">&bull; ACTIVE SENSOR</span>
                  </div>
                  <div className="my-6 text-center">
                    <div className="text-5xl sm:text-6xl font-black tracking-tight text-black">72 BPM</div>
                    <div className="text-xs uppercase tracking-widest text-black/60 mt-1 font-mono">GSR &amp; Pulse Telemetry</div>
                  </div>
                  <div className="space-y-2 border-t border-black/10 pt-4 text-xs text-black/70 font-mono">
                    <div className="flex justify-between">
                      <span>Threshold:</span>
                      <span className="font-bold text-black">Optimal Baseline</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Latency:</span>
                      <span className="font-bold text-emerald-600">&lt; 15 ms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-black/15 text-xs text-black/65">
            <div>
              <span className="text-black font-semibold">01 / Biometric Tracking:</span> Live GSR and pulse telemetry graphing with responsive Canvas charts.
            </div>
            <div>
              <span className="text-black font-semibold">02 / Threshold Alerts:</span> Configurable stress limits notifying users in real-time.
            </div>
            <div>
              <span className="text-black font-semibold">03 / Cross-Platform:</span> Web prototype with Android native bridge in active development.
            </div>
          </div>
        </FlowSection>

        {/* ========================================================================= */}
        {/* Project 04: Quick QR Tool */}
        {/* ========================================================================= */}
        <FlowSection
          aria-label="Quick QR Tool Utility"
          style={{ backgroundColor: '#F2EDE4', color: '#0a0a0a' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/15 pb-4">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-purple-600 animate-pulse" />
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-black/70">
                04 // Developer Utility &mdash; Client-Side QR Engine
              </p>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-black/40">
              Instant Raster Export &bull; Open Source
            </span>
          </div>

          <div className="my-auto py-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest bg-purple-600/10 text-purple-800 border border-purple-600/20 font-semibold">
                    Open Source
                  </span>
                  <span className="text-[11px] font-mono text-black/40">Frontend Developer</span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-[4.2rem] font-black uppercase tracking-tight leading-[0.98] font-hn text-black">
                  QUICK QR
                  <br />
                  <span className="text-purple-800/70">GENERATOR</span>
                </h2>

                <p className="mt-5 max-w-xl text-sm sm:text-base text-black/75 leading-relaxed font-normal">
                  Lightweight client-side QR generation engine with customizable color palettes, instant SVG/PNG raster downloads, and dynamic URL encoding without external dependencies.
                </p>

                <div className="flex flex-wrap items-center gap-2 mt-6">
                  {['JavaScript', 'REST API', 'Async/Await', 'Canvas API', 'SVG Export'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-black/[0.04] border border-black/10 text-black/80 font-medium"
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white font-semibold text-xs uppercase tracking-wider hover:bg-black/85 hover:scale-105 transition-all shadow-md"
                  >
                    <span>Launch QR Tool</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://github.com/piyushgupta122006-design/QR-Generator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/20 text-black text-xs uppercase tracking-wider hover:border-black hover:bg-black/5 transition-all font-medium"
                  >
                    <span>GitHub Code</span>
                    <Github className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="w-full rounded-2xl overflow-hidden border border-black/10 shadow-md bg-white p-6 sm:p-8 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-mono text-black/50">
                    <span className="font-bold text-black">QR VECTOR STUDIO</span>
                    <span className="text-purple-600 font-bold">&bull; INSTANT</span>
                  </div>
                  <div className="my-6 text-center">
                    <div className="text-5xl sm:text-6xl font-black tracking-tight text-black">SVG / PNG</div>
                    <div className="text-xs uppercase tracking-widest text-black/60 mt-1 font-mono">Lossless Raster &amp; Vector Downloads</div>
                  </div>
                  <div className="space-y-2 border-t border-black/10 pt-4 text-xs text-black/70 font-mono">
                    <div className="flex justify-between">
                      <span>Client Execution:</span>
                      <span className="font-bold text-emerald-600">100% In-Browser</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Custom Color Palettes:</span>
                      <span className="font-bold text-black">HEX &amp; HSL Supported</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-black/15 text-xs text-black/65">
            <div>
              <span className="text-black font-semibold">01 / Instant Vector Output:</span> Clean SVG vector paths ready for print and web integration.
            </div>
            <div>
              <span className="text-black font-semibold">02 / Zero Dependencies:</span> Vanilla browser DOM APIs without third-party bloat.
            </div>
            <div>
              <span className="text-black font-semibold">03 / GitHub Pages:</span> Continuous delivery deployment directly from GitHub repository.
            </div>
          </div>
        </FlowSection>
      </FlowArt>
    </div>
  );
};

export default ProjectsSection;
