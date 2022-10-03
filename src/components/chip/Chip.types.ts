import { HTMLAttributes, ReactNode } from 'react'

export type ChipSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs'
export type ChipRounding = 'circle' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
export type ChipVariant = 'outlined' | 'filled'

export interface IChip extends HTMLAttributes<HTMLDivElement> {
  sizes?: ChipSize // Chip size
  disabled?: boolean // Disable chip
  rounding?: ChipRounding // Chip Rounding
  variant?: ChipVariant // Chip variant
  bgColor?: string // Set the button background color
  textColor?: string // Set the button background color
  selected?: boolean // Selected chip
  onRemove?: () => void // Remove function
  iconBefore?: ReactNode // Icon before text
  iconAfter?: ReactNode // Icon after text
  badge?: number // Badge number
}
