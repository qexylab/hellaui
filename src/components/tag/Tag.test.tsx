import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Tag } from '@src/components/tag/index'

describe('chip', () => {
  test('should render component', () => {
    render(<Tag>test</Tag>)
  })
})
