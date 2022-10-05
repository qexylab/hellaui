import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { CloseIcon } from '@src/icons/closeIcon/index'

describe('closeIcon', () => {
  test('should render component', () => {
    render(<CloseIcon textSize={14} />)
  })
})
