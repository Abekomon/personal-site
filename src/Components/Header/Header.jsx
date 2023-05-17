import React from "react"
import "./Header.css"

export default function Header() {
  return (
    <header className="main-header">
      <h1>Max Lange</h1>
      <nav className="socials">
        <a target="_blank" href="https://github.com/Abekomon">GitHub</a>
        <a target="_blank"  href="https://www.linkedin.com/in/maxwell-steven-lange/">LinkedIn</a>
        <a target="_blank" href="src/assets/MaxLangeResume.pdf">Resume</a>
      </nav>
    </header>
  )
}