import { HTMLAttributes, ReactElement } from 'react'

export type ButtonSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs'
export type ButtonRounding = 'xl' | 'lg' | 'md' | 'sm' | 'xs'
export type ButtonVariant =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
type ButtonType = 'button' | 'reset' | 'submit'

export interface IButton extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant // Index Type
  type?: ButtonType // Set the original html type of button
  size?: ButtonSize // Index Size,
  rounding?: ButtonRounding // Index Rounding
  disabled?: boolean // Makes button disabled
  active?: boolean // Makes button active
  leftIcon?: ReactElement // Adds icon before button label
  rightIcon?: ReactElement // Adds icon after button label
  color?: string // Set the button color
  loading?: boolean // Shows loading spinner
  loadingText?: boolean // The label to show in the button when loading is true
  skeleton?: boolean // Skeleton state,
}
