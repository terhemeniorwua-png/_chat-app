import User from "../User";




const FriendList = () => {

let getUsers = JSON.parse(localStorage.getItem('users'))


    return ( 
        <div className="font-black pt-52 pl-5">

              {
             getUsers.map(user=>
        (<div key={user.key}>
            <User user={user}/>
        </div>)
    )
        }
        </div>
     );
}
 
export default FriendList;