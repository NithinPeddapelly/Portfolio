import { Zone, Float } from './ui/Zone';
import { skills, achievements } from '../data/profile';

export default function Skills() {
  return (
    <Zone id="skills" height="1000px">
      <Float speed={0.5}><h2 className="font-display text-5xl font-extrabold md:text-7xl">Stack<span className="text-acid">.</span></h2></Float>
      {skills.map((g) => (
        <Float key={g.title} className="w-full md:w-80"><div className="float-card">
          <h3 className="font-mono text-sm text-acid">{g.title}</h3>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {g.items.map((i) => <li key={i} className="rounded bg-white/10 px-2 py-0.5 text-sm">{i}</li>)}
          </ul>
        </div></Float>
      ))}
      {achievements.map((a) => (
        <Float key={a.title} className="w-full md:w-64"><div className="float-card">
          <p className="font-mono text-[11px] text-ultra">achievement</p>
          <h3 className="font-display text-sm font-semibold leading-tight">{a.title}</h3>
          <p className="mt-1 text-sm text-ink/80">{a.detail}</p>
        </div></Float>
      ))}
    </Zone>
  );
}
