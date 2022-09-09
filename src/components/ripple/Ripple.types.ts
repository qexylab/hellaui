import { HTMLAttributes } from 'react'

export interface IRipple extends HTMLAttributes<HTMLDivElement> {
  duration?: number
  color?: string
}

export interface newRipple {
  left: number
  top: number
}
