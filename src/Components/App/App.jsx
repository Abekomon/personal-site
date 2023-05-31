import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../Header/Header'
import HomeView from '../HomeView/HomeView'
import Error from '../Error/Error'
import './App.css'

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomeView}/>
        <Route component={Error}/>
      </Switch>
    </main>
  )
}

export default App