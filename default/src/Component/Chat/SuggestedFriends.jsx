import { FaUser } from "react-icons/fa";
import Button from "../utilities/Button";
import User from "../user";


const SuggestedFriends = ({username, profileImg}) => {
 
    return ( 
        <>
        
            <div className="px-[16%] pt-5">

                <h2 className="text-3xl font-black pb-5">People You May Know</h2>

                <User />
                
                <div className="space-y-1">
                    <h5 className="font-bold text-xl">{username}</h5>
                    <div className="font-bold space-x-5">
                        <Button value='Add friend'/>
                        <Button value='Remove'/>
                    </div>
                </div>
               
           </div>
        </>
     );
}
 
export default SuggestedFriends;