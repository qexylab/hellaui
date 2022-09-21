import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import {Skeleton} from "@src/components/skeleton/index";

describe('skeleton', () => {
  test('should render component', () => {
    render(<Skeleton width='25px' height='25px' rounding='md' />)
  })
})
