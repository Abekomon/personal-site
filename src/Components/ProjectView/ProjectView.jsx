import React from "react"
import ProjectGrid from "../ProjectGrid/ProjectGrid"
import "./ProjectView.css"
import { Link } from "react-router-dom"

export default function ProjectView() {
  return (
    <div className="projects-view-container">
      <Link className="back-home-link" to="/">{"< Back to Home"}</Link>
      <div className="projects-box">
        <div className="page-header">
          <h2>Projects</h2>
          <div>Box for Filtering</div>
        </div>
        <ProjectGrid />
      </div>
    </div>
  )
}