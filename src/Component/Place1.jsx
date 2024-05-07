 import axios from 'axios'
import React, { useState } from 'react'
 const API= "https://jsonplaceholder.typicode.com/users"
 const Place1 = () => {
  //   const [name,setname]=useState([])
  //   const [err,setErr]=useState('')
   
  //       axios
  //       .get(API)
  //        .then((res)=> console.log(res))
  //          // setname(res.data)
        
  //         .catch((err)=>console.log(err))
      
   

  // return (
  //  <>
   
  //   <ol>
  //   {name.map((e)=>{
  //       return(
  //     <li>{e.title}
      
  //     </li>
  //       )
  //   })}
  //   </ol>
  //  </>
 // )
  const [name,setname]=useState([])
  const [email,setEmail]=useState([])
  const [err,setErr]=useState([])
  const postbuttonChange=()=>{
  axios 
  .post(API,{name,email})
  .then((res)=>{
    setname(res.data)
  })
  .catch((err)=>{
    setErr(err.message)
  })
}
   if(err){
    return(
     <h2>{err}</h2> 
    )
   }
  return(
    <>
    Name:<input type='text' onChange={(e)=>setname(e.target.value)} value={name}/>

    <button onClick={postbuttonChange}>postButton</button>
    </>
  )
 }

export default Place1
