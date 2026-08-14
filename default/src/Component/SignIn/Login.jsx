import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = ({state}) => {

    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

const handleLogin = (e) =>{
    e.preventDefault()

    const inputed = {phone, password}

    let getUsers = JSON.parse(localStorage.getItem("users"))
//    console.log(getUsers)

   let user = getUsers.find(user =>( user.phone === inputed.phone && user.password === inputed.password ))


        if(!user){
            alert("User not found. Sign up!")

            setPassword('')
            setPhone('')

            return 
        } else{
                state(true)
                return user
        }
   
   
}


    return (  
         <div className="border-0 rounded-3xl w-[80%] lg:w-[30%] shadow-2xl text-center mt-16 lg:mt-36 m-auto pb-5">
            
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
                        <span className="text-[8px] lg:text-[12px]">Dont't have an account?<Link className="text-[12px] text-blue-400" to="/signup"> Sign Up</Link></span>
                        <Link className="text-[8px] lg:text-[12px] text-blue-400">Forgotten Password?</Link>
                    </ul>
                </div>

                <input type="submit" className="border bg-[#1b002059] pl-2 py-2 w-full text-sm rounded-2xl" required/>
            </form>
        </div> );
}
 
export default Login;  