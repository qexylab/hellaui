import { ReactNode } from 'react'
import { TooltipPosition } from '@src/components/tooltip/Tooltip.types'

export type TagSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs'
export type TagRounding = 'circle' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
export type TagVariant =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'cyan'
  | 'pink'
  | 'indigo'
  | 'teal'
  | 'gray'
  | 'purple'

export interface ITag {
  variant?: TagVariant // Tag variant
  sizes?: TagSize // Tag size
  rounding?: TagRounding // Tag rounding
  iconBefore?: ReactNode // Icon before
  iconAfter?: ReactNode // Icon after
  withTooltip?: boolean // Tag Tooltip
  tooltipPosition?: TooltipPosition // Tag Tooltip
  tooltipBackground?: string // Tag Tooltip
  width?: string // Tag width. The default is 100% content
}
