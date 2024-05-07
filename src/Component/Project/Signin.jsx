import { useFormik } from 'formik'
import '../../Styles/Login.css'
import React, { createContext, useState } from 'react'
import * as Yup from 'yup'
import bg from '../images/bg.jpg'
import { Navigate, useNavigate } from 'react-router-dom'



   const Signin = () => {
    const Navbarcontext=createContext();
    const [message,setMessage]=useState("")
    const Navigate=useNavigate()
     const fromobj=useFormik({
        initialValues:{
            user:'',
            pass:'',
        },
         validationSchema:Yup.object({
            user:Yup.string()
            .required('required input')
            .min(4,'minimum 4 charac')
            .max(10,'maximum 10 charac'),
            pass:Yup.string()

            .required('required input')
            .min(5,'minimum 5 charac')
            .max(10,'maximum 10 charac')

         }),
       

         onSubmit:(values)=>{
         if (values.user == "Buddhadeb" && values.pass == "Darknight") {
          
          localStorage.setItem("login", "Buddhadeb");
          setMessage("");
          //setLogin("Buddhadeb");
         Navigate ('/home')
        
         }else{
          console.log("user1");
          setMessage("Invalid User");
          Navigate('/signin')
          return ;
          }
         
        }
        
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
    fromobj.handleSubmit()

}
   return (
     <>
     <div className='main-div' style={{backgroundImage:`url(${bg})`}}>
     
     <div className='cont'>
      <form onClick={handleSubmit}>
      <table>
       <span>{message}</span>
      <tr>
      <td>User</td>
      <td>
      <input type="text" placeholder='User' onChange={fromobj.handleChange} name='user'id='input' />
      {fromobj.touched.user&&fromobj.errors.user?(<em>{fromobj.errors.user}</em>):null}
      </td>
      </tr>
      
      <tr>
      <td>Password</td>
      <td>
      <input type="Password" placeholder='Pass' onChange={fromobj.handleChange} name='pass'id='input'/>
       {fromobj.touched.pass&&fromobj.errors.pass?(<em>{fromobj.errors.pass}</em>):null}
      </td>
      </tr>
     

      </table>
      <div className='btnn'>
        <button className='btn-login' type='submit'>Submit</button>
        </div>
      </form>
     </div>
     
      </div>
      
     
     </>
  )
}

export default Signin
