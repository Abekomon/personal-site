import React from "react"
import "./HomeInfo.css"

export default function HomeInfo() {
  return(
    <div className="home-info-box">
      <aside className="home-img">
        <p>This is the picture</p>
      </aside>
      <article className="home-info">
        <p>
          A Front End Software Engineer that brings a unique perspective 
          to the development process by leveraging past experience in 
          customer service. Skilled in empathizing with users and understanding 
          their needs, and translating that understanding into building intuitive 
          and user-friendly interfaces, with a passion for creating visually appealing 
          and responsive designs that enhance the user's journey.
        </p>
      </article>
    </div>
  )
}