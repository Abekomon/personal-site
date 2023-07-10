import React from "react";
import "./ContactView.css";
import emailIcon from "../../assets/Icons/email.svg";
import locationIcon from "../../assets/Icons/location.svg"

export default function ContactView() {
  return (
    <section id="contact" className="contact-view">
      <h2>Contact</h2>
      <div className="contact-box">
        <div className="con">
          <img className="email-icon" src={emailIcon} />
          <div className="con-info-box">
            <h3>Email:</h3>
            <a href="mailto: max@langes.us">max@langes.us</a>
          </div>
        </div>
        <div className="con">
          <img className="email-icon" src={locationIcon} />
          <div className="con-info-box">
            <h3>Location:</h3>
            <p>Ypsilanti, MI</p>
          </div>
        </div>
      </div>
    </section>
  )
}