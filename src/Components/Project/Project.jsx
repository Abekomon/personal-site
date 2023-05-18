import React from "react";
import "./Project.css"

export default function Project({info}) {
  const {name, date} = info
  return (
    <div className="project-box">
      <h3>{name}</h3>
      <p>{`Created ${date}`}</p>
    </div>
  )
}