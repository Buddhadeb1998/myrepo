import axios from 'axios'
import React, { useEffect, useState } from 'react'

   const MachineTest = () => {
   const [user,setUser]=useState({
     name:'',
     email:''
   })
    //  console.log(localStorage.getItem("token"))
    const submitHandler = ()=>{
        axios.post("https://fakestoreapi.com/products",{username:user.name},{
        headers: {
        'Authorization': "Bearer "+localStorage.getItem("token"),
        'MyCustomHeader2': '2'
    }
    }).then((e)=>console.log(e.data))
    }
  
  return (
    <div>
      User
      <input type='text' name='name' onChange={(e)=> setUser({...user,name:e.target.value})} value={user.name}/>
      <button onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default MachineTest
