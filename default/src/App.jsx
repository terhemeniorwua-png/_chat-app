import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import SideBar from './Component/Structure/SideBar'
import Nav from './Component/Structure/Navbar'
import Post from './Component/Home/Post'
import FriendList from './Component/Friends/FriendList'
import Login from './Component/SignIn/Login'
import SignUp from './Component/SignIn/SignUp'





function App() {

const [isActive, setisActive] = useState(false)



  if(!isActive){
    return(
    <Router>
      <Switch>
          <Route exact path="/">
            <Login state={ setisActive }/>
          </Route>
          <Route exact path="/signup">
             <SignUp />
          </Route>
         

</Switch>
    </Router>

    )
  }




  return (
 <>




  <Router>

     

     <Nav />
      <SideBar state={ setisActive }/>
    <Switch>

      <Route exact path="/">
      <Post />
      </Route>

      <Route exact path="/friend">
        <FriendList />
      </Route>
    </Switch>
  </Router>
 
 </>
    
  )
}

export default App
