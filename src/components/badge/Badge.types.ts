import { HTMLAttributes } from 'react'
import { DefaultRounding, DefaultSize } from '@src/other/utils/defaultTypes'

export type BadgeVariant =
  | 'default'
  | 'info'
  | 'warning'
  | 'success'
  | 'error'
  | 'gray'
  | 'dark'
  | 'light'
  | 'lightInactive'
  | 'lightDisable'
  | 'white'
  | 'whiteInactive'
  | 'whiteDisable'
  | 'whiteBlue'

export interface IBadge extends HTMLAttributes<HTMLDivElement> {
  sizes?: DefaultSize // Badge size
  variant?: BadgeVariant // Badge variant
  rounding?: DefaultRounding // Badge rounding
}
