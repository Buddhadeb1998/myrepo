import axios from 'axios'
import React, { useEffect, useState } from 'react'
const API= 'https://jsonplaceholder.typicode.com/users/5'
const Delete = () => {

   const [data,setData]=useState([]) 
   useEffect(()=>{
    axios.get(API).then((res)=>{
        setData(res.data)
    })
   
 },[])
  const deleteHandeler=()=>{
    axios .delete(API).then((res)=>{
        setData(res.data)
    }) 
}
 
 
  return (
    <div>
      <h2>Name:{data.name}</h2>
      <br/>
      <h2> email:{data.email}</h2>
      <br/>
      <button onClick={deleteHandeler}>Delete</button>
    </div>
  )
}

export default Delete
