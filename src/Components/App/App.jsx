import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../Header/Header'
import HomeView from '../HomeView/HomeView'
import ProjectView from '../ProjectView/ProjectView'
import AboutView from '../AboutView/AboutView'
import Error from '../Error/Error'
import './App.css'

function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/" component={HomeView}/>
        <Route exact path="/about-me" component={AboutView}/>
        <Route exact path="/projects" component={ProjectView}/>
        <Route component={Error}/>
      </Switch>
    </main>
  )
}

export default App