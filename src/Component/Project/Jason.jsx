import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
const API='https://jsonplaceholder.typicode.com/users/'
const Jason = () => {
  const  Navigate=useNavigate()
    const formobj= useFormik({
        initialValues:{
            name:'',
            pass:'',
            Cpass:'',
            email:''

        },
        validationSchema:Yup.object({
          name:Yup.string()
          .required('its required') 
          .min(5,'minimum 5digit') 
          .max(8,'limit cross'),
          pass:Yup.string()
          .required('its required')
          .min(5,'minimum 5digit')
          .max(8,'max limit 8'),
          Cpass:Yup.string()
          .required('its required')
          .oneOf([Yup.ref('pass'),null],'password does not match'),
          email:Yup.string()
          .required('its required') 
          .email('invalied email')
          
        }),
        onSubmit:(value)=>{
            console.log(value);
            var usr=value.name
            var eml=value.email
            axios
           .post(API,{usr,eml})
           .then((res)=>{
            console.log(res.data)
           })
           .catch((err)=>{
            alert(err.massege)
           })
           Navigate('./Getperson')
        }
    })
    const handlerSubmit=(e)=>{
     e.preventDefault()
     formobj.handleSubmit()
    }
  return (
    <div>
      <form onSubmit={handlerSubmit}>
      <table>
      <tr>
      <td>Name</td>
      <td>
      <input type='text' name='name' onChange={formobj.handleChange} />
      {formobj.errors.name ? <li>{formobj.errors.name}</li>:null}
      </td>
      </tr>
      <tr>
      <td>Pass</td>
      <td>
      <input type='text' name='pass' onChange={formobj.handleChange} />
      {formobj.errors.pass ? <li>{formobj.errors.pass}</li>:null}
      </td>
      </tr>
      <tr>
      <td>CPass</td>
      <td>
      <input type='text' name='Cpass' onChange={formobj.handleChange} />
      {formobj.errors.Cpass ? <li>{formobj.errors.Cpass}</li>:null}
      </td>
      </tr>
      <tr>
      <td>Email</td>
      <td>
      <input type='text' name='email' onChange={formobj.handleChange} />
      {formobj.errors.email ? <li>{formobj.errors.email}</li>:null}
      </td>
      </tr>
      <tr>
      <td>Gender</td>
      <td>
      <input type='radio' name='gender' value='Male' /> Male 
      <input type='radio' name='gender' value='female' /> FeMale 
      </td>
      </tr>
      <tr>
      <td>Course</td>
      <td>
      <select>course select
      <option>react</option>
      <option>Js</option>
      
      </select>
      </td>
      </tr>

      <button type='submit'>Submit</button>
      </table>
      
      </form>
    </div>
  )
}

export default Jason
