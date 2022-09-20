import { HTMLAttributes } from 'react'

export type RippleSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export interface IRipple extends HTMLAttributes<HTMLDivElement> {
  duration?: number
  color?: string
  sizes?: RippleSize
}

export interface newRipple {
  left: number
  top: number
}
