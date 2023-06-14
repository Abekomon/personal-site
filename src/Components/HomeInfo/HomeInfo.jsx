import React from "react"
import Pfp from "../../assets/Images/pfp.jpg"
import JavascriptIcon from "../../assets/Icons/javascript.svg"
import HtmlIcon from "../../assets/Icons/html5.svg"
import CssIcon from "../../assets/Icons/css3.svg"
import ReactIcon from "../../assets/Icons/react.svg"
import ApolloIcon from "../../assets/Icons/apollo.svg"
import CypressIcon from "../../assets/Icons/cypress.svg"
import "./HomeInfo.css"

export default function HomeInfo() {
  return(
    <section className="home-view">
      <div className="info-box">
        <article className="home-info">
          <h1>Front End React Developer</h1>
          <p>Hi! I'm Max. A Front End React Dev based in Ypsilanti, MI.</p>
        </article>
        <aside className="home-img">
          <img src={Pfp} alt="Max Lange's smiling face!" />
        </aside>
      </div>
      <div className="tech-box">
        <h3 className="tech-text">Tech Stack</h3>
        <div className="icon-box">
          <img className="icon" title="JavaScript" src={JavascriptIcon} alt="Tech Icon" />
          <img className="icon" title="HTML 5" src={HtmlIcon} alt="Tech Icon" />
          <img className="icon" title="CSS 3" src={CssIcon} alt="Tech Icon" />
          <img className="icon" title="React" src={ReactIcon} alt="Tech Icon" />
          <img className="icon" title="Apollo GraphQL" src={ApolloIcon} alt="Tech Icon" />
          <img className="icon" title="Cypress" src={CypressIcon} alt="Tech Icon" />
        </div>
      </div>
    </section>
  )
}