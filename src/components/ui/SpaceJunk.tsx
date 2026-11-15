import { useEffect, useRef } from 'react';
import { ART } from './junk-art';
import { hole } from './hole';

type S = {
  x: number; y: number; vx: number; vy: number; rot: number; vr: number; r: number; m: number;
  scale: number; phase: 'free' | 'suck' | 'gone' | 'pop'; t: number; sx: number; sy: number;
  s: number; sv: number; sec: number; // coffee slosh spring; sec = section index
};
const DROPS = 14;

/** Page-level objects. Each lives inside one section, collides with its section-mates, and re-appears in a different random section after the black hole swallows it. */
const SIZE = 0.75; // global shrink factor

export default function SpaceJunk() {
  const els = useRef<(HTMLDivElement | null)[]>([]);
  const drops = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = innerWidth, raf = 0, last = performance.now();
    const onResize = () => { W = innerWidth; };
    addEventListener('resize', onResize);

    type Sec = { top: number; height: number };
    let secs: Sec[] = [];
    const readSecs = () => {
      secs = [...document.querySelectorAll('main > section')].map((n) => {
        const r = n.getBoundingClientRect(); return { top: r.top + scrollY, height: r.height };
      });
    };
    readSecs();
    const k = () => SIZE * (W < 768 ? 0.7 : 1);

    // everything starts "gone" and pops into a random section on the first frames
    const body: S[] = ART.map((a, i) => ({ x: 0, y: 0, vx: 0, vy: 0, rot: Math.random() * 360, vr: (Math.random() - 0.5) * 36,
      r: Math.max(a.w, a.h) * 0.4 * k(), m: 1, scale: 0, phase: 'gone', t: 1.1 - 0.15 * i - Math.random() * 0.3, sx: 0, sy: 0, s: 0, sv: 0, sec: Math.floor(Math.random() * 6) }));
    const dp = Array.from({ length: DROPS }, () => ({ x: 0, y: 0, vx: 0, vy: 0, life: 0 }));
    let dNext = 0;
    const coffeeIdx = ART.findIndex((a) => a.slosh);

    const place = (s: S, i: number, avoid = -1) => {
      const a = ART[i];
      readSecs();
      if (!secs.length) return;
      let sec = Math.floor(Math.random() * secs.length);
      if (avoid >= 0 && secs.length > 1) while (sec === avoid) sec = Math.floor(Math.random() * secs.length);
      s.sec = sec;
      s.r = Math.max(a.w, a.h) * 0.4 * k(); s.m = s.r * s.r;
      const sc = secs[sec];
      s.x = s.r + Math.random() * Math.max(1, W - 2 * s.r);
      s.y = sc.top + s.r + Math.random() * Math.max(1, sc.height - 2 * s.r);
      const ang = Math.random() * 6.28, sp = 18 + Math.random() * 30;
      s.vx = Math.cos(ang) * sp; s.vy = Math.sin(ang) * sp;
    };

    const draw = (i: number) => {
      const s = body[i], a = ART[i], el = els.current[i];
      if (!el) return;
      const kk = k();
      el.style.opacity = s.phase === 'gone' ? '0' : '1';
      el.style.transform = `translate3d(${s.x - a.w / 2}px,${s.y - a.h / 2}px,0) rotate(${s.rot}deg) scale(${s.scale * kk})`;
    };

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      const dt = Math.min(0.05, (now - last) / 1000); last = now;
      readSecs();
      const hx = hole.x + scrollX, hy = hole.y + scrollY;

      body.forEach((s, i) => {
        if (s.phase === 'gone') { s.t += dt; if (s.t > 1.1) { place(s, i, s.sec); s.phase = 'pop'; s.t = 0; s.scale = 0; } return; }
        if (s.phase === 'suck') {
          s.t = Math.min(1, s.t + dt / 0.7); const e = s.t * s.t * s.t;
          s.x = s.sx + (hx - s.sx) * e; s.y = s.sy + (hy - s.sy) * e;
          s.scale = Math.max(0, 1 - e); s.rot += 700 * dt;
          if (s.t >= 1) { s.phase = 'gone'; s.t = 0; hole.bursts++; }
          return;
        }
        if (s.phase === 'pop') {
          s.t = Math.min(1, s.t + dt / 0.6); const u = s.t - 1; s.scale = 1 + 2.9 * u * u * u + 1.9 * u * u;
          if (s.t >= 1) { s.phase = 'free'; s.scale = 1; }
        }
        const pvx = s.vx, pvy = s.vy;
        if (hole.active) {
          const dx = hx - s.x, dy = hy - s.y, d = Math.hypot(dx, dy);
          if (d < 280 && d > 1) { const g = Math.pow(1 - d / 280, 1.5) * 150 * dt; s.vx += (dx / d) * g; s.vy += (dy / d) * g; }
          if (d < 26 && s.phase === 'free') { s.phase = 'suck'; s.t = 0; s.sx = s.x; s.sy = s.y; return; }
        }
        const sp = Math.hypot(s.vx, s.vy);
        if (sp > 130) { s.vx *= 130 / sp; s.vy *= 130 / sp; }
        s.x += s.vx * dt; s.y += s.vy * dt; s.rot += s.vr * dt;
        if (s.x < s.r) { s.x = s.r; s.vx = Math.abs(s.vx); } else if (s.x > W - s.r) { s.x = W - s.r; s.vx = -Math.abs(s.vx); }
        const sc = secs[s.sec];
        if (sc) {
          const lo = sc.top + s.r, hi = sc.top + sc.height - s.r;
          if (s.y < lo) { s.y = lo; s.vy = Math.abs(s.vy); } else if (s.y > hi) { s.y = Math.max(lo, hi); s.vy = -Math.abs(s.vy); }
        }
        (s as S & { dv?: number; dvx?: number; dvy?: number }).dvx = s.vx - pvx; (s as S & { dvy?: number }).dvy = s.vy - pvy;
      });

      // circle-circle elastic collisions
      for (let i = 0; i < body.length; i++) for (let j = i + 1; j < body.length; j++) {
        const a = body[i], b = body[j];
        if (a.sec !== b.sec) continue;
        if ((a.phase !== 'free' && a.phase !== 'pop') || (b.phase !== 'free' && b.phase !== 'pop')) continue;
        const dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy), min = a.r + b.r;
        if (d >= min || d === 0) continue;
        const nx = dx / d, ny = dy / d, ov = min - d;
        a.x -= nx * ov * (b.m / (a.m + b.m)); a.y -= ny * ov * (b.m / (a.m + b.m));
        b.x += nx * ov * (a.m / (a.m + b.m)); b.y += ny * ov * (a.m / (a.m + b.m));
        const rv = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
        if (rv < 0) {
          const imp = (-2 * rv) / (1 / a.m + 1 / b.m);
          a.vx -= (imp / a.m) * nx; a.vy -= (imp / a.m) * ny; b.vx += (imp / b.m) * nx; b.vy += (imp / b.m) * ny;
          a.vr += (Math.random() - 0.5) * 30; b.vr += (Math.random() - 0.5) * 30;
          if (i === coffeeIdx || j === coffeeIdx) {
            const c = i === coffeeIdx ? a : b;
            c.sv += (Math.random() - 0.5) * 400;
            for (let n = 0; n < 4; n++) { const d0 = dp[dNext++ % DROPS]; const an = Math.random() * 6.28, sp = 40 + Math.random() * 70;
              d0.x = c.x; d0.y = c.y; d0.vx = c.vx + Math.cos(an) * sp; d0.vy = c.vy + Math.sin(an) * sp; d0.life = 3.5; }
          }
        }
      }

      // coffee liquid: a spring that keeps the surface level while the mug tumbles
      if (coffeeIdx >= 0) {
        const c = body[coffeeIdx], q = c as S & { dvx?: number; dvy?: number };
        const rad = (c.rot * Math.PI) / 180;
        c.sv += ((q.dvx ?? 0) * Math.cos(rad) + (q.dvy ?? 0) * Math.sin(rad)) * 1.2;
        c.sv += (-c.s * 60 - c.sv * 3.2) * dt; c.s += c.sv * dt; c.s = Math.max(-45, Math.min(45, c.s));
        const liq = els.current[coffeeIdx]?.querySelector('.liq');
        liq?.setAttribute('transform', `rotate(${-c.rot + c.s} 47 62)`);
        if (Math.abs(c.sv) > 260 && Math.random() < 0.2) { const d0 = dp[dNext++ % DROPS]; const an = Math.random() * 6.28;
          d0.x = c.x; d0.y = c.y; d0.vx = c.vx + Math.cos(an) * 60; d0.vy = c.vy + Math.sin(an) * 60; d0.life = 3; }
      }
      dp.forEach((d, i) => {
        const el = drops.current[i]; if (!el) return;
        if (d.life > 0) { d.life -= dt; d.x += d.vx * dt; d.y += d.vy * dt; d.vx *= 0.995; d.vy *= 0.995;
          el.style.opacity = String(Math.min(1, d.life)); el.style.transform = `translate3d(${d.x}px,${d.y}px,0)`; } else el.style.opacity = '0';
      });
      body.forEach((_, i) => draw(i));
    };

    if (still) {
      const t = setTimeout(() => { body.forEach((s, i) => { place(s, i); s.phase = 'free'; s.scale = 1; s.vx = s.vy = 0; draw(i); }); }, 400);
      return () => { clearTimeout(t); removeEventListener('resize', onResize); };
    }
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', onResize); };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
      {ART.map((a, i) => (
        <div key={a.id} ref={(el) => { els.current[i] = el; }} style={{ position: 'absolute', left: 0, top: 0, width: a.w, height: a.h, willChange: 'transform' }}>{a.node}</div>
      ))}
      {Array.from({ length: DROPS }, (_, i) => (
        <div key={i} ref={(el) => { drops.current[i] = el; }} className="absolute left-0 top-0 h-2 w-2 rounded-full opacity-0" style={{ background: '#5a3216' }} />
      ))}
    </div>
  );
}
