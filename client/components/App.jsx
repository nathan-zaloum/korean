import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Error404 from './Error404'
import Home from './Home'
import Keyboard from './Keyboard/Keyboard'

const App = () => {
  return (
    <>
        <Routes>
          <Route path='*' element={<Error404 />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
        <Keyboard />
    </>
  )
}

export default App
