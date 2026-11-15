import { useEffect, useRef } from 'react';
import { hole } from './hole';

/** The cursor: a black hole that grows as it holds something and flares when it swallows it. */
export default function BlackHole() {
  const root = useRef<HTMLDivElement>(null);
  const pulse = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!matchMedia('(pointer: fine)').matches) return;
    let x = -100, y = -100, lvl = 0, bursts = hole.bursts, raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      x += (hole.x - x) * 0.35; y += (hole.y - y) * 0.35;
      lvl += (hole.level - lvl) * 0.12; hole.level = 0;
      const r = root.current!;
      r.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%) scale(${1 + lvl * 1.8})`;
      r.style.opacity = hole.active ? '1' : '0';
      if (hole.bursts !== bursts) {
        bursts = hole.bursts;
        pulse.current?.animate([{ transform: 'scale(1)', opacity: 0.9 }, { transform: 'scale(6)', opacity: 0 }], { duration: 800, easing: 'ease-out' });
      }
    };
    tick();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={root} aria-hidden className="hole-cursor pointer-events-none fixed left-0 top-0 z-[100] h-16 w-16 opacity-0 transition-opacity">
      <div ref={pulse} className="absolute inset-3 rounded-full border-2 border-acid opacity-0" />
      <div className="absolute inset-0 rounded-full blur-[1px]" style={{
        background: 'conic-gradient(from 0deg, transparent 0%, #d4ff3a 25%, #8b5cff 55%, transparent 75%)',
        WebkitMask: 'radial-gradient(circle, transparent 50%, #000 54%, #000 68%, transparent 72%)',
        mask: 'radial-gradient(circle, transparent 50%, #000 54%, #000 68%, transparent 72%)',
        animation: 'spin 2.4s linear infinite' }} />
      <div className="absolute inset-[18px] rounded-full bg-black shadow-[0_0_18px_6px_rgba(139,92,255,0.6)]" />
    </div>
  );
}
