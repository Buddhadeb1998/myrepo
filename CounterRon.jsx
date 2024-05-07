import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../redux/reduxslice'

const CounterRon = () => {
  const dispatch = useDispatch()
  const {value}=  useSelector((state)=>state.counterslice)
  return (
    <div>
    {value}
      <button onClick={()=>dispatch(increment())} style={{height:'20px',weight:'20px'}}>+</button>
    </div>
  )
}

export default CounterRon

