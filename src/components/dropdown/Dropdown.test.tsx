import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { DropDown } from '@src/components/dropdown/index'

describe('dropdown', () => {
  test('should render component', () => {
    render(<DropDown title="test123">test</DropDown>)
  })
})
