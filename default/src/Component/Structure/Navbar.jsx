import { useState } from "react";
import { FaArrowAltCircleRight, FaBars, FaEdit, FaMoon, FaSearch } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";




export const MobileNav = ({state}) => {
   return ( 
      <>
         <nav id="mobileNav" className="hidden relative">
            <ul className="bg-[#a265adef] text-xl font-bold text-center p-5 w-full absolute top-14">
               <li className="flex items-center gap-2"><p>Give Feedback</p> <FaMessage /></li>
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
           {/* <div className="bg-[#ed8aff] flex items-center gap-2 justify-center">
                <h1 className="py-2">Luna</h1>
                <FaMoon className="text-2xl text-amber-200"/>
           </div> */}


<div>
           <div className="flex justify-between items-center text-2xl font-black py-5">
            <h2>
               <FaBars onClick={()=>{
                   let nav=  document.getElementById('mobileNav')
                   nav.classList.toggle('hidden')
               }}/>
            </h2>
            <h2>Chats</h2>
            <h2>
               <FaEdit />
            </h2>
           </div>

           <div className="flex items-center bg-gray-200 rounded-2xl p-2 gap-4 text-gray-500">
            <h4> <FaSearch /> </h4>
            <input type="text" placeholder="Search..." className="border-0 outline-0 text-sm"/>
           </div>
</div>
        </>
     );
}
 
export default Nav;