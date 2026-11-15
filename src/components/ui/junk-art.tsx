import type { ReactNode } from 'react';

export type Art = { id: string; w: number; h: number; node: ReactNode; slosh?: boolean };

const spin = { transformBox: 'fill-box', transformOrigin: 'center', animation: 'spin 0.7s linear infinite' } as const;

const Astronaut = (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <defs><linearGradient id="visor" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#3b2a7a" /><stop offset="1" stopColor="#0b0820" /></linearGradient></defs>
    <rect x="22" y="48" width="12" height="34" rx="5" fill="#9aa0ad" />
    <rect x="12" y="52" width="18" height="10" rx="5" fill="#f4f4f1" transform="rotate(-35 20 57)" />
    <rect x="70" y="52" width="18" height="10" rx="5" fill="#f4f4f1" transform="rotate(30 80 57)" />
    <rect x="30" y="46" width="40" height="38" rx="14" fill="#f4f4f1" />
    <rect x="38" y="58" width="24" height="12" rx="3" fill="#d9dbe0" />
    <circle cx="43" cy="64" r="2.4" fill="#d4ff3a" /><circle cx="51" cy="64" r="2.4" fill="#8b5cff" /><circle cx="58" cy="64" r="2.4" fill="#ff5c39" />
    <rect x="33" y="80" width="14" height="22" rx="6" fill="#f4f4f1" transform="rotate(8 40 90)" />
    <rect x="53" y="80" width="14" height="22" rx="6" fill="#f4f4f1" transform="rotate(-14 60 90)" />
    <rect x="30" y="97" width="18" height="9" rx="4" fill="#59606e" transform="rotate(8 40 100)" />
    <rect x="52" y="96" width="18" height="9" rx="4" fill="#59606e" transform="rotate(-14 60 100)" />
    <circle cx="50" cy="30" r="25" fill="#f4f4f1" />
    <ellipse cx="50" cy="31" rx="17" ry="14" fill="url(#visor)" />
    <ellipse cx="44" cy="26" rx="6" ry="3" fill="#fff" opacity=".35" />
  </svg>
);

const Cat = (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="34" y="80" width="32" height="26" rx="12" fill="#f4f4f1" />
    <rect x="36" y="100" width="12" height="8" rx="4" fill="#ff9d3b" /><rect x="52" y="100" width="12" height="8" rx="4" fill="#ff9d3b" />
    <path d="M66 94 C86 90 92 70 82 62" stroke="#ff9d3b" strokeWidth="6" fill="none" strokeLinecap="round" />
    <polygon points="24,44 28,18 44,32" fill="#ff9d3b" /><polygon points="76,44 72,18 56,32" fill="#ff9d3b" />
    <polygon points="29,36 31,25 38,32" fill="#ffc58a" /><polygon points="71,36 69,25 62,32" fill="#ffc58a" />
    <ellipse cx="50" cy="52" rx="28" ry="26" fill="#ff9d3b" />
    <path d="M44 28 L46 38 M50 27 L50 38 M56 28 L54 38" stroke="#c9691a" strokeWidth="3" strokeLinecap="round" />
    <circle cx="40" cy="52" r="8" fill="#fff" /><circle cx="61" cy="50" r="9.5" fill="#fff" />
    <circle cx="42.5" cy="54" r="3" fill="#111" /><circle cx="58" cy="48" r="3.4" fill="#111" />
    <path d="M32 42 L47 45" stroke="#6b3a0c" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M55 38 L70 37" stroke="#6b3a0c" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M44 66 q3 -4 6 0 t6 0" stroke="#6b3a0c" strokeWidth="2" fill="none" strokeLinecap="round" />
    <polygon points="47,58 53,58 50,62" fill="#ff6f8e" />
    <path d="M26 58 L10 55 M26 62 L11 66 M74 58 L90 55 M74 62 L89 66" stroke="#f4f4f1" strokeWidth="1.2" />
    <circle cx="50" cy="52" r="40" fill="#bfe7ff" fillOpacity=".12" stroke="#cfeaff" strokeWidth="3" />
    <path d="M22 34 A38 38 0 0 1 42 16" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".6" />
    <text x="86" y="16" fontSize="20" fontWeight="700" fill="#d4ff3a" fontFamily="Space Grotesk">?</text>
  </svg>
);

const Coffee = (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    <defs><clipPath id="cupclip"><path d="M22 34 H72 V74 Q72 88 58 88 H36 Q22 88 22 74 Z" /></clipPath></defs>
    <path d="M72 44 H80 Q92 44 92 58 Q92 72 78 72 H72" stroke="#ecece6" strokeWidth="6" fill="none" />
    <path d="M22 34 H72 V74 Q72 88 58 88 H36 Q22 88 22 74 Z" fill="#ecece6" />
    <g clipPath="url(#cupclip)">
      <g className="liq"><rect x="-60" y="48" width="220" height="140" fill="#5a3216" /><rect x="-60" y="48" width="220" height="5" fill="#8a5a2e" /></g>
    </g>
    <path d="M22 34 H72" stroke="#fff" strokeWidth="3" />
    <rect x="34" y="62" width="26" height="6" rx="3" fill="#8b5cff" opacity=".8" />
  </svg>
);

