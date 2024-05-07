import React from 'react'
import { useParams } from 'react-router-dom'

const Dynamicuser = () => {
    const parameter=useParams();
     const{place}=parameter
  return (

    <div>
     <h1>
      <em>
      Hey i am 
      </em>
      </h1>
      <h2>
       <em>{place}</em>
      </h2>
      <p>
      <em>
      {place} is very nice place
      </em>
      </p>
    </div>
  )
}

export default Dynamicuser
