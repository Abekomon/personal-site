import React from "react";
import "./ContactView.css";
import emailIcon from "../../assets/Icons/email.svg";

export default function ContactView() {
  return (
    <section id="contact" className="contact-view">
      <h2>Contact</h2>
      <div className="email-box">
        <img className="email-icon" src={emailIcon} /> 
        <h3>Mail:</h3>
        <p>max@langes.us</p>
      </div>
    </section>
  )
}