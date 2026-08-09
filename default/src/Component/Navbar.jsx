import { FaMoon } from "react-icons/fa";



const Nav = () => {
    return ( 

        <>
           <div className="bg-[#ed8aff] flex items-center gap-2 justify-center">
                <h1 className="py-2">Luna</h1>
                <FaMoon className="text-2xl text-amber-200"/>
           </div>
        </>
     );
}
 
export default Nav;