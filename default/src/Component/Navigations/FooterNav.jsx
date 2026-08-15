import { FaPhone } from "react-icons/fa";
import { FaSignalMessenger, FaUserGroup } from "react-icons/fa6";
import { GiBigGear } from "react-icons/gi";


const FooterNav = () => {
    return ( 
        <>
            <nav>
                <ul className="flex items-center justify-between py-2 px-5 bg-gray-100 rounded-2xl absolute bottom-0 w-full">
                    <li className="footNav">
                        <FaSignalMessenger />
                        <p>Chat</p>
                    </li>
                      <li className="footNav">
                        <FaPhone />
                        <p>Calls</p>
                    </li>
                      <li className="footNav">
                        <FaUserGroup />
                        <p>Groups</p>
                    </li>
                      <li className="footNav">
                        <GiBigGear />
                        <p>Setting</p>
                    </li>
                </ul>
            </nav>
        </>
     );
}
 
export default FooterNav;