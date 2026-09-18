import React from "react";
import ScrollExpand from "../ui/scroll-expand";
import { Hero } from "../Hero";

export const ScrollExpandHero: React.FC = () => {
  return (
    <section className="relative w-full bg-black select-none">
      <ScrollExpand
        title=""
        scrollHint=""
        startWidth={44}
        startHeight={58}
        startRadius={28}
        endRadius={0}
        scrollDistance={1.0}
        holdDistance={0.1}
        overlayScrim={0}
        useWindowScroll={true}
      >
        <Hero />
      </ScrollExpand>
    </section>
  );
};

export default ScrollExpandHero;
