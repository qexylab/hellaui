import { HTMLAttributes, ReactElement } from 'react'
import { DefaultRounding, DefaultSize } from '@src/other/utils/defaultTypes'

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
  sizes?: DefaultSize // Button Size,
  rounding?: DefaultRounding // Button Rounding
  disabled?: boolean // Makes button disabled
  active?: boolean // Makes button active
  leftIcon?: ReactElement // Adds icon before button label
  rightIcon?: ReactElement // Adds icon after button label
  bgColor?: string // Set the button background color
  textColor?: string // Set the button background color
  loading?: boolean // Shows loading spinner
  loadingText?: string // The label to show in the button when loading is true
  skeleton?: boolean // The skeleton to show before button rendering,
  skeletonWidth?: string // Skeleton width,
  skeletonHeight?: string // Skeleton height,
  plain?: boolean // Determine whether it's a plain button
  rippleEffect?: boolean // Enable or disable ripple's
  rippleEffectColor?: string // Ripples color
  rippleEffectSize?: DefaultSize // Ripples size
}
