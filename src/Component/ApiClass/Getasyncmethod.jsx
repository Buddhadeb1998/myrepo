

import axios from 'axios';
import React, { useEffect, useState } from 'react'
const API="https://jsonplaceholder.typicode.com/posts"
const Getasynmethod = () => {
    const[ show,setShow]=useState([]);
    const [err,setErr]=useState('');
    const [issLoading,setIsLoading]=useState(false);
    const GetDataAsyncHandler=async()=>{
     setIsLoading(true);
     try{
        const DataFech=await axios.get(API);
        setIsLoading(false);
        console.log(DataFech.data);
        setShow(DataFech.data);
     } catch(error){
       setErr(error.message) 
     }
    }
    useEffect(()=>{
      GetDataAsyncHandler();
    },[]);
    if(err){
  return (
    <em>
    <h1>{err}</h1>
    </em>
  )
  }
  if(issLoading){
    return <em>Loading...</em>
  }
  return(
    <>
    <h1>example of data fecthing</h1>
    <ol>
    {show.map((e)=>{
      <li key={e.id}>
      {e.name}&{e.email}
      </li>
    })}
    
    </ol>
    </>
  )

}

export default Getasynmethod
