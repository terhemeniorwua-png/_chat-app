import { FaArrowAltCircleRight, FaFacebookMessenger, FaHome, FaUser, FaUserFriends } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SideBar = ({state}) => {
    return ( 

        <>
           <div className="flex justify-between w-full absolute">
             <div className="h-screen w-[15%] bg-[#ed8aff] border-t-2 border-amber-100">
                <ul className="font-extrabold flex flex-col pl-5 pr-14 py-[50%] gap-5 justify-center">
                   
                        <Link to="/" className="flex items-center gap-1 hover:border-b hover:border-dotted "><FaHome /> <span>Home</span></Link>
                    
                   
                        <Link to="/friend" className="flex items-center gap-1 hover:border-b hover:border-dotted "><FaUserFriends /> <span>Friends</span></Link>

                        <Link to="/" className="flex items-center gap-1 hover:border-b hover:border-dotted "><FaFacebookMessenger /> <span>Message</span></Link>
                        <Link to="/" className="flex items-center gap-1 hover:border-b hover:border-dotted "><FaUser /> <span>Profile</span></Link>

                        <Link className="flex items-center gap-1 hover:border-b hover:border-dotted " onClick={()=>{
                           state(false)
                        }}><FaArrowAltCircleRight /> <span>Log Out</span></Link>
                    
                </ul>
            </div>
             <div className="h-screen w-[15%] absolute right-0 bg-[#ed8aff] border-t-2 border-amber-100">
                <h1>Hi</h1>
            </div>
           </div>
        </>
     );
}
 
export default SideBar;