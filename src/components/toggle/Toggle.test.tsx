import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Toggle } from '@src/components/toggle/index'

describe('toggle', () => {
  test('should render component', () => {
    render(<Toggle checked={false} onChange={() => {}} />)
  })
})
