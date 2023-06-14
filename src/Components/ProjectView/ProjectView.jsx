import React, {useState} from "react"
import Project from "../Project/Project"
import ProjectDisplay from "../ProjectDisplay/ProjectDisplay"
import { projects } from "../../assets/projectList"
import "./ProjectView.css"

export default function ProjectView() {
  const [currentProject, setCurrentProject] = useState({})
  const [selected, setSelected] = useState('')

  const updateProject = (info, name) => {
    setSelected(name)
    setCurrentProject(info)
  }
  
  const setStyle = (name) => {
    return name === selected ? 'active-project' : ''
  }

  const projectList = projects.map((proj, i) => <Project key={i} info={proj} updateProject={updateProject} setStyle={setStyle} />)

  return (
    <div id="projects" className="projects-view-container">
      <div className="projects-box">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projectList}
        </div>
      </div>
      <ProjectDisplay info={currentProject} />
    </div>
  )
}