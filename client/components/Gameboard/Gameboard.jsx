import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { generateWord } from '../../utils'

const Gameboard = () => {
  // const [position, setPosition] = useState({})
  const gameState = useSelector(globalState => globalState.game)

  return (
    <div className='gameboard-base'>
      <div className='word'>WORD</div>
    </div>
  )
}

export default Gameboard
