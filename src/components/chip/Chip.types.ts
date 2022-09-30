import { HTMLAttributes, ReactNode } from 'react'

export type ChipSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs'
export type ChipVariant =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'

export interface IChip extends HTMLAttributes<HTMLDivElement> {
  sizes?: ChipSize // Chip size
  disabled?: boolean // Disable chip
  variant?: ChipVariant // Chip variant
  plain?: boolean // Determine whether it's a plain chip
  selected?: boolean // Selected chip
  onRemove: () => void // Remove function
  iconBefore?: ReactNode // Icon before text
  iconAfter?: ReactNode // Icon after text
  badge?: number // Badge number
}
