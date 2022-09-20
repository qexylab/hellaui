import { RippleSize } from '@src/components/ripple/Ripple.types'
import { HTMLAttributes } from 'react'

export type AccordionSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export interface IAccordion extends HTMLAttributes<HTMLDivElement> {
  width?: string // Accordion width
  sizes?: AccordionSize // Accordion size
  iconPosition?: 'right' | 'left' // Icon position
  title?: string // Accordion title
  hideTopLine?: boolean // Hide top line
  hideBottomLine?: boolean // Hide bottom line
  rippleEffect?: boolean // Enable or disable ripple's
  rippleEffectColor?: string // Ripples color
  rippleEffectSize?: RippleSize // Ripples size
}
