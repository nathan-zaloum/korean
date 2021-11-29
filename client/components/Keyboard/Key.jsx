import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { shift, setCurrentInput, setBlockIndex, setNewWord, addScore } from '../../actions'
import { compareBlock, randomWord } from '../../utils'

const Key = (props) => {
  const { value } = props
  const [classValue, setClass] = useState('key')
  const gameState = useSelector(globalState => globalState.game)
  const dispatch = useDispatch()

  useEffect(() => {
    // Set styling for keys depending on their value
    switch(value) {
      case 'shift': setClass('key shift'); break
      case 'undo': setClass('key undo'); break
      case 'complete block': setClass('key complete'); break
      case '': setClass('space'); break
      default: setClass('key'); break
    }
  }, [])

  const clickCheck = () => {
    // Check for unique key presses
    switch(value) {
      case 'shift': dispatch(shift()); break
      case 'undo': let newArr = gameState.currentInput; newArr.splice(-1); dispatch(setCurrentInput(newArr)); break
      case 'complete block': if (compareBlock(gameState.currentInput, gameState.currentBlock)) {
        if (gameState.currentWord.hangul.length === gameState.blockIndex + 1) {
          // Word is complete
          dispatch(setNewWord(randomWord()))
          dispatch(addScore())
        } else {
          // Word is incomplete
          dispatch(setCurrentInput([]))
          dispatch(setBlockIndex(gameState.blockIndex += 1))
        }
      } else {
        console.log('wrong')
      } break
    }

    // Check for normal key presses
    if (classValue === 'key') {
      let newArr = gameState.currentInput
      newArr.push(value)
      dispatch(setCurrentInput(newArr))
    }
  }

  return (
    // onClick = onkeypress for keyboard
    <div className={classValue} onClick={clickCheck}>
      <p className='key-text'>{value}</p>
    </div>
  )
}

export default Key
