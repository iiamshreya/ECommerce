import React from 'react'
import'./Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <h1>E-commerce</h1>
    <div className='navbar-links'>
        <Link className='link' to={'/'}>Home</Link>
        <Link className='link' to={'/login'}>Login</Link>
        <Link className='link' to={'/register'}>Register</Link>
        <Link className='link' to={'/cart'}>cart</Link>



      
    </div>
    </nav>
  )
}
