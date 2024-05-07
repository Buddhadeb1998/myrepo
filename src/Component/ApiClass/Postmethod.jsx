import axios from 'axios'
import React, { useState } from 'react'
 const API='https://jsonplaceholder.typicode.com/users'
 const Postmethod = () => {
  //   const [name,setName]=useState('')
  //   const [username,setuserName]=useState('')
  //   const [email,setEmail]=useState('')

  //   const handlepost=()=>{
  //     axios
  //     .post(API,{name,username,email})
  //     .then((response)=> console.log(response.data))

  //   }

  // return (
  //   <div>
  //     Name:
  //     <input type="text" onChange={(e)=>setName(e.target.value)} value={name} /><br/><br/>
  //     username:
  //     <input type="text" onChange={(e)=>setuserName(e.target.value)} value={username} /><br/><br/>
  //     Email:
  //     <input type="text" onChange={(e)=>setEmail(e.target.value)}value={email}/><br/><br/>
  //     <button onClick={handlepost}>Posttdata</button>
  //   </div>
  // )

  //  const [name,setName]=useState([])
  //  const [username,setuserName]=useState([])
  //  const [email,setEmail]=useState([])
  //  const [response,setResponse]=useState({
  //   "name": String,
  //   "username": String,
  //   "email": String,
  //   "id": Number
  //  })
  //   const[err,setErr]=useState('')
  //   const handlepost=()=>{
    
  //   axios
  //   .post(API,{name,username,email})
  //   .then((res)=>{
  //     setResponse(res.data)
  //     console.log(res.data);
  //   })
  //   .catch((err)=>{
  //     setErr(err.massege)
  //   })
  // }
  //  if(err){
  //   return(
  //     <em>{err}</em>
  //   )
  //  }
  // return(
  //  <>
  //   <div>
  //   Name: <input type='text' onChange={(e)=>setName(e.target.value)} value={name}/>
  //   username: <input type='text' onChange={(e)=>setuserName(e.target.value)} value={username}/>
  //   Email: <input type='text' onChange={(e)=>setEmail(e.target.value)} value={email}/>
  //   <button onClick={handlepost}>Get update</button>
  //    <ol>
  //   { response.name }
  //   </ol>
  //   </div>
  //   </>
  // )

  const [name,setName]=useState([])
  const [email,setEmail]=useState([])
  const [err,setErr]=useState([])
  const [response,setResponse]=useState({
   "name": '',
   "email": String,


  })


  const postbuttonChange=()=>{
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
  
  return(
    <>
    Name:
    <input type='text' onChange={(e)=>setName(e.target.value)} value={name}/>
    Email:
    <input type='text' onChange={(e)=>setEmail(e.target.value)} value={email}/>
     <button onClick={postbuttonChange}>postbuttonChange</button>
      <ol>
      {response.name}
      </ol>
    </>
  )
}

export default Postmethod
