import React from "react"
import "./HomeInfo.css"

export default function HomeInfo() {
  return(
    <div className="home-info-box">
      <aside className="home-img">
        <p>This is the picture</p>
      </aside>
      <article className="home-info">
        <p>This is the information box</p>
      </article>
    </div>
  )
}