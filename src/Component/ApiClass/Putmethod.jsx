import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
const API= 'https://jsonplaceholder.typicode.com/comments/3'
const Putmethod = () => {
    const[data,setData]=useState('')
    const [err,setErr]=useState('')
    const [name,setname]=useState('')
    const [username,setusername]=useState('')
    const [email,setEmail]=useState('');
    const handleGetdata=()=>{
        axios
        .get(API)
        .then((response)=>setData(response.data)
        )
        .catch((err)=>setErr(err.message));
    }
    const handleChange=()=>{
        axios
        .put(API,{name,email,username})
        .then((res)=>setData(res.data))
        .catch((err)=>setErr(err.message))
    }
     useEffect(()=>{
       handleGetdata() 
    },[])
  return (
    <div>
    
    <h1>ID:{data.id}</h1>
    <h1>Name::{data.name}</h1>
    <h1>Email:{data.email}</h1>
    <h1>Username:{data.username}</h1>
    <em>Name</em>
    <input type='text' value={name} onChange={(e)=>setname(e.target.value)}/><br/>{''}
    <em>username</em>
    <input type='text' value={username} onChange={(e)=>setusername(e.target.value)}/><br/>{''}
    <em></em>
    <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>{''}
    <button onClick={handleChange}>change data</button>

    </div>
  )
}

export default Putmethod
