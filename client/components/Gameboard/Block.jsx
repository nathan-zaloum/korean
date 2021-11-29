import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const Block = (props) => {
  const { value, index } = props
  const [blockColor, setBlockColor] = useState('white')
  const gameState = useSelector(globalState => globalState.game)

  const checkStyle = () => {
    if (gameState.blockIndex >= index) {
      gameState.blockIndex === index ? setBlockColor('yellow') : setBlockColor('aquamarine')
    } else {
      setBlockColor('white')
    }
  }

  useEffect(() => {
    checkStyle()
  }, [gameState.blockIndex])

  return (
    <div className='block' key={index} style={{color: blockColor}}>{value}</div>
  )
}

export default Block
