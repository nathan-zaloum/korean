import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Error404 from './Error404'
import Nav from './Nav'
import Home from './Home'
import CharacterSheet from './CharacterSheet/CharacterSheet'
import Categories from './Categories'
import Individuals from './Individuals'

const App = () => {
  return (
    <>
        <Nav />
        <Routes>
          <Route path='*' element={<Error404 />} />
          <Route exact path='/' element={<Home />} />
          <Route exact path='/' element={<CharacterSheet />} />
          <Route exact path='/:categories' element={<Categories />} />
          <Route exact path='/:categories/:individuals' element={<Individuals />} />
        </Routes>
    </>
  )
}

export default App
