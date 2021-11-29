import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setCurrentBlock, setCurrentWord } from '../../actions'
import { randomWord } from '../../utils'

const Gameboard = () => {
  const gameState = useSelector(globalState => globalState.game)
  const dispatch = useDispatch()

  useEffect(() => {
    const newWord = randomWord()
    dispatch(setCurrentWord(newWord))
    dispatch(setCurrentBlock(newWord.hangul.charAt(0)))
  }, [])

  return (
    <div className='gameboard-base'>
      <div className='word'>{gameState.currentWord.hangul}</div>
      <div className='current'>{gameState.currentInput}</div>
    </div>
  )
}

export default Gameboard
