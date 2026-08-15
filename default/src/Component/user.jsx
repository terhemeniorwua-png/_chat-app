import { FaUser } from "react-icons/fa";


const User = ({profileImg, username}) => {
    return ( 
        <>
            
            
            <div className="flex items-center gap-5 pb-5">
                <div className="bg-[#9676b4ae] p-3 rounded-full">
                    {profileImg?
                  (<img src={profileImg} alt="Profile" />)
                :<FaUser className="text-5xl text-gray-100"/>
                     } 
               </div>
               
            <div>
             <h2 className="text-2xl font-bold">{username}</h2>
               <p>How are u</p>
               </div>
          </div>
                        
        </>
     );
}
 
export default User;