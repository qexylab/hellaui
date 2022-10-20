import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Link } from '@src/components/link/index'

describe('link', () => {
  test('should render component', () => {
    render(<Link href="test">test</Link>)
  })
})
