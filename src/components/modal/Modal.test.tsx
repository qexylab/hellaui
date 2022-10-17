import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Modal } from '@src/components/modal/index'

describe('chip', () => {
  test('should render component', () => {
    render(<Modal>Test Chip</Modal>)
  })
})
