import React from "react"
import "./ProjectGrid.css"
import Project from "../Project/Project"
import { projects } from "../../assets/projectList"

export default function ProjectGrid() {
  const projectList = projects.map(proj => <Project info={proj} />)

  return (
    <div className="projects-grid">
      {projectList}
    </div>
  )
}
