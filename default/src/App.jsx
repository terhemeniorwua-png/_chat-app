import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Nav from './Component/Navbar'
import SideBar from './Component/SideBar'
import Post from './Component/Post'
import FriendList from './Component/FriendList'


function App() {


  return (
  <Router>
      <Nav />
      <SideBar />
    <Switch>

      <Route exact path="/">
          <Post />
      </Route>

      <Route exact path="/friend">
        <FriendList />
      </Route>
    </Switch>
  </Router>
    
  )
}

export default App
