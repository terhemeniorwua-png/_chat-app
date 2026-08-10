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
const [newUser, setNewUser] = useState([])

// Add user

const addUser = (user)=>{
  setNewUser(prevNewUser=> [
    ...prevNewUser,
    user
  ])
}

  if(!isActive){
    return(
    <Router>
      <Switch>
          <Route exact path="/">
            <Login users={ newUser }/>
          </Route>
          <Route exact path="/signup">
             <SignUp addUser={addUser}/>
          </Route>
         

</Switch>
    </Router>

    )
  }




  return (
 <>




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
 
 </>
    
  )
}

export default App
