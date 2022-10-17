import { HTMLAttributes } from 'react'
import { DefaultSize } from '@src/other/utils/defaultTypes'

export interface IRipple extends HTMLAttributes<HTMLDivElement> {
  duration?: number
  color?: string
  sizes?: DefaultSize
}

export interface newRipple {
  left: number
  top: number
}
