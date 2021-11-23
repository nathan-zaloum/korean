import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { generateWord } from '../../utils'

const Gameboard = () => {
  const gameState = useSelector(globalState => globalState.game)

  return (
    <div className='gameboard-base'>
      <div className='word'>안녕하세요</div>
    </div>
  )
}

export default Gameboard
