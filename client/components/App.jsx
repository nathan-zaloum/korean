import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Error404 from './Error404'
import Gameboard from './Gameboard/Gameboard'
import Keyboard from './Keyboard/Keyboard'

const App = () => {
  return (
    <>
        <Routes>
          <Route path='*' element={<Error404 />} />
          <Route exact path='/' element={<Gameboard />} />
        </Routes>
        <Keyboard />
    </>
  )
}

export default App
