import React, { FC } from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Accordion } from '@src/components/accordion/index'
import { DefaultSize } from '@src/other/utils/defaultTypes'

const ACCORDION_TITLE = 'Hella UI'

describe('accordion', () => {
  const Component: FC<{ size?: DefaultSize }> = ({ size = 'md' }) => (
    <Accordion sizes={size} width="500px" title={ACCORDION_TITLE}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, tempore!
    </Accordion>
  )
  it('should render component', () => {
    render(<Component />)
  })
  it('should render component with custom size', () => {
    render(<Component size="xl" />)
  })
  it('should render component with size', () => {
    render(<Component size="xl" />)
  })
  it('should call onClick and see text in accordion when user clicks', () => {
    const test_function = jest.fn()
    render(
      <Accordion
        sizes="xl"
        onClick={() => {
          test_function()
        }}
        width="500px"
        title={ACCORDION_TITLE}
      >
        {ACCORDION_TITLE}
      </Accordion>
    )
    fireEvent.click(screen.getByRole('button'))
    expect(test_function).toHaveBeenCalledTimes(1)
  })
})
