import { useRef } from "react";

const FunRefs=()=>{
    const inRef=useRef(null);
    const handleClick=()=>{
        inRef.current.focus();
     };
     return(
       <>
        <h1>Learning Useref in  Functional Compo</h1>
        <input type="text" ref={inRef}/>
        <button onClick={handleClick}>Click me</button>
       </>
    );
};
export  default FunRefs;