import { HTMLAttributes, ReactElement } from 'react'

export type ButtonSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs'
export type ButtonRounding = 'circle' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
export type ButtonVariant =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
type ButtonType = 'button' | 'reset' | 'submit'

export interface IButton extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant // Button Type
  type?: ButtonType // Set the original html type of button
  size?: ButtonSize // Button Size,
  rounding?: ButtonRounding // Button Rounding
  disabled?: boolean // Makes button disabled
  active?: boolean // Makes button active
  leftIcon?: ReactElement // Adds icon before button label
  rightIcon?: ReactElement // Adds icon after button label
  bgColor?: string // Set the button background color
  textColor?: string // Set the button background color
  loading?: boolean // Shows loading spinner
  loadingText?: string // The label to show in the button when loading is true
  skeleton?: boolean // The skeleton to show before button rendering,
  plain?: boolean // Determine whether it's a plain button
}