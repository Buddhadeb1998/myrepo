import axios from 'axios';
import React, { useState } from 'react'
const API="https://jsonplaceholder.typicode.com/posts"

const Getmethod = () => {
//  const [show,setshow]=useState([])
//  const [err,setErr]=useState('');
//  const [isLoading,setIsLoading]=useState(false);
//  const GetDataHandler=()=>{
//     setIsLoading(true);
//     axios
//     .get(API)
//     .then((res)=>{
//      setIsLoading(false)
//      setshow(res.data)
//     })
//     .catch((error)=>{
//     console.log(error.message);
//     setErr(error.message)
//     })
//  }
 
//  if(err){
//     return(
//         <em>
//         <h1>{err}</h1>
//         </em>
//     )
//  }
//  if(isLoading){
//     return <em>Loading...</em>
//  }
//   return (
//     <>
//     <h1>Example of data fecthing (Axios get) method</h1>
//     <button onClick={GetDataHandler}>Get your Data</button>
//     <ol>
//     {show.map((e)=>{
//     return(
//       <li key={e.id}>
//       {e.title}
//       </li>

//     )
//  } )}
    
//     </ol>
//     </>
//   )  
// }
  
   const [show,setShow]=useState([])
   const [err,setErr]=useState('')
   const[loading,setLoading]=useState('')
     const Getupadte=()=>{
      axios.get(API )
    .then((res)=>{
      console.log(res);
     setShow(res.data)
     console.log(show);
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
     return(
      <>
      <h1>getmethod</h1>
     <button onClick={Getupadte}>Get updata</button>
      <ol>
      {show.map((e)=>{
         return(
         <li>{e.id}
             {e.title}
         </li>
         ) 
      })}
      </ol>
      </>
     )
    

}

export default Getmethod
