import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>Hangul</div>
      <div className='header-right'>
        <Link to='/game'><button>Home</button></Link>
        <Link to='/game'><button>Game</button></Link>
      </div>
    </div>
  )
}

export default Header
