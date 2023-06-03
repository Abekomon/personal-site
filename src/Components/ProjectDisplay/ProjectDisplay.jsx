import React from "react";
import "./ProjectDisplay.css"

export default function ProjectDisplay({info}) {
  const {name, date, repo_link, deployed_link, screenshots, desc, bullets, tech} = info
  let specList;
  if (name) {
    specList = bullets.map((bul, i) => <li key={i}>{bul}</li>)
  }

  return (
    <div className="project-display">
      {!name ? <p>Select a project!</p> : 
      <>
        <h3>{name}</h3>
        <p>{date}</p>
        <p>{desc}</p>
        <ul className="spec-list">
          {specList}
        </ul>
        <div className="proj-linkbox">
          <a about="_blank" href={repo_link}>Github Repo</a>
          <a about="_blank" href={deployed_link}>Live Demo</a>
        </div>
      </>
      }
    </div>
  )
}
