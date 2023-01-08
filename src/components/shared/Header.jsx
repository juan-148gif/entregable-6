import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>e-comerce</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
                <li><Link to='/purchases'>Purchases</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header