import React from "react"
import HomeInfo from "../HomeInfo/HomeInfo"
import HomeNav from "../HomeNav/HomeNav"
import "./HomeView.css"

export default function HomeView() {
  return (
    <section className="home-view">
      <HomeInfo />
      <HomeNav />
    </section>
  )
}