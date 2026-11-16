import { Zone, Float } from './ui/Zone';

const cards = [
  { t: 'Background', d: 'Started with Java and data structures, then taught myself the MERN stack and TypeScript by building project after project.' },
  { t: 'Leadership', d: 'Led a 4-person team through all three stages of Cisco ThingQbator, and managed a 3-person design team for a student body.' },
  { t: 'Systems curiosity', d: 'Real-time apps with WebRTC and Socket.IO, shipped with Docker Compose and GitHub Actions pipelines.' },
  { t: 'Now', d: 'MSc Computing at Edinburgh Napier University, building the Nextcloud Guest Lifecycle Manager and looking for an internship or graduate role.' },
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
