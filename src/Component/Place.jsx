import React from 'react'

const Place = () => {
  var login = JSON.parse(localStorage.getItem("login"));
  return (
    <div>
         
      {login.user}
      {login.pass}
      
    </div>
  )
}

export default Place
