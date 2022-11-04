import { HTMLAttributes } from 'react'
import { DefaultRounding, DefaultSize } from '@src/other/utils/defaultTypes'

export type BadgeVariant =
  | 'default'
  | 'primary'
  | 'warning'
  | 'success'
  | 'error'
  | 'dark'
  | 'light'
  | 'lightInactive'
  | 'lightDisable'
  | 'white'
  | 'whiteInactive'
  | 'whiteDisable'

export interface IBadge extends HTMLAttributes<HTMLDivElement> {
  sizes?: DefaultSize // Badge size
  variant?: BadgeVariant // Badge variant
  rounding?: DefaultRounding // Badge rounding
}
