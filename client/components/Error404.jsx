import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='main-page'>
      <h1>404</h1>
      <p>This page doesn&apos;t exist. I may still be implementing it.</p>
      <Link to='/'><button>Home</button></Link>
      <Link to='/game'><button>Game</button></Link>
    </div>
  )
}

export default Error404
