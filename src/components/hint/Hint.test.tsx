import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Hint } from '@src/components/hint/index'

describe('hint', () => {
  it('should render component', () => {
    render(<Hint />)
  })
})
