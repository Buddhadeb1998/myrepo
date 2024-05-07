import HOC1 from "./HOC1";
import HOC2 from "./HOC2";
import HOC3 from "./HOC3";

import Button from "./Button";

const HOCParent=()=>{
    return(
        <>
        <HOC1 name={Button}/>
        <HOC2 name1={Button}/>
        <HOC3 name2={Button}/>

        </>
    )
}
export default HOCParent