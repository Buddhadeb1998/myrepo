import React, { useContext } from 'react'
// import { UseNavcontext } from './Navbar'
 import { Navbarcontext } from './Navbar';

 const UserContainer = () => {
    const {course,logout}=useContext(Navbarcontext);

  return (
    <div>
      {course !='plz'?(
        <>
        <p>Hello,{course.toUpperCase()}</p>
        <button type='button' onClick={logout}>Logout</button>
        
        </>
      ):(
        <em>plz login</em>
      )}
      
    </div>
)
}

export default UserContainer
