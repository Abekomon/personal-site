import React from "react"
import "./ProjectModal.css"

export default function ProjectModal({isOpen, data, updateModal}) {
  const styles = isOpen ? 'modal' : 'modal hidden'
  const {name, repo_link, deployed_link, screenshots, desc, bullets} = data
  let points
  if(bullets) {
    points = bullets.map((bul, i) => <li key={i}>{bul}</li>)
  }

  return (
    <div className={styles}>
      <div className="modal-info">
      <button onClick={() => updateModal({}, false)}>X</button>
        <h3>{name}</h3>
        <p>{desc}</p>
        <ul> {points} </ul>
        <div className="link-box">
          <a className="proj-link" href={repo_link}>Repository</a>
          <a className="proj-link" href={deployed_link}>Deployed Page</a>
        </div>
      </div>
    </div>
  )
}