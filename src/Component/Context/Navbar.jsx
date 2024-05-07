 import React, { createContext, useContext, useState } from 'react'
import UserContainer from './UserContainer';
 
 export const Navbarcontext=createContext();
//  export const UseNavcontext=()=>useContext(Navbarcontext);
 const Navbar = () => {
 const [course,setCourse]=useState("React js")
 const logout=()=>{
    setCourse('plz')
 };
  return (
     <Navbarcontext.Provider value={{course,logout}}>
     <nav>
     <h5>Context</h5>
     <UserContainer/>
    
    </nav>
    
    
    </Navbarcontext.Provider>
                                      
  )
}

export default Navbar
