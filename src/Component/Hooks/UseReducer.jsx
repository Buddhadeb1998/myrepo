import React, { useReducer } from 'react'

const reducer = (show,action) => {
    switch(action){
        case 'Increament':
            return show +5;

        case 'Decreament':
            return show-5;
        case 'Reset':
          return (show=0);
    };

}
 
 const UseReducer = () => {
    const [show,dispatch]=useReducer(reducer,0);
   return (
    <>
    <h4><em>This is the example of useReducer</em></h4>
    <h1><em>{show}</em></h1>
    <button onClick={()=>{dispatch('Increament')}}>
     Increment
    </button>
    <button onClick={()=>{dispatch('Decreament')}}>
     Decrement
    </button>
    <button onClick={()=>{dispatch(' Reset')}}>
     Reset
    </button>
    </>
    
   )
 }
 
 export default UseReducer
 
