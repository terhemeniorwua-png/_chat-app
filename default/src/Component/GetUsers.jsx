import SuggestedFriends from "./Friends/SuggestedFriends";



const GetUsers = () => {

    let getUsers = localStorage.parse(localStorage.getItem("users"))
    
    return ( 
        <>
        
        {
            getUsers.forEach(user => {
                <SuggestedFriends username={user.username}/>
            })
        }
        
        </>
     );
}
 
export default GetUsers;