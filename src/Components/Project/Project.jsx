import React from "react"
import "./Project.css"

export default function Project({info, updateModal}) {
  const {name, date} = info

  return (
    <div className="project-box" onClick={() => updateModal(info, true)}>
      <div>Screenshot here</div>
      <div className="info-box">
        <h3>{name}</h3>
        <p>{date}</p>
      </div>
    </div>
  )
}