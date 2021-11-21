import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Error404 from './Error404'
import Nav from './Nav'
import Home from './Home'

const App = () => {
  return (
    <>
        <Nav />
        <Routes>
          <Route path='*' element={<Error404 />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
    </>
  )
}

export default App
