import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Error404 from './Error404'
import Home from './Home'
import Game from './Gameboard/Game'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='*' element={<Error404 />} />
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </>
  )
}

export default App
