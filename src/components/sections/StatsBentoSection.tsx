import React from 'react';
import StatsBento from '../ui/stats-bento';

export const StatsBentoSection: React.FC = () => {
  return (
    <div id="stats" className="w-full bg-[#07080A] border-t border-white/[0.08] text-[#F4F4F5] font-hn">
      {/* Top Header Eyebrow */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 pt-16 sm:pt-20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#FF6B00] animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF6B00] font-medium font-mono">
              03 // Impact &amp; Engineering Velocity
            </span>
          </div>
          <div className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-mono">
            Key Metrics &bull; Full-Stack &amp; Systems
          </div>
        </div>
      </div>

      <StatsBento className="min-h-0 py-10 sm:py-16 bg-[#07080A]" />
    </div>
  );
};

export default StatsBentoSection;
