import React from "react"
import { Link } from "react-router-dom"
import "./HomeNav.css"

export default function HomeNav() {
  return (
    <nav className="home-nav">
      <Link to="/projects">Projects</Link>
      <Link to="/about-me">About Me</Link>
      <div className="currently-learning">
        <h3>Currently Learning:</h3>
        <p>.NET frameworks!</p>
      </div>
    </nav>
  )
}