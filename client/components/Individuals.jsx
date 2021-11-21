import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

import { getIndividuals } from '../apis/dnd'
import { formatLink, getLastParam } from '../utils'

const Individuals = () => {

  let location = useLocation()

  const loadingState = [ {index: '', name: 'Loading...', url: ''} ]
  const [links, setLinks] = useState(loadingState)

  const refreshList = () => {
    console.log(getLastParam(String(window.location.href), 1))
    return getIndividuals(getLastParam(String(window.location.href), 2))
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
        </ul>
    </div>
  )
}

export default Individuals
