// import { Component } from "react";

import { useState } from "react"
import People from "./People"

// class Classcomp extends Component{
//    render(){
//     return <h1> This is class</h1>
//    } 
// }
// export default Classcomp;

   const Classcomp=()=>{
   const[value,setPeople]=useState(People)
     
     const deleteall=(id)=>{
      let newstd=value.filter((str)=>{
         return str.id!==id
      })
      
      setPeople(newstd)
    }
    
     const removedall=()=>{
      setPeople([])
    }

    return(
       <>
     
        <h1>People</h1>
        <div>
        {value.map((str)=>{
        return(
        <div>
        <h2>{str.id}</h2>
        <h3>Name:{str.name}</h3>
        <h4>Age{str.age}</h4>
        <button onClick={()=> deleteall(str.id)}>Clearal</button>
        </div>
        
       )

       })}
       <button onClick={removedall}>Clearall</button>

        </div>
   
    </>
   )

}

export default Classcomp