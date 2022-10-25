import { InputHTMLAttributes, ReactNode } from 'react'

export interface IDateInput extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'date' | 'date-range' // DateInput type
  icon?: ReactNode // Icon in the right corner
  clearIcon?: boolean // Display clear icon
  skeleton?: boolean // Skeleton state
  tooltip?: boolean // Tooltip state
}
