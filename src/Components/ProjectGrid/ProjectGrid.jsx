import React, { useState } from "react"
import "./ProjectGrid.css"
import Project from "../Project/Project"
import ProjectModal from "../ProjectModal/ProjectModal"
import { projects } from "../../assets/projectList"

export default function ProjectGrid() {
  const [isOpen, setIsOpen] = useState(false)
  const [curProj, setCurProj] = useState({})
  
  const updateModal = (data, modalState) => {
    setCurProj(data)
    setIsOpen(modalState)
  }
  
  const projectList = projects.map((proj, i) => <Project key={i} info={proj} updateModal={updateModal} />)
  
  return (
    <>
      <ProjectModal
        isOpen={isOpen}
        data={curProj}
        updateModal={updateModal}
      />
      <div className="projects-grid">
        {projectList}
      </div>
    </>
  )
}
