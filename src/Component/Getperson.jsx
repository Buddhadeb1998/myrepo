import axios from 'axios'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const API="https://jsonplaceholder.typicode.com/users"

const Getperson = () => {
    const [user,setUser]=useState([])
    const [err,setErr]=useState('')
    const getbutton=()=>{
    axios
    
    .get(API)
    .then((res)=>{
     setUser(res.data)
    })
    .catch((err)=>{
     setErr(err.message)
    })
}
    if(err){
        return(
            {err}
        )
    }

  return (
    <>
    <div>
      <h1> METHOD</h1>
      <button onClick={getbutton}>GetButton</button>
    </div>
    {user.map((e)=>{
        return(
            <>
           <table border={1}>
           <tr>
           <td>
           {e.username}
           </td>
           <td>
           {e.email}
           </td>
           <td>
           <NavLink to={'/?id='+e.id}>Edit </NavLink>
           </td>
           </tr>
           
           </table>

            </>

        )
    })}



    
    </>
  )
}

export default Getperson
