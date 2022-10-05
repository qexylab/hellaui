import { AccordionSize } from '@src/components/accordion/Accordion.types'

export const getAccordionStyle = (size: AccordionSize) => {
  let textSize

  switch (size) {
    case 'xs':
      textSize = 12
      break
    case 'sm':
      textSize = 14
      break
    case 'md':
      textSize = 16
      break
    case 'lg':
      textSize = 28
      break
    case 'xl':
      textSize = 22
      break
    default:
      textSize = 16
  }
  return {
    textSize
  }
}
