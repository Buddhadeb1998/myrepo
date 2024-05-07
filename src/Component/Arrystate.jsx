import React, { useState } from 'react'
import data2 from './Data2'

const Arrystate = () => {
  const [ student,setstudent]=useState(data2);
  const removeHandler=()=>{
    setstudent([]);
  };
  
  const onHandeler=(id)=>{
    let newstd=student.filter((std)=>std.id!==id);
    setstudent(newstd);
  }
  return (
    <div>
    {student.map((std)=>{
     const  {id,name}=std;
      return(
        <div key={id}>
        <h2>{name}</h2>
        <button type='button' onClick={()=>onHandeler(id)}>Remove</button>
        </div>
      )
    })}
    <button type='button' onClick={removeHandler}>RemoveALL</button>
    
    </div>
  )
}


export default Arrystate
