import { useState } from "react";
import { FaArrowAltCircleRight, FaBars, FaEdit, FaMoon, FaSearch } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";




export const MobileNav = ({state}) => {
   return ( 
      <>
         <nav id="mobileNav" className="hidden z-36 relative w-full">

            <ul className="bg-[#0f0f0fe2] text-xl text-white font-bold flex flex-col items-center p-10  w-[98%] m-auto absolute top-24">

               <li className="flex items-center gap-2">
                  <p>Give Feedback</p> <FaMessage /></li>

               <li onClick={()=>{state(false)}} className="flex items-center gap-2">

                  <p>Log Out</p> <FaArrowAltCircleRight />
                  </li>
              
            </ul>
         </nav>
      </>
    );
}


const Nav = () => {


    return ( 

        <>


<div className="mt-8 px-5 fixed">
           <div className="flex justify-between items-center text-2xl font-black py-5">
            <h2>
               <FaBars onClick={()=>{
                   let nav=  document.getElementById('mobileNav')
                   nav.classList.toggle('hidden')
               }}/>
            </h2>
            <h2 className="text-5xl">Chats</h2>
            <h2>
               <FaEdit />
            </h2>
           </div>

           <div className="flex items-center mt-5 bg-gray-200 text-2xl rounded-4xl p-3 gap-4 text-gray-500">
            <h4> <FaSearch /> </h4>
            <input type="text" placeholder="Search..." className="border-0 outline-0 w-[80%]"/>
           </div>
      </div>
        </>
     );
}
 
export default Nav;