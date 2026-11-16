import { Github, Linkedin } from 'lucide-react';
import { Zone, Float } from './ui/Zone';
import { profile } from '../data/profile';

const word = 'font-display font-extrabold leading-none text-ink';

export default function Hero() {
  return (
    <Zone height="max(100vh, 700px)">
      <Float speed={0.6}><h1 className={`${word} text-[clamp(2.75rem,9vw,8rem)]`}>NITHIN</h1></Float>
      <Float speed={0.6}><span className={`${word} block text-[clamp(2.25rem,7vw,6.5rem)] text-acid`}>PEDDAPELLY</span></Float>
      <Float className="w-full md:w-[22rem]"><div className="float-card">
        <p className="font-mono text-xs text-ultra">software engineering · full-stack</p>
        <p className="mt-2 text-lg leading-snug">{profile.tagline}</p>
      </div></Float>
      <Float className="w-full md:w-72"><div className="float-card">
        <p className="font-mono text-xs text-acid">// try this</p>
        <p className="mt-2 text-sm text-ink/80">Everything here floats. Hold your cursor on anything for 6 seconds and the black hole will take it, then spit it back out somewhere else in the section.</p>
      </div></Float>
      <Float><a href="#projects" className="float-pill block">View Projects</a></Float>
      <Float><a href="#contact" className="float-pill ghost block">Contact Me</a></Float>
      <Float><a href={profile.github} target="_blank" rel="noopener noreferrer" className="float-pill ghost flex items-center gap-2"><Github size={16} />GitHub</a></Float>
      <Float><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="float-pill ghost flex items-center gap-2"><Linkedin size={16} />LinkedIn</a></Float>
    </Zone>
  );
}
