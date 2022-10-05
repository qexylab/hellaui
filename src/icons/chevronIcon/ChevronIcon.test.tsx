import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { ChevronIcon } from '@src/icons/chevronIcon/index'

describe('chevronIcon', () => {
  test('should render component', () => {
    render(<ChevronIcon />)
  })
})
