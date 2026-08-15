

const Button = ({value, functionality, style}) => {
    return ( 
        <>
            <button onClick={functionality} className={style}> {value} </button>
        </>
     );
}
 
export default Button;