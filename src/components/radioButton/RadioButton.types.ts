import { InputHTMLAttributes, ReactNode } from 'react'

export type RadioButtonSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export interface IRadioButton extends InputHTMLAttributes<HTMLInputElement> {
  inputId: string // Input id
  checked: boolean // Checked radioButton state
  sizes?: RadioButtonSize // RadioButton size
  disabled?: boolean // Disable radioButton
  tooltipText?: ReactNode // Tooltip at the bottom of the radioButton
  error?: boolean // Error state
  required?: boolean // Required state
  inputRef?: HTMLInputElement // Input ref
  value: string // Input value
  name?: string // Input name
}
