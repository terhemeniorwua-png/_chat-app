
// import { useHistory } from "react-router-dom";
import User from "../User";
import ChatArea from "./ChatArea";


const FriendList = () => {

    let getUsers = JSON.parse(localStorage.getItem('users'))
    let loggedInUser = JSON.parse(localStorage.getItem('currentUser'))


    return ( 
        <>
        <div className="font-black pt-52 pl-5 pb-10">
        
        <h4>Welcome back: {loggedInUser.username}</h4>
              {
             getUsers
             .filter(user=> user.id !== loggedInUser.id)
             .map(user=>(
             <div key={user.id} onClick={()=>(

                <ChatArea />

             )} >
                <User user={user}/>
              </div>
         ))  
    
        }
        </div>
        </>
     );
}
 
export default FriendList;