const Energy = (
  <svg viewBox="0 0 100 40" width="100%" height="100%">
    <path d="M3 8 L8 11 L3 14 L8 17 L3 20 L8 23 L3 26 L8 29 L3 32 V8 Z M97 8 L92 11 L97 14 L92 17 L97 20 L92 23 L97 26 L92 29 L97 32 V8Z" fill="#a3c224" />
    <rect x="6" y="6" width="88" height="28" rx="4" fill="#d4ff3a" />
    <rect x="6" y="6" width="88" height="6" fill="#000" opacity=".12" />
    <path d="M24 10 L16 22 H23 L20 31 L30 18 H23 Z" fill="#111" />
    <text x="36" y="26" fontSize="13" fontWeight="800" fill="#111" fontFamily="Unbounded">ENERGY</text>
  </svg>
);

const Bottle = (
  <svg viewBox="0 0 40 100" width="100%" height="100%">
    <rect x="14" y="2" width="12" height="9" rx="2" fill="#8b5cff" />
    <path d="M15 11 H25 V20 Q33 26 33 38 V90 Q33 97 26 97 H14 Q7 97 7 90 V38 Q7 26 15 20 Z" fill="#9fd8ff" fillOpacity=".35" stroke="#cfeaff" strokeWidth="1.5" />
    <path d="M9 52 Q15 49 20 52 T31 52 V90 Q31 95 26 95 H14 Q9 95 9 90 Z" fill="#4db3ff" fillOpacity=".7" />
    <rect x="9" y="62" width="22" height="16" fill="#ecece6" opacity=".9" /><text x="11" y="74" fontSize="8" fontWeight="700" fill="#111" fontFamily="Space Grotesk">H₂O</text>
  </svg>
);

const Usb = (
  <svg viewBox="0 0 140 70" width="100%" height="100%">
    <path d="M34 36 C50 4 70 70 90 36 S118 6 118 34" stroke="#ecece6" strokeWidth="5" fill="none" strokeLinecap="round" />
    <rect x="2" y="26" width="34" height="20" rx="3" fill="#bfc3cc" /><rect x="8" y="31" width="20" height="10" fill="#222" /><rect x="10" y="33" width="14" height="2.4" fill="#d4ff3a" />
    <rect x="114" y="26" width="22" height="16" rx="5" fill="#2a2a33" stroke="#ecece6" strokeWidth="1.4" />
  </svg>
);

const Apple = (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    <defs><mask id="bite"><rect width="100" height="100" fill="#fff" /><circle cx="86" cy="46" r="13" fill="#000" /></mask></defs>
    <path mask="url(#bite)" fill="#ecece6" d="M50 30 C40 20 16 26 16 54 C16 74 32 94 44 92 C48 91 50 89 54 89 C58 89 60 91 64 92 C76 94 88 74 86 54 C84 28 60 20 50 30 Z" />
    <path d="M50 28 C50 14 60 6 70 6 C70 18 62 26 50 28 Z" fill="#d4ff3a" />
  </svg>
);

const Ram = (
  <svg viewBox="0 0 160 52" width="100%" height="100%">
    <rect x="2" y="2" width="156" height="40" rx="3" fill="#1d8a4d" />
    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => <rect key={i} x={12 + i * 17.5} y="9" width="14" height="14" rx="1.5" fill="#15151a" />)}
    <rect x="12" y="28" width="136" height="8" fill="#ecece6" opacity=".85" /><text x="16" y="35" fontSize="7" fontWeight="700" fill="#111" fontFamily="JetBrains Mono">DDR5 · 32GB</text>
    {Array.from({ length: 26 }, (_, i) => <rect key={i} x={6 + i * 5.8} y="42" width="3.4" height="8" fill="#e8b84a" />)}
    <rect x="78" y="42" width="3" height="8" fill="#07070a" />
  </svg>
);

const Gpu = (
  <svg viewBox="0 0 190 84" width="100%" height="100%">
    <rect x="2" y="6" width="8" height="64" rx="2" fill="#9aa0ad" />
    <rect x="10" y="8" width="176" height="60" rx="8" fill="#17171d" stroke="#3a3a46" strokeWidth="2" />
    <rect x="14" y="12" width="168" height="5" rx="2" fill="#d4ff3a" />
    {[56, 134].map((cx) => (
      <g key={cx}>
        <circle cx={cx} cy="42" r="24" fill="#0b0b10" stroke="#8b5cff" strokeWidth="2" />
        <g style={spin}>{[0, 60, 120, 180, 240, 300].map((a) => <path key={a} d="M0 0 C6 -6 14 -10 20 -4 C14 -2 8 2 0 0Z" fill="#cfd2dc" transform={`translate(${cx} 42) rotate(${a})`} />)}</g>
        <circle cx={cx} cy="42" r="5" fill="#8b5cff" />
      </g>
    ))}
    <text x="14" y="76" fontSize="7" fontWeight="800" fill="#d4ff3a" fontFamily="Unbounded">RTX · 24GB</text>
    <rect x="30" y="68" width="110" height="9" fill="#e8b84a" />
    {Array.from({ length: 28 }, (_, i) => <rect key={i} x={31 + i * 3.9} y="70" width="1.6" height="7" fill="#17171d" />)}
  </svg>
);

export const ART: Art[] = [
  { id: 'astronaut', w: 118, h: 130, node: Astronaut },
  { id: 'cat', w: 120, h: 132, node: Cat },
  { id: 'coffee', w: 92, h: 92, node: Coffee, slosh: true },
  { id: 'energy', w: 96, h: 38, node: Energy },
  { id: 'bottle', w: 36, h: 90, node: Bottle },
  { id: 'usb', w: 130, h: 65, node: Usb },
  { id: 'apple', w: 70, h: 70, node: Apple },
  { id: 'ram', w: 150, h: 49, node: Ram },
  { id: 'gpu', w: 170, h: 75, node: Gpu },
];
