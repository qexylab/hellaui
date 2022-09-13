import { HTMLAttributes, ReactNode } from 'react'

export type RadioButtonSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export interface IRadioButton extends HTMLAttributes<HTMLInputElement> {
  checked?: boolean // Checked radioButton state
  size?: RadioButtonSize // RadioButton size
  disabled?: boolean // Disable radioButton
  tooltipText?: ReactNode // Tooltip at the bottom of the radioButton
  error?: boolean // Error state
}
