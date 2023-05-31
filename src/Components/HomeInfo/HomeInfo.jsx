import React from "react"
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
        </article>
        <aside className="home-img">
          <p>This is the picture</p>
        </aside>
      </div>
      <div className="tech-box">
        <h3 className="tech-text">Tech Stack</h3>
        <div className="icon-box">
          <img className="icon" title="JavaScript" src={JavascriptIcon}/>
          <img className="icon" title="HTML 5" src={HtmlIcon}/>
          <img className="icon" title="CSS 3" src={CssIcon}/>
          <img className="icon" title="React" src={ReactIcon}/>
          <img className="icon" title="Apollo GraphQL" src={ApolloIcon}/>
          <img className="icon" title="Cypress" src={CypressIcon}/>
        </div>
      </div>
    </section>
  )
}