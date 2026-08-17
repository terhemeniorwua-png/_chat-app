import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Nav, { MobileNav } from './Component/Navigations/Navbar'
import FriendList from './Component/Chat/FriendList'
import Login from './Component/SignIn/Login'
import SignUp from './Component/SignIn/SignUp'
import LandingPage from './Component/Structure/LandingPage'
import FooterNav from './Component/Navigations/FooterNav'
import ChatArea from './Component/Chat/ChatArea'





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

      <Route exact  path="/dm/:userId">
      {/* <Route > */}
            <ChatArea />
          </Route>
        
      {/* </Route> */}
         </Switch>
         )

          } 
         

    </Router>
  //  </div>

    )

}

export default App
