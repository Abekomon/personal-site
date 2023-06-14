import React from "react"
import ProjectTech from "./ProjectTech"
import "./Project.css"

export default function Project({info, updateProject, setStyle}) {
  const {name, date, tech} = info
  const techList = tech.map((item, i) => <ProjectTech key={i} tech={item} />)
  const handler = () => { updateProject(info, name) }


  return (
    <div className={`project-box ${setStyle(name)}`} onClick={handler}>
      <div className="date-info">
        <h3>{name}</h3>
        <p>{date}</p>
      </div>
      <div className="tech-list">
        {techList}
      </div>
    </div>
  )
}