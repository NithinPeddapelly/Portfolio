import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;