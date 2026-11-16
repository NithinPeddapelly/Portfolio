import { Zone, Float } from './ui/Zone';

const cards = [
  { t: 'Background', d: 'Started with Java and data structures, then taught myself the MERN stack through project after project. Now working mostly in TypeScript, and learning machine learning on the side.' },
  { t: 'Leadership', d: 'Led a 4-person team through all three stages of Cisco ThingQbator, and managed a 3-person design team for a student body.' },
  { t: 'What I build', d: 'Real-time and full-stack web apps: WebRTC video calling, a client website in production, and a Node.js and PostgreSQL service for my MSc project.' },
  { t: 'Now', d: 'MSc Computing at Edinburgh Napier University on the Professional Placement pathway, looking for a software engineering internship or graduate role.' },
];

export default function About() {
  return (
    <Zone id="about" height="820px">
      <Float speed={0.5}><h2 className="font-display text-5xl font-extrabold md:text-7xl">About<span className="text-acid">.</span></h2></Float>
      {cards.map((c) => (
        <Float key={c.t} className="w-full md:w-80"><div className="float-card">
          <h3 className="font-mono text-sm text-acid">{c.t}</h3>
          <p className="mt-2 text-ink/85">{c.d}</p>
        </div></Float>
      ))}
    </Zone>
  );
}
