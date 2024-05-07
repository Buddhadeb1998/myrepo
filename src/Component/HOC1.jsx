import React from 'react'

const HOC1 = (props) => {
  return (
    <div>
      <header>
      Higher order component1
      </header>
       <props.name/>
    </div>
  )
}

export default HOC1
