import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import DateInput from "@src/components/input/dateInput/index";

describe('link', () => {
  test('should render component', () => {
    render(<DateInput>test</DateInput>)
  })
})
