import { ChangeEventHandler, InputHTMLAttributes, ReactNode } from 'react'
import { DefaultRounding } from '@src/other/utils/defaultTypes'

export type LabelPosition = 'left' | 'right'

export interface IToggle extends InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean // Toggle state
  onChange?: ChangeEventHandler<HTMLInputElement> // Change toggle state event
  labelPosition?: LabelPosition // Label position
  // sizes?: DefaultSize // Toggle size
  rounding?: DefaultRounding // Toggle rounding
  disabled?: boolean // Disable toggle
  helpText?: ReactNode // Help text at the bottom of the component
}
