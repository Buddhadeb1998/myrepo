import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

     const PrivateRoutingpage = (props) => {
     const navigate=useNavigate();
     useEffect(()=>{
     const getToken=localStorage.getItem("login")
     if(!getToken){
        navigate("/login")

     }
    },[navigate])
    return (
    <div>
    <props.name/>

    </div>
  )
}

export default PrivateRoutingpage
