import React from "react";
import "./AboutView.css";
import sidImg from "../../assets/Images/sid.jpg"

export default function AboutView() {
  return (
    <section id="about" className="about-view">
      <h2>About Me</h2>
      <div className="about-info-section">
        <div className="about-img">
          <img src={sidImg} />
        </div>
        <div className="about-text">
          <p>
            A Front End Software Engineer that brings a unique perspective 
            to the development process by leveraging past experience in 
            customer service. Skilled in empathizing with users and understanding 
            their needs, and translating that understanding into building intuitive 
            and user-friendly interfaces, with a passion for creating visually appealing, 
            responsive, and pixel-perfect designs that enhance the user's journey.
          </p>
          <p>(Also check out my cat, Sid!)</p>
        </div>
      </div>
    </section>
  )
}