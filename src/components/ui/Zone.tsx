import { createContext, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { hole } from './hole';

/** Seconds of continuous hovering before the black hole swallows an element. */
export const HOLD_MS = 6000;

type Body = {
  el: HTMLElement; calm: boolean; sticky: boolean; speed: number; focus: boolean;
  placed: boolean; x: number; y: number; w: number; h: number; vx: number; vy: number;
  rot: number; scale: number; hold: number; phase: 'free' | 'suck' | 'gone' | 'pop'; t: number;
  sx: number; sy: number; hx: number; hy: number;
};
type Ctx = { engine: boolean; add: (b: Body) => void; remove: (b: Body) => void };
const ZoneCtx = createContext<Ctx>({ engine: false, add() {}, remove() {} });

const easeOutBack = (t: number) => 1 + 2.9 * Math.pow(t - 1, 3) + 1.9 * Math.pow(t - 1, 2);

export function Zone({ id, height, className = '', children }: { id?: string; height: string; className?: string; children: ReactNode }) {
  const [engine, setEngine] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const bodies = useRef(new Set<Body>());

  useEffect(() => {
    const mq = matchMedia('(min-width: 768px)'), rm = matchMedia('(prefers-reduced-motion: reduce)');
    const f = () => setEngine(mq.matches && !rm.matches);
    f(); mq.addEventListener('change', f); rm.addEventListener('change', f);
    return () => { mq.removeEventListener('change', f); rm.removeEventListener('change', f); };
  }, []);

  useEffect(() => {
    if (!engine) return;
    const el = box.current!;
    const size = { w: el.clientWidth, h: el.clientHeight };
    let visible = false, raf = 0, last = performance.now(), frame = 0;
    const ro = new ResizeObserver(() => { size.w = el.clientWidth; size.h = el.clientHeight; });
    ro.observe(el);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(el);

    const place = (b: Body) => {
      b.w = b.el.offsetWidth; b.h = b.el.offsetHeight;
      let tries = 0, ok = false;
      do {
        b.x = Math.random() * Math.max(1, size.w - b.w);
        b.y = Math.random() * Math.max(1, size.h - b.h);
        ok = ![...bodies.current].some((o) => o !== b && o.placed && o.phase !== 'gone' &&
          b.x < o.x + o.w + 14 && b.x + b.w + 14 > o.x && b.y < o.y + o.h + 14 && b.y + b.h + 14 > o.y);
      } while (!ok && ++tries < 80);
      const a = Math.random() * Math.PI * 2, sp = (14 + Math.random() * 16) * b.speed;
      b.vx = Math.cos(a) * sp; b.vy = Math.sin(a) * sp;
      b.rot = (Math.random() - 0.5) * 5; b.placed = true;
    };

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      const dt = Math.min(0.05, (now - last) / 1000); last = now;
      if (!visible || size.w === 0) return;
      frame++;
      const rect = el.getBoundingClientRect();
      const hx = hole.x - rect.left, hy = hole.y - rect.top;
      const all = [...bodies.current];

      for (const b of all) {
        if (!b.placed) { place(b); b.phase = 'pop'; b.t = 0; b.scale = 0; b.el.style.opacity = '1'; }
        if (frame % 30 === 0) { b.w = b.el.offsetWidth; b.h = b.el.offsetHeight; }
        const cx = b.x + b.w / 2, cy = b.y + b.h / 2;
        const hovered = hole.active && b.phase !== 'gone' && b.phase !== 'suck' &&
          hx >= b.x && hx <= b.x + b.w && hy >= b.y && hy <= b.y + b.h;
        let p = 0;

        if (b.phase === 'gone') {
          b.t += dt;
          if (b.t > 0.9) { place(b); b.phase = 'pop'; b.t = 0; b.scale = 0; b.hold = 0; b.el.style.opacity = '1'; }
        } else if (b.phase === 'suck') {
          b.t = Math.min(1, b.t + dt / 0.75);
          const e = b.t * b.t * b.t;
          const tx = b.hx - b.w / 2, ty = b.hy - b.h / 2;
          b.x = b.sx + (tx - b.sx) * e; b.y = b.sy + (ty - b.sy) * e;
          b.scale = Math.max(0, 1 - e); b.rot += 900 * dt * (0.3 + b.t);
          p = 1;
          if (b.t >= 1) { b.phase = 'gone'; b.t = 0; b.el.style.opacity = '0'; hole.bursts++; }
        } else {
          if (b.phase === 'pop') {
            b.t = Math.min(1, b.t + dt / 0.6);
            b.scale = easeOutBack(b.t);
            if (b.t >= 1) { b.phase = 'free'; b.scale = 1; }
          }
          const frozen = b.calm && (hovered || b.focus);
          if (hovered && !b.sticky && b.phase === 'free') b.hold += dt * 1000; else b.hold = Math.max(0, b.hold - dt * 1500);
          p = b.hold / HOLD_MS;

          if (hovered && !b.sticky) {           // clutched by the hole: drift toward it, tremble
            b.vx += ((hx - cx) * 0.35 - b.vx) * 0.08; b.vy += ((hy - cy) * 0.35 - b.vy) * 0.08;
            b.rot += Math.sin(now * 0.04) * p * 0.6;
          } else if (hole.active && !frozen) {  // faint gravity well
            const dx = hx - cx, dy = hy - cy, d = Math.hypot(dx, dy);
            if (d < 300 && d > 1) { const g = (1 - d / 300) * 40 * dt; b.vx += (dx / d) * g; b.vy += (dy / d) * g; }
          }
          const max = 60 * b.speed; const sp = Math.hypot(b.vx, b.vy);
          if (sp > max && !hovered) { b.vx *= max / sp; b.vy *= max / sp; }
          if (!frozen) {
            b.x += b.vx * dt; b.y += b.vy * dt;
            if (b.x < 0) { b.x = 0; b.vx = Math.abs(b.vx); }
            if (b.x > size.w - b.w) { b.x = size.w - b.w; b.vx = -Math.abs(b.vx); }
            if (b.y < 0) { b.y = 0; b.vy = Math.abs(b.vy); }
            if (b.y > size.h - b.h) { b.y = size.h - b.h; b.vy = -Math.abs(b.vy); }
          }
          if (b.phase === 'free') b.scale = 1 - p * 0.12;
          if (p > 0 && p < 1 && b.phase === 'free') b.rot *= 0.995;
          if (b.phase === 'free' && b.hold >= HOLD_MS) {
            b.phase = 'suck'; b.t = 0; b.sx = b.x; b.sy = b.y; b.hx = hx; b.hy = hy;
          }
        }
        if (p > hole.level) hole.level = p;
        b.el.style.setProperty('--p', p.toFixed(3));
        b.el.style.zIndex = hovered ? '5' : '1';
        b.el.style.transform = `translate3d(${b.x}px,${b.y}px,0) rotate(${b.rot}deg) scale(${b.scale})`;
      }

      const live = all.filter((b) => b.placed && (b.phase === 'free' || b.phase === 'pop'));
      for (let i = 0; i < live.length; i++) for (let j = i + 1; j < live.length; j++) {
        const a = live[i], c = live[j];
        const ox = Math.min(a.x + a.w, c.x + c.w) - Math.max(a.x, c.x);
        const oy = Math.min(a.y + a.h, c.y + c.h) - Math.max(a.y, c.y);
        if (ox <= 0 || oy <= 0) continue;
        if (ox < oy) {
          const s = a.x < c.x ? -1 : 1; a.x += s * ox / 2; c.x -= s * ox / 2;
          a.vx = s * Math.abs(a.vx || 10); c.vx = -s * Math.abs(c.vx || 10);
        } else {
          const s = a.y < c.y ? -1 : 1; a.y += s * oy / 2; c.y -= s * oy / 2;
          a.vy = s * Math.abs(a.vy || 10); c.vy = -s * Math.abs(c.vy || 10);
        }
      }
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); };
  }, [engine]);

  const ctx = useMemo<Ctx>(() => ({
    engine,
    add: (b) => bodies.current.add(b),
    remove: (b) => bodies.current.delete(b),
  }), [engine]);

  return (
    <ZoneCtx.Provider value={ctx}>
      <section id={id} ref={box} style={engine ? { height } : undefined}
        className={`relative ${engine ? 'overflow-hidden' : 'flex flex-col items-center gap-6 px-6 py-16'} ${className}`}>
        {children}
      </section>
    </ZoneCtx.Provider>
  );
}

