import { HTMLAttributes } from 'react'

export interface IRipple extends HTMLAttributes<HTMLDivElement> {
  duration?: number
  color?: string
}

export interface newRipple {
  x: number
  y: number
  size: string
}
