import axios from 'axios'
import React, { useState } from 'react'
  const API='https://jsonplaceholder.typicode.com/users'
  const Placepost = () => {
   const [name,setName]=useState([])
   const [email,setEmail]=useState([])
   const [err,setErr]=useState([])
   const [response,setResponse]=useState([])

   const handleChange=()=>{
    axios
   .post(API,{name,email})
   .then((res)=>{
    console.log(res.data);
    setResponse(res.data)
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

  return (
   <>
    <div>
   Name:
   <input type='text' onChange={(e)=>setName(e.target.value)} value={name}/>
                                                                                  
   email:
   <input type='text' onChange={(e)=>setEmail(e.target.value)} value={email}/>

   <button onClick={handleChange}>postbuttonChange</button> 
   </div>
   </>
  )
}

export default Placepost
