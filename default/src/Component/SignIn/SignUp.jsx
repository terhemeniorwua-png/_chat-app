import { Profiler, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import GetUsers from "../GetUsers";

const SignUp = () => {

    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [username, setusername] =useState('')
    const [gender, setGender] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [avater, setAvater] = useState('')

    // 

const handleLogin = (e) =>{
    e.preventDefault()


    let users = JSON.parse(localStorage.getItem("users")) || [];

// console.log(users)
    const newUser = {
                    id: crypto.randomUUID(),
                    username,
                    phone, 
                    password,
                    isActive:false, 
                    gender,
                    dateOfBirth,
                    profileImg:''
                }
     

    let existing = users.find(user=>( user.password === newUser.password && user.phone === newUser.phone ))

        if(existing){

            alert('User already exist')

            return 
        } else{
            users.push(newUser)

            localStorage.setItem("users", JSON.stringify(users))
    
            alert('Your account has been successfully created')
        }
   

    setusername('')
    setPhone('')
    setPassword('')
    setGender('')
    setDateOfBirth('')
    setAvater('')
}


    return (  
         <div className="border-0 rounded-3xl w-[80%] lg:w-[30%] shadow-2xl text-center pb-5 mt-10 lg:mt-12 m-auto">

            <div className="bg-[#ed8aff] flex items-center gap-2 justify-center mb-5">
                            <h1 className="py-2">Luna</h1>
                            <FaMoon  className="text-2xl text-amber-200"/>
            </div>



            <form onSubmit={(e)=>{handleLogin(e)}} className="space-y-5 px-5 text-left" id="forms">

            {/* username */}

             <input type="text" placeholder="Enter a username" className="border pl-2 py-3 w-full text-sm rounded-2xl" required
                
                value={username}
                onChange={(e)=>{setusername(e.target.value)}}
                />

                {/* Gender */}

                 <label htmlFor="">Gender</label>   <br />
               <input type="radio" 
               id="Male" 
               name="gender" 
               value='Male'
               onChange={(e)=>{setGender(e.target.value)}}
               />
               <label htmlFor="Male" className="pl-2">Male</label><br />

               <input type="radio" 
               id="Female" 
               name="gender"
                value='Female'
               onChange={(e)=>{setGender(e.target.value)}}
               />
               
               <label htmlFor="Female" className="pl-2">Female</label>

                {/* Phone Number */}

                <input type="text" placeholder="Enter your phone number" className="border pl-2 py-3 w-full text-sm rounded-2xl" required
                
                value={phone}
                onChange={(e)=>{setPhone(e.target.value)}}
                />

                {/* Password */}

                <input type="password" placeholder="Enter your password" className="border pl-2 py-3 w-full text-sm rounded-2xl"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                />

                {/* Profile */}

                <input type="text" placeholder="Set your profile(image url)" className="border pl-2 py-3 w-full text-sm rounded-2xl"
                value={avater}
                onChange={(e)=>{setAvater(e.target.value)}}
                />


                {/* Date of birth */}

                <input type="date"
                className="border px-2 py-3 w-full text-sm rounded-2xl"
                placeholder="Enter your date of birth" 
                 id="" 
                 value={dateOfBirth}
                 onChange={(e)=>{setDateOfBirth(e.target.value)}}
                 />


                {/* Navigation Links */}

                <div>
                    <ul className="flex items-center justify-between">
                        <span className="text-[12px]">Remember Password?<Link className="text-[12px] text-blue-400" to="/"> Back to Login</Link></span>
                       
                    </ul>
                </div>


                {/* Button */}

                <input type="submit" value="Sign Up" className="border bg-[#1b002059] pl-2 py-2 w-full text-sm rounded-2xl" required/>
            </form>
        </div> );
}
 
export default SignUp;  