import { HTMLAttributes } from 'react'
import { RippleSize } from '@src/components/ripple/Ripple.types'

export interface DefaultInterface extends HTMLAttributes<HTMLDivElement> {
  rippleEffect?: boolean // Enable or disable ripple's
  rippleEffectColor?: string // Ripples color
  rippleEffectSize?: RippleSize // Ripples size
}
