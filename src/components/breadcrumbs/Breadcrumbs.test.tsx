import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Breadcrumbs } from '@src/components/breadcrumbs/index'

describe('breadcrumbs', () => {
  test('should render component', () => {
    render(<Breadcrumbs items={[]} />)
  })
})
