import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Drawer } from '@src/components/drawer/index'

describe('drawer', () => {
  test('should render component', () => {
    render(<Drawer>Test Chip</Drawer>)
  })
})
