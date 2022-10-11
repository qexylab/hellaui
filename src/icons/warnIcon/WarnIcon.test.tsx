import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { WarnIconTriangle } from '@src/icons/warnIcon/index'

describe('chevronIcon', () => {
  test('should render component', () => {
    render(<WarnIconTriangle />)
  })
})
