import React from "react"
import HomeInfo from "../HomeInfo/HomeInfo"
import Header from "../Header/Header"
import ProjectView from "../ProjectView/ProjectView"
import AboutView from "../AboutView/AboutView"
import ContactView from "../ContactView/ContactView"
import "./HomeView.css"

export default function HomeView() {
  return (
    <>
      <Header />
      <HomeInfo />
      <AboutView />
      <ProjectView />
      <ContactView />
    </>
  )
}