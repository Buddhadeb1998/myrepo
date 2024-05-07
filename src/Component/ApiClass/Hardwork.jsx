import { Api } from '@mui/icons-material'
import { blue } from '@mui/material/colors'
import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
const API='https://jsonplaceholder.typicode.com/users/'

const Hardwork = () => {
  const Navigate=useNavigate()
  const formobj= useFormik({
    initialValues:{
      user:'',
      pass:"",
      cpass:'',
    },
    validationSchema:Yup.object({
     user:Yup.string()
     .required('input required')
     .max(8,'max 8 charac'),
     pass:Yup.string()
     .required('input required')
     .min(5,'min 5 charac')
     .max(8,'max 8 chrac'),
     cpass:Yup.string()
     .required('input required')
     .oneOf([Yup.ref('pass'),null],'pass not matched')
    }),
    onSubmit:(value)=>{
    console.log(value);
   var usr=value.user
   var pss=value.pass
   var cpss=value.cpass
   axios
   .post(API,{usr,pss,cpss})
   .then((res)=>{
    console.log(res.data);
    if(res.data!=null){
     Navigate('/Getperson')
    }
   })
    }
  })
  const submitedHandler=(e)=>{
    e.preventDefault()
    formobj.handleSubmit()
  }
 return(
   <>
   <form onSubmit={submitedHandler}>
    <table >
    <tr>
    <td>
    Name:
    </td>
    <td>
    <input type='text' name='user' onChange={formobj.handleChange}/>
    {formobj.errors.user? <i style={{color:'blue'}}>{formobj.errors.user}</i>:null}
    </td>
    
    </tr>
    <tr>
    <td>
     pass:
    </td>
    <td>
    <input type='text' name='pass' onChange={formobj.handleChange}/>
    {formobj.errors.pass? <i style={{color:'blue'}}>{formobj.errors.pass}</i>:null}
    </td>
    
    </tr>
    <tr>
    <td>
    Cpass:
    </td>
    <td>
    <input type='text' name='cpass' onChange={formobj.handleChange}/>
    {formobj.errors.cpass? <em style={{color:'blue'}}>{formobj.errors.cpass}</em>:null}
    </td>
    </tr>
    <tr>
    <td>
    <button type='submit'>Submit</button>
    </td>
    
    </tr>
    
    </table>
    
   </form>
   
   </>
 )
}

export default Hardwork
