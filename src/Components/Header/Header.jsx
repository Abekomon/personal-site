import React from "react"
import "./Header.css"

export default function Header() {
  return (
    <header className="main-header">
      <h1>Max Lange</h1>
      <nav className="socials">
        <a href="#projects">Projects</a>
        <a href="#about">About Me</a>
        <a href="#contact"> Contact Me</a>
        <a target="_blank" href="src/assets/MaxLangeResume.pdf">Resume</a>
      </nav>
    </header>
  )
}