import { useFormik } from 'formik'
import React, { createContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Place from './Place'
import axios from 'axios'
// export const Navbarcontext=createContext();
 let API='https:jsonplaceholder.typicode.com/posts'
const Placement = () => {
  // const [course,setCourse]=useState("values")
  // const [login,setLogin]=useState("")
  //  const Navigate=useNavigate()
  //   const fromobj=useFormik({
  //       initialValues:{
  //           user:'',
  //           pass:"",
  //       },
  //       // validationSchema:Yup.object({
  //       //  user:Yup.string()
  //       //  .
  //       // }),

  //        onSubmit:(values)=>{
  //       //  console.log(values);
  //         localStorage.setItem("login",JSON.stringify(values))
  //       //  document.getElementById('user').value=values.user
  //       //  document.getElementById('pass').value=values.pass
  //         //setLogin({"user":values.user,"pass":values.pass});
  //        Navigate("/Place");

  //       }
  //   }) 

  //   const handleSubmithandle=(e)=>{
  //     e.preventDefault()
  //     fromobj.handleSubmit()
  //   }
    
  // return (
  //   <>
  //   <div>
  //   <form onSubmit={handleSubmithandle}>
  //   <table>
  //   <tr>
  //   <td>
  //   User:
  //   </td>
  //   <td>
  //   <input type='text' onChange={fromobj.handleChange} name='user' value={fromobj.values.user} />
  //   </td>
  //   </tr>
  //   <tr>
  //   <td>
  //    Pass:
  //   </td>
  //   <td>
  //   <input type='text' onChange={fromobj.handleChange} name='pass' />
  //   </td>
  //   </tr>
  //   <button type='submit'>Submit</button>
  //   </table>
    
  //   </form>
   

  //   </div>
    
  //   </>
  // )
  //  const[name,setName]=useState([])
  //  const [err,setErr]=useState('')
  //  const getupdate=()=>{
  //   axios 
  //   .get(API)
  //   .then((res)=>{
  //    setName(res.data)
  //   })
  //   .catch((err)=>{
  //    setErr(err.message)
  //   })
  //   if(err){
  //    return (
  //      {err}
  //    )
  //   }
  //  }
  
  // return(
  //   <>
  //   <button onClick={getupdate}>GetUpadte</button>
    
  //   {name.map ((e)=>{
  //     return(
  //      <table border={1}>
  //      <tr>
  //      <td>{e.title}</td>
  //      </tr>
       
  //      </table>
        
  //     )
  //   })}
    
  //   </>
  // )
   
  //  const[name,setName]=useState([])
  //  const[email,setEmail]=useState([])
  //  const [err,setErr]=useState('')
  //  const[print,setPrint]=useState({
  //   'name':'',
  //   'email':'',
  //  })
  //  const postupdate=()=>{
  //   axios
  //  .post(API,{name,email})
  //  .then((res)=>{
  //   setPrint(res.data)
  //   console.log(res.data);
  //  })
  //  .catch((err)=>{
  //   setErr(err.message)
  //  })
  //  if(err){
  //   return(
  //     {err}
  //   )
  //  }
  //  }
   

  // return(
  //   <>
  //   <button onClick={postupdate}>Post updata</button>
  //   Name:
  //   <input type='text' onChange={(e)=>setName(e.target.value)} value={name}/>
  //   Email:
  //   <input type='text' onChange={(e)=>setEmail(e.target.value)} value={email}/>
  //   <ol>
  //   {print.name}
  //   </ol>
   

  //   </>
  // )
   const fromobj=useFormik({
    initialValues:{
    user:'',
    pass:'',
    Cpass:'',
    },
     validationSchema:Yup.object({
     user:Yup.string()
     .min(8,'min 8digit')
     .max(12,'max 8digit'),

     pass:Yup.string()
     .required('its req').min(8,'min 8digit'),
     Cpass:Yup.string()
     .required('its req')
     .oneOf([Yup.ref('pass'),null],'pass not match')
    }),
      onSubmit:(value)=>{
      console.log(value);
    }
   
   })
    const handleChangeSubmit=(e)=>{
    e.preventDefault()
   fromobj.handleSubmit()
   }
  return(
    <>
    <form onSubmit={handleChangeSubmit}>
    <table>
    <tr>
    <td>
    User:
    </td> 
    <td>
    <input type='text' name='user' onChange={fromobj.handleChange}/>
    </td>
    </tr>
    {fromobj.touched.user && fromobj.errors.user ? (<em>{fromobj.errors.user}</em>) :null}
    <tr>
    <td>
     pass:
    </td>
    <td>
    <input type='text'  name='pass' onChange={fromobj.handleChange}/>
    </td>
    {fromobj.touched.pass && fromobj.errors.pass ? (<em>{fromobj.errors.pass}</em>) :null}
    </tr>
    <tr>
    <td>
     Cpass:
    </td>
    <td>
    <input type='text'  name='Cpass' onChange={fromobj.handleChange}/>
    </td>
    {fromobj.touched.Cpass && fromobj.errors.Cpass ? (<em>{fromobj.errors.Cpass}</em>) :null}
    </tr>
    <button type='submit'>Submit</button>
    
    </table>
    
    </form>
    
    </>
  )
}

export default Placement
