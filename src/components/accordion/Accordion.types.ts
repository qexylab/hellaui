import { HTMLAttributes } from 'react'

export type AccordionSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export interface IAccordion extends HTMLAttributes<HTMLDivElement> {
  size?: AccordionSize // Accordion size
  iconPosition?: 'right' | 'left' // Icon position
  title?: string
  hideTopLine?: boolean // Hide top line
  hideBottomLine?: boolean // Hide bottom line
}
