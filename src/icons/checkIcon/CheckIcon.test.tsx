import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { CheckIconOutline } from '@src/icons/checkIcon/index'

describe('chevronIcon', () => {
  test('should render component', () => {
    render(<CheckIconOutline />)
  })
})
