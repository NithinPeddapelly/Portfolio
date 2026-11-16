import { ExternalLink, Github } from 'lucide-react';
import { Zone, Float } from './ui/Zone';
import { projects } from '../data/profile';

export default function Projects() {
  return (
    <Zone id="projects" height="1150px">
      <Float speed={0.5}><h2 className="font-display text-5xl font-extrabold md:text-7xl">Projects<span className="text-acid">.</span></h2></Float>
      {projects.map((p) => (
        <Float key={p.name} calm sticky className="w-full md:w-80">
          <article className="float-card">
            <div className="flex justify-between gap-2 font-mono text-[11px]">
              <span className="text-ultra">{p.period}</span><span className="text-acid">{p.status}</span>
            </div>
            <h3 className="mt-2 font-display text-lg font-semibold leading-tight">{p.name}</h3>
            <p className="mt-2 text-sm text-ink/80">{p.description}</p>
            {p.note && <p className="mt-2 text-xs text-ink/50">{p.note}</p>}
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {p.stack.map((s) => <li key={s} className="rounded bg-white/10 px-2 py-0.5 font-mono text-[11px]">{s}</li>)}
            </ul>
            <div className="mt-4 flex gap-4 text-sm font-semibold">
              {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-acid"><ExternalLink size={14} />Live</a>}
              {p.code && <a href={p.code} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-ultra"><Github size={14} />Code</a>}
            </div>
          </article>
        </Float>
      ))}
    </Zone>
  );
}
