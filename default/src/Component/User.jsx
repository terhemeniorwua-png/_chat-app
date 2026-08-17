import { FaUser } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import ChatArea from "./Chat/ChatArea";


const User = (props) => {
  // console.log(props)
 let history = useHistory()


  const openDM = ()=>{
    // <ChatArea userId={props.user.id}/>
   history.push(`/dm/${props.user.id}`)

  }

    return ( 
        <>
            <div className="flex items-center gap-5 pb-5" key={props.user.id} onClick={openDM}>
                <div className="bg-[#9676b4ae] p-3 rounded-full">
                    {props.user.profileImg?
                  (<img src={props.user.profileImg} alt="Profile" />)
                :<FaUser className="text-3xl text-gray-100"/>
                } 
               </div>
               
            <div>
             <h2 className="text-2xl font-bold">{props.user.username}</h2>

               </div>
          </div>
                        
        </>
     );
}
 
export default User;