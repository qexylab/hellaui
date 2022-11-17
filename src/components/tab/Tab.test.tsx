import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Tab } from '@src/components/tab/index'

describe('tab', () => {
  test('should render component', () => {
    render(
      <Tab onChange={() => {}} activeTab={1} tabs={[]}>
        Test Chip
      </Tab>
    )
  })
})
