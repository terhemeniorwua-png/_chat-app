import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SideBar from './Component/Structure/SideBar'
import Nav, { MobileNav } from './Component/Structure/Navbar'
import Post from './Component/Home/Post'
import FriendList from './Component/Friends/FriendList'
import Login from './Component/SignIn/Login'
import SignUp from './Component/SignIn/SignUp'
import SuggestedFriends from './Component/Friends/SuggestedFriends'
import LandingPage from './Component/Structure/LandingPage'





function App() {

const [isActive, setisActive] = useState(false)



  if(!isActive){
    return(
  //  <div className='px-5'>
       <Router>
      <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/Login">
            <Login state={ setisActive }/>
            
          </Route>
          <Route exact path="/signup">
             <SignUp />
          </Route>
         
</Switch>
    </Router>
  //  </div>

    )
  }

  return (
 <>
 
      <Router>
       
    <Switch>

      <Route exact path="/">
       <MobileNav />
      <Nav state={setisActive}/>

      </Route>

      <Route exact path="/friend">
      <SuggestedFriends />
        <FriendList />
        
      </Route>
    </Switch>
  </Router>
 
 </>
    
  )
}

export default App
