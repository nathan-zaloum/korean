import React, { useState, useEffect } from 'react'

const Key = (props) => {
  const [classValue, setClass] = useState('key')

  useEffect(() => {
    if (props.value === 'shift') {
      setClass('key shift')
    } else if (props.value === 'undo') {
      setClass('key undo')
    } else if (props.value === 'complete block') {
      setClass('key complete')
    } else if (props.value === '') {
      setClass('space')
    }
  }, [])

  return (
    <div className={classValue}>
      <p>{props.value}</p>
    </div>
  )
}

export default Key
