import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initValue,add,sub,reset } from './CountercompShow';

const Counter = () => {
    const data=useSelector(initValue);
    const dispatch=useDispatch()
  return (
    <div>
      <h1>{data}</h1>
      <button onClick ={()=>dispatch(add())}>+(ADD)</button>
      <button onClick ={()=>dispatch(sub())}>-(Sub)</button>
      <button onClick ={()=>dispatch(reset())}>0(reset)</button>


    </div>
  )
}

export default Counter
