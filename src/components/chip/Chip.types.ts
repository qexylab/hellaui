import { HTMLAttributes, ReactNode } from 'react'
import { TooltipPosition } from '@src/components/tooltip/Tooltip.types'
import { DefaultRounding, DefaultSize } from '@src/other/utils/defaultTypes'

export type ChipVariant = 'outlined' | 'filled'

export interface IChip extends HTMLAttributes<HTMLDivElement> {
  sizes?: DefaultSize // Chip size
  disabled?: boolean // Disable chip
  rounding?: DefaultRounding // Chip Rounding
  variant?: ChipVariant // Chip variant
  bgColor?: string // Set the button background color
  textColor?: string // Set the button background color
  borderColor?: string // Set the button border color
  selected?: boolean // Selected chip
  onRemove?: () => void // Remove function
  iconBefore?: ReactNode // Icon before text
  iconAfter?: ReactNode // Icon after text
  badge?: number // Badge number
  withTooltip?: boolean // Chip Tooltip
  tooltipPosition?: TooltipPosition // Chip Tooltip
}
