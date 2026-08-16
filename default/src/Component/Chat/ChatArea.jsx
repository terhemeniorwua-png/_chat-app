import { BiChevronLeft, BiDotsHorizontal } from "react-icons/bi";
import User from "../User";
import { FaPhone, FaVideo } from "react-icons/fa";


const ChatArea = () => {

    const getUsers = JSON.parse(localStorage.getItem('users'))
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    const conversation = [
        {
            id:crypto.randomUUID(),
            participant:[]
        }
    ]

//  <Messages />
    return ( 
        <>

            <div className=" flex items-center justify-between pt-5 pb-2">
            <div className="flex">
                    <BiChevronLeft  className="text-5xl"/>
                   {
             getUsers
             .filter(user=> user.id === currentUser.id)
             .map(user=>(<div key={user.id}>
                      
                        <User user={user}/>
                       
                        </div>))  
    
        }
            </div>
         <div className="text-xl flex items-center gap-5">
            <FaPhone />
            <FaVideo />
            <BiDotsHorizontal />
         </div>
            </div>
            <hr />
           
        </>
     );
}
 
export default ChatArea;