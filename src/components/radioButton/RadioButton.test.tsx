import React, { useState } from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { RadioButton } from '@src/components/radioButton/index'

describe('radio-button', () => {
  const Component = () => {
    const [test, setTest] = useState<string>('')

    return (
      <div className="field-radiobutton">
        <RadioButton
          inputId="test"
          name="test"
          value="Test Component"
          onChange={e => setTest(e.target.value)}
          checked={test === 'Test Component'}
        />
        <label htmlFor="city3">Test Component</label>
      </div>
    )
  }
  it('should render component', () => {
    render(<Component />)
  })
})
