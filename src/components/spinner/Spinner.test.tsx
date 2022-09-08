import React from 'react'
import { render } from '@testing-library/react'
import { Spinner } from '@src/components/spinner'
import '@testing-library/jest-dom'

describe('spinner', () => {
  test('should render component', () => {
    render(<Spinner />)
  })
})
