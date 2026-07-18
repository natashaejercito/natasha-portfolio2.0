'use client';
import type React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  // Prevent mobile browsers' address-bar show/hide (which fires a resize event)
  // from forcing ScrollTrigger to recalculate trigger positions mid-scroll —
  // that recalculation can snap an in-progress reveal straight to its end state.
  ScrollTrigger.config({ ignoreMobileResize: true });
}

interface RevealProps {
  children: React.ReactNode;
}

export default function Reveal({ children }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: reduced ? 0 : 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
}
