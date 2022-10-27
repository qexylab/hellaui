import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SelectInput } from '@src/components/input'

describe('selectInput', () => {
  test('should render component', () => {
    render(<SelectInput value="">test</SelectInput>)
  })
})
