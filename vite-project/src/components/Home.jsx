import React from 'react'
import { Link } from 'react-router-dom'
const Home = ({name}) => {
  return (
    <div>
        <h1>Welcome {name}</h1>
        <Link to='/State'> Example</Link>
    </div>
  )
}


export default Home //rafce