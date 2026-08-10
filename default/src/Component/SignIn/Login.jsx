import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Login = ({users}) => {

    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(false)

const handleLogin = (e) =>{
    e.preventDefault()

    const inputed = {phone, password, id:}
    let userToLogin = newUser.find(user =>{
        if(!user.phone || !user.password){
            throw new Error('Not a user? Sign up instead')
        } else{

        }
    })
}


    return (  
         <div className="border-0 rounded-3xl w-[30%] shadow-2xl text-center lg:mt-36 m-auto pb-5">

            <div className="bg-[#ed8aff] flex items-center gap-2 justify-center mb-5">
                            <h1 className="py-2">Luna</h1>
                            <FaMoon  className="text-2xl text-amber-200"/>
            </div>



            <form onSubmit={(e)=>{handleLogin(e)}} className="space-y-5 px-5" id="forms">

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
                        <span className="text-[12px]">Dont't have an account?<Link className="text-[12px] text-blue-400" to="/signup"> Sign Up</Link></span>
                        <Link className="text-[12px] text-blue-400">Forgotten Password?</Link>
                    </ul>
                </div>

                <input type="submit" className="border bg-[#1b002059] pl-2 py-2 w-full text-sm rounded-2xl" required/>
            </form>
        </div> );
}
 
export default Login;  