import { DefaultInterface } from '@src/components/utils/default.interface'

export type AccordionSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export interface IAccordion extends DefaultInterface {
  width?: string // Accordion width
  size?: AccordionSize // Accordion size
  iconPosition?: 'right' | 'left' // Icon position
  title?: string // Accordion title
  hideTopLine?: boolean // Hide top line
  hideBottomLine?: boolean // Hide bottom line
}
