import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getNav } from '../apis/dnd'
import { dataToArray, formatLink } from '../utils'

const Nav = () => {

  const loadingState = [ 'Loading...' ]
  const [links, setLinks] = useState(loadingState)

  const refreshList = () => {
    return getNav()
      .then(data => { return setLinks(dataToArray(data)) })
      .catch(err => {
        console.log(err.message)
        return setLinks([ 'Error when loading navigation links' ])
      })
  }

  useEffect(() => {
    refreshList()
  }, [])

  return (
    <nav className='side-bar'>
        <Link key='home' to='/'><div className='nav-button'>Home</div></Link>
        {links.map(link => (
          <Link key={link} to={link}><div className='nav-button'>{formatLink(String(link))}</div></Link>
        ))}
    </nav>
  )
}

export default Nav
