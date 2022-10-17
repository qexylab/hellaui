import { DefaultSize } from '@src/other/utils/defaultTypes'

export const getRadioButtonStyle = (size: DefaultSize) => {
  let paddingLeft, minWidth, height

  switch (size) {
    case 'xs':
      minWidth = 16
      height = 16
      paddingLeft = 26
      break
    case 'sm':
      minWidth = 18
      height = 18
      paddingLeft = 28
      break
    case 'md':
      minWidth = 20
      height = 20
      paddingLeft = 30
      break
    case 'lg':
      minWidth = 22
      height = 22
      paddingLeft = 32
      break
    case 'xl':
      minWidth = 26
      height = 26
      paddingLeft = 36
      break
    default:
      minWidth = 20
      height = 20
      paddingLeft = 30
  }
  return {
    paddingLeft,
    minWidth,
    height
  }
}
