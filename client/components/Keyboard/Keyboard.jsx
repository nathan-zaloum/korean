import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Key from'./Key'

import { keyboardLower, keyboardUpper } from '../../utils'

const Keyboard = () => {
  const shiftState = useSelector(globalState => globalState.shift)
  const [upper, setUpper] = useState(false)

  return (
    <div className='keyboard-base'>
      {shiftState ? keyboardUpper.map((key, index) => { return <Key key={index} value={key}/> }) : keyboardLower.map((key, index) => { return <Key key={index} value={key}/> })}
    </div>
  )
}

export default Keyboard