export function Float({ children, className = '', calm = false, sticky = false, speed = 1, style }: {
  children: ReactNode; className?: string; calm?: boolean; sticky?: boolean; speed?: number; style?: CSSProperties;
}) {
  const { engine, add, remove } = useContext(ZoneCtx);
  const ref = useRef<HTMLDivElement>(null);
  const body = useRef<Body | null>(null);
  const delay = useRef(Math.random() * 6);

  useLayoutEffect(() => {
    if (!engine || !ref.current) return;
    const b: Body = { el: ref.current, calm, sticky, speed, focus: false, placed: false, x: 0, y: 0, w: 0, h: 0, vx: 0, vy: 0,
      rot: 0, scale: 1, hold: 0, phase: 'free', t: 0, sx: 0, sy: 0, hx: 0, hy: 0 };
    body.current = b; add(b);
    return () => { remove(b); body.current = null; };
  }, [engine, add, remove, calm, sticky, speed]);

  if (!engine) return <div className={`bob w-full max-w-md ${className}`} style={{ animationDelay: `-${delay.current}s`, ...style }}>{children}</div>;
  return (
    <div ref={ref} className={className} style={{ position: 'absolute', left: 0, top: 0, opacity: 0, willChange: 'transform', ...style }}
      onFocusCapture={() => { if (body.current) body.current.focus = true; }}
      onBlurCapture={() => { if (body.current) body.current.focus = false; }}>
      {children}
    </div>
  );
}
