import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import {Steps} from "@src/components/steps/index";

describe('steps', () => {
  test('should render component', () => {
    render(<Steps activeStep={1}>test</Steps>)
  })
})
