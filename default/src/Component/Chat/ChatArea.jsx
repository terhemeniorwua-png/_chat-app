import { BiChevronLeft, BiDotsHorizontal, BiSend, BiSmile } from "react-icons/bi";
import User from "../User";
import { FaMicrophone, FaPhone, FaVideo } from "react-icons/fa";
import { useState } from "react";
import Messages from "./Messages";


const ChatArea = () => {

    const [message, setMessage] = useState('')

    const getUsers = JSON.parse(localStorage.getItem('users'))
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    const conversation = [
        {
            id:crypto.randomUUID(),
            participant:[]
        }
    ]

//  <Messages />
    return ( 
        <>

            <div className=" flex items-center justify-between pt-5 pb-2 pr-2 bg-[#ef91ff7c] rounded-b-xl">
            <div className="flex text-[#da06ff]">
                    <BiChevronLeft  className="text-5xl"/>
                   {
             getUsers
             .filter(user=> user.id === currentUser.id)
             .map(user=>(<div key={user.id}>
                      
                        <User user={user}/>
                       
                        </div>))  
    
        }
            </div>
         <div className="text-xl flex items-center gap-5 text-[#da06ff]">
            <FaPhone className="rotate-90"/>
            <FaVideo />
            <BiDotsHorizontal />
         </div>
        </div>
            <div className="bg-[#6602785b] h-0.5"></div>

            <div className="">
                <div>




                </div>

               <div className="bg-white absolute bottom-3 left-10 flex items-center gap-2">
                   <div className="flex items-center justify-between w-[80%] bg-gray-200 rounded-4xl text-2xl p-3">
                     <BiSmile className="text-[#da06ff]"/>
                     <input type="text" 
                     placeholder="Type a message..."
                     value={message}
                     onChange={(e)=>{setMessage(e.target.value)}}
                     className="border-0 text-lg outline-0 w-[70%] m-auto"
                     />
                     <BiSend onClick={()=>{
                        <Messages newMss={message}/>
                        setMessage('')
                     }} className="text-[#da06ff]"/>
                   </div>
                   <div className="bg-[#b75dc6ec] p-2 rounded-full text-2xl text-white flex items-center">
                     <FaMicrophone />
                   </div>
               </div>



            </div>
           
        </>
     );
}
 
export default ChatArea;