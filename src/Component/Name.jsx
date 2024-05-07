import { useState } from "react";
import img1 from "../Component/images/img1.jpg";
import img2 from "../Component/images/img2.jpg";
import img3 from "../Component/images/img3.jpg";
import img4 from "../Component/images/img4.jpg";
import Birth from "./Birth";

const Names = () =>{
 const [names ,setNames]=useState([
  { id: 1, Name: "Bertie Yates", img:img1 },
  { id: 2, Name: "Hester Hogan", img:img2 },
  { id: 3, Name: "Larry Little", img:img3 },
  { id: 4, Name: "Sean Walsh",   img:img4 },
]);

const closeHandler= ()=>{
  setNames([]);
}

return(
  <Birth name1={names} closeHandler={closeHandler}></Birth>
)
}
export default Names;
