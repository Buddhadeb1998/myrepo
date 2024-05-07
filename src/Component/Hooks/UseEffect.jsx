import React, { useEffect, useState } from 'react'

  const UseEffect = () => {
   const [count ,setCount]=useState(0)
   const [item ,setitem]=useState(0)
   useEffect(()=>{
    setTimeout(()=>{
updatecount()
    },2000)
    console.warn('useEffect');
   },[item])

   const updatecount=()=>{
    setCount(count+1)
   }
   const updateitem=()=>{
    setitem(item-1)
   } 
  return (
    <>
    <div>
      <h2>{count}</h2>
      <h2>{item}</h2>

    
      <button onClick={updateitem}>Increase</button>
    </div>
    </>
  )
}

export default UseEffect
