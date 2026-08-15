import { FaMagento, FaMoon } from "react-icons/fa";
import { FaFacebookMessenger} from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../utilities/Button";




const LandingPage = () => {
    return ( 
        <>
            <div className="h-screen bg-[#560465ec] flex flex-col items-center justify-around">

                <div className="text-7xl flex flex-col items-center gap-10 ">

                    <h5 className="text-white text-center text-9xl items-center">
                        <FaFacebookMessenger />
                        </h5>
                    <h4 className="flex gap-2 items-center">
                        <p className="text-5xl text-[#18012f] font-black">Luna</p> 
                        <FaMoon  className="text-4xl text-amber-200"/>
                    </h4>                       
                </div>


                <div className="text-center space-y-10">
                    <p>
                        <Link to='/Login'>
                        
                        <Button value='Get Started' style='border border-amber-400 text-2xl font-black px-5 py-1 rounded bg-white'/> 

                        </Link>
                        </p>
            
                    <p className="text-[#9676b4ec]">
                        <span className="block">By continuing you agree to our</span>
                        <span>Terms of Service & Privacy Policy</span>
                    </p>
                </div>
               
            </div>
        </>
     );
}
 
export default LandingPage;