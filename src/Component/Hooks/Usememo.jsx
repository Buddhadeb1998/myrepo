import React, { useMemo, useState } from 'react'

// const Usememo = () => {
//     const [data,setData]=useState(0);
//     const callMemo=useMemo(()=>{
//         return cal(data)
//     },[data])
//   return (
//     <div>
//       <input type='text'onChange={(e)=>setData(e.target.value)}/>
//       <h1>{callMemo}</h1>
//     </div>
//   )
// }

//  const cal=(x)=>{
    
//     for(var i=0;i<1000;i++){
//       return x-2
//     }
// }
const Usememo=()=>{
  
const [count, setCount]=useState(0);
const [item, setitem]=useState(0);
 const Multicountmemo=useMemo(function multicount()
 {
    console.warn('multicount')
  return count*5
 },[count])

return(
<>
  <h2>Use memo</h2>
  <h2>count{count}</h2>
  <h2>item{item}</h2>
  <h2>{Multicountmemo}</h2>


  <button onClick={()=>setCount(count+5)}>increase</button>
  <button onClick={()=>setitem(item+1)}>increase</button>

</>

)

}

export default Usememo
