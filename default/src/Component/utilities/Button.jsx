

const Button = ({value, functionality}) => {
    return ( 
        <>
            <button onClick={functionality} className="border border-amber-400 text-gray-700 px-5 py-1 rounded bg-[#9676b469]"> {value} </button>
        </>
     );
}
 
export default Button;