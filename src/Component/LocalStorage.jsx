import React, { useState } from 'react'

 const LocalStorage = () => {
    const[data,setData]=useState('')
    const handleDatasave=()=>{
        localStorage.setItem('login',data);

    }
    const handleChange=(e)=>{
     setData(e.target.value)
    }

    const handleGetData=()=>{
      const getdata= localStorage.getItem("login")
     document.getElementById("f1").value=getdata
     
    }
    const handleClearData=()=>{
      localStorage.removeItem('login')
    }
    
  return (
    <div>
    <h1>
    <em>This is LocalStorage</em>
    </h1>
    <input type='text'
    placeholder='enter the data'
    onChange={handleChange}/>
    <button onClick={handleDatasave}>Save</button>
    <br/>
    <br/>
    <button onClick={handleGetData}>Getdata</button>
    
    <input type='text'id='f1'/><br/><br/>
    <button onClick={handleClearData}>Cleardata</button>
      
    </div>
  )
}

export default LocalStorage
