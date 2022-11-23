import { InputHTMLAttributes } from 'react'
import { DefaultRounding, DefaultSize } from '../../other/utils/defaultTypes'

export interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  sizes?: DefaultSize // Checkbox size
  rounding?: DefaultRounding // Checkbox rounding
  indeterminate?: boolean // Indeterminate state
  error?: boolean // Error state
}
