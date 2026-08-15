import { FaUser } from "react-icons/fa";


const User = (props) => {




    return ( 
        <>
            
            
            <div className="flex items-center gap-5 pb-5" key={props.user.key}>
                <div className="bg-[#9676b4ae] p-3 rounded-full">
                    {props.user.profileImg?
                  (<img src={props.user.profileImg} alt="Profile" />)
                :<FaUser className="text-5xl text-gray-100"/>
                     } 
               </div>
               
            <div>
             <h2 className="text-2xl font-bold">{props.user.username}</h2>

               <p></p>
               </div>
          </div>
                        
        </>
     );
}
 
export default User;