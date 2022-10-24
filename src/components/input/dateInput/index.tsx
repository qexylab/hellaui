import React, {forwardRef} from 'react';
import {IDateInput} from "@src/components/input/dateInput/DateInput.types";

const DateInput = forwardRef<HTMLInputElement, IDateInput>(({
    type = 'date',
    skeleton = false,
    tooltip = false
                                                            }) => {
  return (
      <div>
        <div>

        </div>
      </div>
  )
})

export default DateInput;