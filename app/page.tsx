'use client';
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import LiveSets from './components/LiveSets';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import NowPlaying from './components/NowPlaying';
import { PROJECTS, PALETTES, PaletteName, Project } from './data';

export default function Home() {
  const [palette, setPalette] = useState<PaletteName>('Warm Wax');
  const [spinning, setSpinning] = useState(true);
  const [np, setNp] = useState<Project>(PROJECTS[0]);

  useEffect(() => {
    const p = PALETTES[palette];
    const root = document.documentElement;
    for (const [k, v] of Object.entries(p)) {
      root.style.setProperty(`--${k}`, v);
    }
  }, [palette]);

  return (
    <div style={{ paddingBottom: 64, position: 'relative', overflowX: 'clip' }}>
      <Nav palette={palette} onPaletteChange={setPalette} />
      <Hero spinning={spinning} onToggleSpin={() => setSpinning(s => !s)} np={np} />
      <LiveSets />
      <About />
      <Projects onPlay={(p: Project) => { setNp(p); setSpinning(true); }} />
      <TechStack />
      <Contact />
      <NowPlaying np={np} spinning={spinning} onToggleSpin={() => setSpinning(s => !s)} />
    </div>
  );
}
