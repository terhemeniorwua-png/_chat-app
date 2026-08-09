import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import SideBar from './Component/Structure/SideBar'
import Nav from './Component/Structure/Navbar'
import Post from './Component/Home/Post'
import FriendList from './Component/Friends/FriendList'
import Login from './Component/SignIn/Login'

const users = []



function App() {



  return (
  <Router>

      <Login />

     {/* <Nav />
      <SideBar /> */}
    <Switch>

      <Route exact path="/">
      {/* <Post /> */}
      </Route>

      <Route exact path="/friend">
        {/* <FriendList /> */}
      </Route>
    </Switch>
  </Router>
    
  )
}

export default App
