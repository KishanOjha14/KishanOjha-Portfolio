'use client';

import type React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CurrentlyExploring from './components/CurrentlyExploring';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleResumeDownload = (file: string) => {
    window.location.href = file;
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text-body)]">
        <Navbar onResumeDownload={handleResumeDownload} />
        <main className="flex-1">
          <Hero onNavigate={scrollToSection} />
          <About />
          <CurrentlyExploring />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
