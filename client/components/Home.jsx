import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='main-page'>
      <h1>Hangul</h1>
      <p>This website is for me to learn Hangul.</p>
      <Link to='/game'><button>Game</button></Link>
    </div>
  )
}

export default Home
