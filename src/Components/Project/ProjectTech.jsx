import React from "react";
import "./Project.css"

export default function ProjectTech({tech}) {
  const setColor = (name) => {
    if (name === "React") { return "light-blue" } 
    else if (name === "TypeScript") { return "dark-blue" } 
    else if (name === "Apollo GraphQL") { return "purple" } 
    else if (name === "Express") { return "grey" }
  }

  return (
    <div className={`proj-small-tech ${setColor(tech)}`}>
      <span className="small-tech-text">{tech}</span>
    </div>
  )
    
  }
  