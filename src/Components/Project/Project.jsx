import React from "react";
import "./Project.css"

export default function Project({info}) {
  const {name, date} = info
  return (
    <div className="project-box">
      <div>Screenshot here</div>
      <div className="info-box">
        <h3>{name}</h3>
        <p>{date}</p>
      </div>
    </div>
  )
}