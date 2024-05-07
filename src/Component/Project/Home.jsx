import React from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'
 import Food2 from '../images/Food2.jpg'
import'../../Styles/Home.css'
const Home = () => {
  return (
    <Layout>
     <div className='home'style={{backgroundImage:`url(${Food2})`}} >
    <div className='headerContainer'>
    <h1>Food website</h1>
    <p>Best Food Quality in Bharat</p>
    <Link to='/menu'>
    <button>
    Order Now
    </button>
    </Link>
    
    </div>
    
    </div>
    
    </Layout>
  )
}

export default Home
