import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Chevron } from '@src/components/chevron/index'

describe('chevron', () => {
  test('should render component', () => {
    render(<Chevron />)
  })
})
