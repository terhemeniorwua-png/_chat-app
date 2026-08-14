import { FaUser } from "react-icons/fa";
import Button from "../utilities/Button";
    

const SuggestedFriends = ({username, profileImg}) => {
 
    return ( 
        <>
            <div className="px-[16%] pt-5">

                <h2 className="text-3xl font-black pb-5">People You May Know</h2>


               <div className="flex items-center gap-5 pb-5">
               <div className="bg-[#9676b4ae] p-3 rounded-full">
                 {profileImg?
                    (<img src={profileImg} alt="Profile" />)
                    :<FaUser className="text-5xl text-gray-100"/>
                } 
               </div>
                <div className="space-y-1">
                    <h5 className="font-bold text-xl">{username}</h5>
                    <div className="font-bold space-x-5">
                        <Button value='Add friend'/>
                        <Button value='Remove'/>
                    </div>
                </div>
               </div>
           </div>
        </>
     );
}
 
export default SuggestedFriends;