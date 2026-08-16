
import LeftNav from "./LeftNav";

const SideBar = ({state}) => {
    return ( 

        <>
           <div className="flex justify-between w-full absolute">
               
                  <LeftNav userState={state}/>
             <div>

             </div>
           </div>
        </>
     );
}
 
export default SideBar;