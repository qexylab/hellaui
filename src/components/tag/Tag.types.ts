import { HTMLAttributes, ReactNode } from 'react'
import { TooltipPosition } from '@src/components/tooltip/Tooltip.types'
import { DefaultRounding, DefaultSize } from '@src/other/utils/defaultTypes'

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

export interface ITag extends HTMLAttributes<HTMLDivElement> {
  variant?: TagVariant // Tag variant
  sizes?: DefaultSize // Tag size
  rounding?: DefaultRounding // Tag rounding
  iconBefore?: ReactNode // Icon before
  iconAfter?: ReactNode // Icon after
  withTooltip?: boolean // Tag Tooltip
  tooltipPosition?: TooltipPosition // Tag Tooltip
  tooltipBackground?: string // Tag Tooltip
  width?: string // Tag width. The default is 100% content
}
