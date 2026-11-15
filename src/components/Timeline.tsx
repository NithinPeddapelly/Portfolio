import { Zone, Float } from './ui/Zone';
import { timeline } from '../data/profile';

// Hand-drawn glyphs that trace themselves when the card appears.
const cap = 'M2 10 L14 4 L26 10 L14 16 Z M7 12.5 V18 C7 20 21 20 21 18 V12.5';
const flag = 'M5 3 V25 M5 4 H22 L18 9 L22 14 H5';

export default function Timeline() {
  return (
    <Zone id="timeline" height="820px">
      <Float speed={0.5}><h2 className="font-display text-5xl font-extrabold md:text-7xl">Path<span className="text-acid">.</span></h2></Float>
      {timeline.map((t) => (
        <Float key={t.title} className="w-full md:w-80"><div className="float-card">
          <svg className="draw mb-2" width="30" height="28" viewBox="0 0 28 28" fill="none" stroke={t.kind === 'education' ? '#8b5cff' : '#d4ff3a'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d={t.kind === 'education' ? cap : flag} pathLength={1} />
          </svg>
          <p className="font-mono text-[11px] text-ultra">{t.when}</p>
          <h3 className="font-display text-base font-semibold leading-tight">{t.title}</h3>
          <p className="text-sm text-acid">{t.where}</p>
          <p className="mt-1 text-sm text-ink/80">{t.detail}</p>
        </div></Float>
      ))}
    </Zone>
  );
}
