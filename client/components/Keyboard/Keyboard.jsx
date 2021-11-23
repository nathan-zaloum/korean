import React, { useState } from 'react'

import Key from'./Key'

import { keyboardLower, keyboardUpper } from '../../utils'

const Keyboard = () => {
  const [upper, setUpper] = useState(false)

  return (
    <div className='keyboard-base'>
      {upper ? keyboardLower.map(key => { return <Key value={key}/> }) : keyboardUpper.map(key => { return <Key value={key}/> })}
    </div>
  )
}

export default Keyboard
