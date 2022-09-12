import { AccordionSize } from '@src/components/accordion/Accordion.types'

export const getAccordionStyle = (size: AccordionSize) => {
  let textSize

  switch (size) {
    case 'xs':
      textSize = 14
      break
    case 'sm':
      textSize = 16
      break
    case 'md':
      textSize = 18
      break
    case 'lg':
      textSize = 20
      break
    case 'xl':
      textSize = 24
      break
    default:
      textSize = 18
  }
  return {
    textSize
  }
}
