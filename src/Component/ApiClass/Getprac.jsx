import axios from 'axios'
import React, { useState } from 'react'
const API="https://jsonplaceholder.typicode.com/posts"

const Getprac = () => {
    const [data,setData]=useState([])
    const [err,setErr]=useState('')
    const update=()=>{
        axios
        .get(API)
        .then((res)=>{
            console.log(res);
           setData(res.data)
        })
        .catch((err)=>{
          setErr(err.message)  
        })
    }
    if(err){
        return({err}
        )
    }
  return (
    <div>
      <button onClick={update}>Get update</button>
      {data.map((e)=>{
       return(
        <li> {e.title}</li>
       
       )
  })}
    </div>
  )
}

export default Getprac
