import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Dropdown } from '@src/components/dropdown/index'

describe('dropdown', () => {
  test('should render component', () => {
    render(<Dropdown title="test123">test</Dropdown>)
  })
})
