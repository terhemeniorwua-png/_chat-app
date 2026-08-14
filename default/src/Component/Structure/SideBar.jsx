import { FaArrowAltCircleRight, FaFacebookMessenger, FaHome, FaUser, FaUserFriends } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import RightSideBar from "../Friends/RightSideBar";
import LeftNav from "./LeftNav";

const SideBar = ({state}) => {
    return ( 

        <>
           <div className="flex justify-between w-full absolute">
               
                  <LeftNav />
             <div>

               <RightSideBar />
             </div>
           </div>
        </>
     );
}
 
export default SideBar;