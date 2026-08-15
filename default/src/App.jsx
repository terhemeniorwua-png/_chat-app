import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SideBar from './Component/Structure/SideBar'
import Nav, { MobileNav } from './Component/Navigations/Navbar'
import Post from './Component/Home/Post'
import FriendList from './Component/Chat/FriendList'
import Login from './Component/SignIn/Login'
import SignUp from './Component/SignIn/SignUp'
import SuggestedFriends from './Component/Chat/SuggestedFriends'
import LandingPage from './Component/Structure/LandingPage'
import FooterNav from './Component/Navigations/FooterNav'





function App() {

const [isActive, setisActive] = useState(false)



  
    return(
  //  <div className='px-5'>
       <Router>
      
     {!isActive &&(
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
     )}
        { isActive && (
          <Switch>
           <Route exact path="/">
              <MobileNav state={setisActive}/>
              <Nav />
               <FriendList />
              <FooterNav />
            </Route>

      <Route exact path="/friend">
      <SuggestedFriends />
       
        
      </Route>
         </Switch>
        )

          }
         

    </Router>
  //  </div>

    )

}

export default App
