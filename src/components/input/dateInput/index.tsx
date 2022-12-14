import React, { forwardRef } from 'react'
import { IDateInput } from '@src/components/input/dateInput/DateInput.types'

const DateInput = forwardRef<HTMLInputElement, IDateInput>(
  ({ type = 'date', skeleton = false, tooltip = false }, ref) => {
    return (
      <div ref={ref}>
        <div>DateInput</div>
      </div>
    )
  }
)

export default DateInput
