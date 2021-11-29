import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setBlockIndex, setCurrentWord } from '../../actions'
import { randomWord, stringToArray } from '../../utils'

import Block from './Block'

const Gameboard = () => {
  const gameState = useSelector(globalState => globalState.game)
  const dispatch = useDispatch()

  useEffect(() => {
    const newWord = randomWord()
    dispatch(setCurrentWord(newWord))
    dispatch(setBlockIndex(0))
  }, [])

  return (
    <div className='gameboard-base'>
      <div className='word'>{
        stringToArray(String(gameState.currentWord.hangul)).map((char, i) => (
          <Block key={i} index={i} value={char} />
        ))
      }</div>
      <div className='current'>{ gameState.currentInput }</div>
    </div>
  )
}

export default Gameboard
