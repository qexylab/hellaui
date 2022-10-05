import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Chip } from '@src/components/chip/index'

describe('chip', () => {
  test('should render component', () => {
    render(<Chip>Test Chip</Chip>)
  })
})
