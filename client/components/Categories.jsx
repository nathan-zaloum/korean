import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

import { getCategory } from '../apis/dnd'
import { formatLink, getLastParam } from '../utils'

const Categories = () => {

  let location = useLocation()

  const loadingState = [ {index: '', name: 'Loading...', url: ''} ]
  const [links, setLinks] = useState(loadingState)

  const refreshList = () => {
    return getCategory(getLastParam(String(window.location.href), 1))
      .then(data => { return setLinks(data) })
      .catch(err => {
        console.log(err.message)
        return setLinks([ {index: '', name: 'Error when loading category links', url: ''} ])
      })
  }

  useEffect(() => {
    setLinks(loadingState)
    refreshList()
  }, [location])

  return (
    <div className='main-page'>
        <h1>{formatLink(getLastParam(String(window.location.href), 1))}</h1>
        <ul>
          {links.map(link => (
            <Link key={link.index} to={getLastParam(link.url, 1)}><div>{link.name}</div></Link>
          ))}
        </ul>
    </div>
  )
}

export default Categories
