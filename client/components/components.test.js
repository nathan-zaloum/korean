import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Home from './Home'
import Error404 from './Error404'

describe('Component tests', () => {
  test('<Home /> renders with default information', () => {
    const expected = {
      h1: 'Hangul',
      p: `This website is for me to learn Hangul.`
    }
    render(<Home />)
    const heading = screen.getByRole('heading', { level: 1 })
    const paragraph = screen.getByText(expected.p)
    const actual = {
      h1: heading.textContent
    }
    expect(actual.h1).toEqual(expected.h1)
    expect(paragraph).toBeInTheDocument()
  })
  test('<Error404 /> renders with default information', () => {
    const expected = {
      h1: '404',
      p: `This page doesn't exist. I may still be implementing it.`
    }
    render(<Error404 />)
    const heading = screen.getByRole('heading', { level: 1 })
    const paragraph = screen.getByText(expected.p)
    const actual = {
      h1: heading.textContent
    }
    expect(actual.h1).toEqual(expected.h1)
    expect(paragraph).toBeInTheDocument()
  })
})
