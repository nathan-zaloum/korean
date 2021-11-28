import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { randomWord } from '../../utils'

const Gameboard = () => {
  const gameState = useSelector(globalState => globalState.game)
  const word = randomWord()

  return (
    <div className='gameboard-base'>
      <div className='word'>{word.hangul}</div>
    </div>
  )
}

export default Gameboard
