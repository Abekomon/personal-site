import React from "react"
import "./Project.css"

export default function Project({info, updateProject, setStyle}) {
  const {name, date} = info
  const handler = () => { updateProject(info, name) }

  return (
    <div className={`project-box ${setStyle(name)}`} onClick={handler}>
      <div className="info-box">
        <h3>{name}</h3>
        <p>{date}</p>
      </div>
    </div>
  )
}