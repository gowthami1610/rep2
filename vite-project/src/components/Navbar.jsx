import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
        <ul className="navbar">
            <li className="element"></li>
            <Link to='/'>Home</Link>
            <li className="element"></li>
            <Link to='/About'>About</Link>
            <li className="element"></li>
            <Link to='/Service'>Services</Link>
            <li className="element"></li>
            <Link to='/Contact'>Contactus</Link>
        </ul>
    </nav>
    
    </>
  )
}

export default Navbar