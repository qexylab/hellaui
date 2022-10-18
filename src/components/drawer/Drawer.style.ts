import { DefaultSize } from '@src/other/utils/defaultTypes'

export const getDrawerStyle = (size: DefaultSize) => {
  let textSize, drawerWidth
  switch (size) {
    case 'xs':
      textSize = 12
      drawerWidth = 384
      break
    case 'sm':
      textSize = 14
      drawerWidth = 420
      break
    case 'md':
      textSize = 16
      drawerWidth = 488
      break
    case 'lg':
      textSize = 18
      drawerWidth = 592
      break
    case 'xl':
      textSize = 22
      drawerWidth = 800
      break
    default:
      textSize = 16
  }
  return {
    textSize,
    drawerWidth
  }
}
