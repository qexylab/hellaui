import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import { Button } from '@src/components/button'
import '@testing-library/jest-dom'

const BTN_TEXT = 'Lorem ipsum'

describe('button', () => {
  test('should render component', () => {
    render(<Button />)
  })

  it('should render component with text', () => {
    render(<Button>{BTN_TEXT}</Button>);
  });

  test('renders the button', () => {
    render(<Button>{BTN_TEXT}</Button>);
    expect(screen.getByRole('button')).toHaveTextContent(`${BTN_TEXT}`);

  });

  test('should call onClick when user clicks on component', () => {
    const test_function = jest.fn();
    render(<Button onClick={test_function}>{BTN_TEXT}</Button>);
    fireEvent.click(screen.getByText(`${BTN_TEXT}`));
    expect(test_function).toHaveBeenCalledTimes(1);
  });
})
