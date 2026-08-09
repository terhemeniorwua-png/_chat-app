import { FaHome, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SideBar = () => {
    return ( 

        <>
           <div className="flex justify-between">
             <div className="h-screen w-[12%] bg-[#ed8aff] border-t-2 border-amber-100">
                <ul className="">
                   
                        <Link to="/" className="flex items-center gap-1"><FaHome /> <span>Home</span></Link>
                    
                   
                        <Link to="/" className="flex items-center gap-1"><FaUserFriends /> <span>Friends</span></Link>
                    
                </ul>
            </div>
             <div className="h-screen w-[12%] bg-[#ed8aff] border-t-2 border-amber-100">
                <h1>Hi</h1>
            </div>
           </div>
        </>
     );
}
 
export default SideBar;