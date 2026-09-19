import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useSmoothScroll() {
  useEffect(() => {
    // Initialize Lenis smooth inertia scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      autoRaf: false, // We drive it from GSAP ticker
    });

    (window as any).__lenis = lenis;

    // Reset scroll to top on page load / refresh
    lenis.scrollTo(0, { immediate: true });

    // Connect Lenis to ScrollTrigger — use wrapper to avoid Lenis args
    // interfering with ScrollTrigger.update internals
    const onLenisScroll = () => {
      ScrollTrigger.update();
    };
    lenis.on('scroll', onLenisScroll);

    // Drive Lenis from GSAP's internal high-precision ticker
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Delayed refresh so pinned sections (EthosSection, FlowArt)
    // that mount after this hook get their calculations correct
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(refreshTimer);
      gsap.ticker.remove(tickerCallback);
      lenis.off('scroll', onLenisScroll);
      lenis.destroy();
    };
  }, []);
}

export default useSmoothScroll;

