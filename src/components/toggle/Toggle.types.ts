import { ChangeEventHandler, InputHTMLAttributes, ReactNode } from 'react'

export type LabelPosition = 'left' | 'right'
export type ToggleSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs'
export type ToggleRounding = 'circle' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export interface IToggle extends InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean // Toggle state
  onChange?: ChangeEventHandler<HTMLInputElement> // Change toggle state event
  labelPosition?: LabelPosition // Label position
  // sizes?: ToggleSize // Toggle size
  rounding?: ToggleRounding // Toggle rounding
  disabled?: boolean // Disable toggle
  helpText?: ReactNode // Help text at the bottom of the component
}
