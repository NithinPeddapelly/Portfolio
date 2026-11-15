import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Stars from './components/ui/Stars';
import BlackHole from './components/ui/BlackHole';
import SpaceJunk from './components/ui/SpaceJunk';

export default function App() {
  return (
    <div className="relative min-h-screen bg-void text-ink">
      <div className="pointer-events-none fixed inset-0 z-0 [background:radial-gradient(60%_40%_at_20%_10%,rgba(139,92,255,0.14),transparent),radial-gradient(50%_40%_at_85%_70%,rgba(212,255,58,0.07),transparent)]" aria-hidden />
      <Stars />
      <SpaceJunk />
      <BlackHole />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Timeline />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
