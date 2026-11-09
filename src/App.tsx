"use client"

import type React from "react"
import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Leadership from "./components/Leadership"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleResumeDownload = () => {
    scrollToSection("resume")
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text-body)]">
      <Navbar onResumeDownload={handleResumeDownload} />
      <main className="flex-1">
        <Hero onNavigate={scrollToSection} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
