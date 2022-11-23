import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Checkbox } from '@src/components/checkbox/index'

describe('checkbox', () => {
  test('should render component', () => {
    render(<Checkbox />)
  })
})
