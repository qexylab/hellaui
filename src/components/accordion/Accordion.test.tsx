import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Accordion } from '@src/components/accordion/index'

describe('ripple', () => {
  test('should render component', () => {
    render(<Accordion />)
  })
})
