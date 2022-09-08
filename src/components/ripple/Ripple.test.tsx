import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Ripple } from '@src/components/ripple'

describe('ripple', () => {
  test('should render component', () => {
    render(<Ripple />)
  })
})
