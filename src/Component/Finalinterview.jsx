import React, { useEffect } from 'react'

const Finalinterview = () => {
   
       var a= localStorage.getItem('username')
   
  return (
    <div>
     <h1>Welcome to {a}</h1>
    </div>
  )
}

export default Finalinterview
