import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import {Link} from "@src/components/link/index";

describe('chip', () => {
  test('should render component', () => {
    render(<Link link='test'>test</Link>)
  })
})
