import { FaMagento, FaMoon } from "react-icons/fa";
import { FaFacebookMessenger} from "react-icons/fa6";
import { Link } from "react-router-dom";




const LandingPage = () => {
    return ( 
        <>
            <div className="h-screen bg-[#560465ec]">

                <div className="text-7xl text-center m-auto w-[22%]">

                    <h5 className="text-white text-center items-center">
                        <FaFacebookMessenger />
                        </h5>
                    <h4 className="flex gap-2 items-center">
                        <p className="text-5xl font-black">Luna</p> 
                        <FaMoon  className="text-4xl text-amber-200"/>
                    </h4>
                    

                                                
                </div>

                <button>
                    <Link to='/Login'>Login</Link>
                </button>
            </div>
        </>
     );
}
 
export default LandingPage;