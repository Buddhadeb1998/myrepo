import { type } from '@testing-library/user-event/dist/type'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Interview = () => {
   const [user,setUser]=useState({
    name:'',
    password:'',
   })
    const loginform=()=>{
        axios.post('https://fakestoreapi.com/auth/login',{username:user.name,password:user.password}).then((e)=>{
            console.log(e);
            localStorage.setItem('token',e.data.token)
        })
    }
  return (
  <>
  Name:
 <input type='text' name='name' value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})}/>
 <input type='text' name='password' value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
  <button onClick={loginform}>Submit</button>
 </>

  )  
}

export default Interview
