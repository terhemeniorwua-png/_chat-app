import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SignUp = ({addUser}) => {

    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [username, setusername] =useState('')


    // 

const handleLogin = (e) =>{
    e.preventDefault()

    const inputed = {username, phone, password}
    addUser(inputed)
    setusername('')
    setPhone('')
    setPassword('')
}


    return (  
         <div className="border-0 rounded-3xl w-[30%] shadow-2xl text-center pb-5 lg:mt-12 m-auto">

            <div className="bg-[#ed8aff] flex items-center gap-2 justify-center mb-5">
                            <h1 className="py-2">Luna</h1>
                            <FaMoon  className="text-2xl text-amber-200"/>
            </div>



            <form onSubmit={(e)=>{handleLogin(e)}} className="space-y-5 px-5 text-left" id="forms">

             <input type="text" placeholder="Enter a username" className="border pl-2 py-3 w-full text-sm rounded-2xl" required
                
                value={username}
                onChange={(e)=>{setusername(e.target.value)}}
                />

                 <label htmlFor="">Gender</label>   <br />
               <input type="radio" id="Male" name="gender" /><label htmlFor="Male" className="pl-2">Male</label><br />

               <input type="radio" id="Female" name="gender" /><label htmlFor="Female" className="pl-2">Female</label>

                <input type="text" placeholder="Enter your phone number" className="border pl-2 py-3 w-full text-sm rounded-2xl" required
                
                value={phone}
                onChange={(e)=>{setPhone(e.target.value)}}
                />

                <input type="password" placeholder="Enter your password" className="border pl-2 py-3 w-full text-sm rounded-2xl"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                />

                <div>
                    <ul className="flex items-center justify-between">
                        <span className="text-[12px]">Remember Password?<Link className="text-[12px] text-blue-400" to="/"> Back to Login</Link></span>
                       
                    </ul>
                </div>

                <input type="submit" value="Sign Up" className="border bg-[#1b002059] pl-2 py-2 w-full text-sm rounded-2xl" required/>
            </form>
        </div> );
}
 
export default SignUp;  