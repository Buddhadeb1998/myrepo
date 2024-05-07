import axios from 'axios'
import React, { useState } from 'react'
const API='https://jsonplaceholder.typicode.com/users'

const Postprac = () => {
    const [name,setName]=useState([])
    const [email,setEmail]=useState([])
    axios
    .post(API)
    .then((res)=>{
        setName(res.data)
    })    
  return (
    <div>
     User:
      <input type='text'/>
      Email:
      <input type='text'/>
    </div>
  )
}

export default Postprac
