import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Machine = () => {
    const [user,setUser] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate()
    const userLogin=(e)=>{
        axios.post("https://fakestoreapi.com/auth/login",{username:user.email,password:user.password}).then((e)=>{
            console.log(e)
            if(e.status==200){
            localStorage.setItem("token",e.data.token)
            navigate("/machineTest")
        }
        })
    }
  return (
    <div>
      <input type="text" onChange={(e)=>setUser({...user,email:e.target.value})} name="email" value={user.email} />
      <input type="password" onChange={(e)=>setUser({...user,password:e.target.value})} name='password' value={user.password}/>
      <button onClick={userLogin} > login </button>
    </div>
  )
}

export default Machine
