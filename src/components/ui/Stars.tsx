import { useEffect, useRef } from 'react';
import { hole } from './hole';

/** Fixed starfield that bends toward the cursor. */
export default function Stars() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!, ctx = c.getContext('2d')!;
    let W = 0, H = 0, raf = 0;
    const stars = Array.from({ length: 160 }, () => ({ x: Math.random(), y: Math.random(), z: 0.3 + Math.random(), s: Math.random() * 1.4 + 0.3 }));
    const resize = () => { W = c.width = innerWidth; H = c.height = innerHeight; };
    resize(); addEventListener('resize', resize);
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      ctx.clearRect(0, 0, W, H);
      for (const s of stars) {
        if (!still) { s.y -= 0.00004 * s.z; if (s.y < 0) s.y = 1; }
        let px = s.x * W, py = s.y * H, a = 0.25 + 0.5 * s.z * 0.6;
        if (hole.active) {
          const dx = hole.x - px, dy = hole.y - py, d = Math.hypot(dx, dy);
          if (d < 240 && d > 0.1) { const k = Math.pow(1 - d / 240, 2) * 70; px += (dx / d) * Math.min(k, d); py += (dy / d) * Math.min(k, d); if (d < 24) a = 0; }
        }
        ctx.fillStyle = `rgba(236,236,230,${a})`;
        ctx.fillRect(px, py, s.s, s.s);
      }
    };
    tick();
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-0" />;
}
