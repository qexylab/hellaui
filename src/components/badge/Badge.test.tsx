import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Badge } from '@src/components/badge/index'

describe('badge', () => {
  test('should render component', () => {
    render(<Badge>15</Badge>)
  })
})
