import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Help = () => {
  return (
  
    <div>
    <div className='container bg-dark text-primary'>
    <header>Help Component</header>
    <nav className='navbar navbar-dark text-light bg-dark float-end'>
    <Link
    className='nav-link text-decoration-none text-light'
    to="employeehelp">
    Employee
    </Link>
    <Link className='nav-link text-decoration-none text-light'
    to="Otherhelp">
    other
    </Link>
    
    </nav>
    </div>
    <Outlet/>
    </div>
    
  )
}

export default Help
