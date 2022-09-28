import React, { useState } from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { NoSsr } from '@src/components/noSsr/index'

describe('nossr', () => {
  it('should render component', () => {
    render(<NoSsr />)
  })
})
