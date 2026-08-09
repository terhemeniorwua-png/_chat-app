import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Nav from './Component/Navbar'
import SideBar from './Component/SideBar'


function App() {


  return (
  <Router>
      <Nav />
      
    <Switch>

      <Route exact path="/">
          <SideBar />
      </Route>

    </Switch>
  </Router>
    
  )
}

export default App
