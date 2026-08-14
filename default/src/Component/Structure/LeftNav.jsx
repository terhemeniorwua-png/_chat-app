
import { FaArrowAltCircleRight, FaFacebookMessenger, FaHome, FaUser, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";

const LeftNav = () => {
    return ( 
        <>
               <div className="h-128 w-[15%] bg-[#ed8aff] border-t-2 border-amber-100">
                <ul className="font-extrabold flex flex-col pl-5 pr-14 py-[50%] gap-5 justify-center">
                   
                        <Link to="/" className="flex items-center gap-1 hover:border-b hover:border-dotted "><FaHome /> <span>Home</span></Link>
                
                   
                        <Link to="/friend" className="flex items-center gap-1 hover:border-b hover:border-dotted "><FaUserFriends /> <span>Friends</span></Link>

                        <Link to="/" className="flex items-center gap-1 hover:border-b hover:border-dotted "><FaFacebookMessenger /> <span>Message</span></Link>
                        <Link to="/" className="flex items-center gap-1 hover:border-b hover:border-dotted "><FaUser /> <span>Profile</span></Link>

                        <li className="flex items-center gap-1 hover:border-b hover:border-dotted hover:cursor-pointer" onClick={()=>{
                           state(false)
                        }}><FaArrowAltCircleRight /> <span>Log Out</span></li>
                    
                </ul>
            </div>
        </>
     );
}
 
export default LeftNav;