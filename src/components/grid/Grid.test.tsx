import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Grid } from '@src/components/grid/index'

describe('grid', () => {
  test('should render component', () => {
    render(<Grid>test</Grid>)
  })
})
