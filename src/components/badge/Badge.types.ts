import { HTMLAttributes } from 'react'

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

export type BadgeSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs'
export type BadgeRounding = 'circle' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export interface IBadge extends HTMLAttributes<HTMLDivElement> {
  sizes?: BadgeSize // Badge size
  variant?: BadgeVariant // Badge variant
  rounding?: BadgeRounding
}
