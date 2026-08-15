import User from "../User";


const FriendList = () => {

let getUsers = JSON.parse(localStorage.getItem('users'))
let loggedInUser = JSON.parse(localStorage.getItem('currentUser'))


    return ( 
        <>
        <div className="font-black pt-52 pl-5">
        
        <h4>Welcome back: {loggedInUser.username}</h4>
              {
             getUsers
             .filter(user=> user.id !== loggedInUser.id)
             .map(user=>(<div key={user.id}>
                        <User user={user}/>
                        </div>))  
    
        }
        </div>
        </>
     );
}
 
export default FriendList;