import { HTMLAttributes } from 'react'
import { DefaultSize } from '@src/other/utils/defaultTypes'

export interface IAccordion extends HTMLAttributes<HTMLDivElement> {
  width?: string // Accordion width
  sizes?: DefaultSize // Accordion size
  iconPosition?: 'right' | 'left' // Icon position
  title?: string // Accordion title
  hideTopLine?: boolean // Hide top line
  hideBottomLine?: boolean // Hide bottom line
  rippleEffect?: boolean // Enable or disable ripple's
  rippleEffectColor?: string // Ripples color
  rippleEffectSize?: DefaultSize // Ripples size
}
