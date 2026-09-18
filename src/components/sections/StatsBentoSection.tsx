import React from 'react';
import StatsBento from '../ui/stats-bento';

export const StatsBentoSection: React.FC = () => {
  return (
    <div id="stats" className="w-full bg-black border-t border-white/10 text-white font-hn">
      {/* Top Header Eyebrow */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 pt-16 sm:pt-20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#e2e0d8] font-medium font-mono">
              03 // Impact &amp; Engineering Velocity
            </span>
          </div>
          <div className="text-xs uppercase tracking-[0.2em] text-[#8E8E93] font-mono">
            Key Metrics &bull; Full-Stack &amp; Systems
          </div>
        </div>
      </div>

      <StatsBento className="min-h-0 py-10 sm:py-16 bg-black" />
    </div>
  );
};

export default StatsBentoSection;
