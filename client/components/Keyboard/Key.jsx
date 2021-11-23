import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { shift } from '../../actions'

const Key = (props) => {
  const { value } = props
  const [classValue, setClass] = useState('key')
  const dispatch = useDispatch()

  useEffect(() => {
    if (value === 'shift') {
      setClass('key shift')
    } else if (value === 'undo') {
      setClass('key undo')
    } else if (value === 'complete block') {
      setClass('key complete')
    } else if (value === '') {
      setClass('space')
    }
  }, [])

  const shiftCheck = () => {
    if (value === 'shift') {
      dispatch(shift())
    }
  }

  return (
    <div className={classValue} onClick={shiftCheck}>
      <p className='key-text'>{value}</p>
    </div>
  )
}

export default Key
