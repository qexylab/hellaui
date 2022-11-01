import { DefaultRounding, DefaultSize } from '@src/other/utils/defaultTypes'
import { DrawerPosition } from '@src/components/drawer/Drawer.types'
import { CSSProperties } from 'react'

export const getDrawerStyle = (
  size: DefaultSize,
  position: DrawerPosition,
  visibleState: boolean,
  rounding: DefaultRounding,
  width?: number,
  height?: number
) => {
  let textSize,
    drawerWidth,
    drawerHeight,
    positionStyles: CSSProperties,
    borderRadius: string

  switch (size) {
    case 'xs':
      textSize = 12
      drawerWidth = 384
      drawerHeight = 192
      break
    case 'sm':
      textSize = 14
      drawerWidth = 420
      drawerHeight = 210
      break
    case 'md':
      textSize = 16
      drawerWidth = 488
      drawerHeight = 244
      break
    case 'lg':
      textSize = 18
      drawerWidth = 592
      drawerHeight = 296
      break
    case 'xl':
      textSize = 22
      drawerWidth = 800
      drawerHeight = 400
      break
    default:
      textSize = 16
      drawerWidth = 488
      drawerHeight = 244
  }
  switch (position) {
    case 'bottom':
      if (rounding === 'xs') borderRadius = '4px 4px 0 0'
      else if (rounding === 'sm') borderRadius = '6px 6px 0 0'
      else if (rounding === 'md') borderRadius = '8px 8px 0 0'
      else if (rounding === 'lg') borderRadius = '10px 10px 0 0'
      else if (rounding === 'xl') borderRadius = '14px 14px 0 0'
      else if (rounding === 'circle') borderRadius = '9999px 9999px 0 0'
      else borderRadius = '8px 8px 0 0'
      positionStyles = {
        bottom: 0,
        right: 0,
        left: 0,
        margin: '0 auto',
        transform: visibleState
          ? 'none'
          : `translateY(${height ? height : drawerHeight}px)`,
        width: '100vw',
        height: height ? height : drawerHeight,
        borderRadius: borderRadius
      }
      break
    case 'top':
      if (rounding === 'xs') borderRadius = '0 0 4px 4px'
      else if (rounding === 'sm') borderRadius = '0 0 6px 6px'
      else if (rounding === 'md') borderRadius = '0 0 8px 8px'
      else if (rounding === 'lg') borderRadius = '0 0 10px 10px'
      else if (rounding === 'xl') borderRadius = '0 0 14px 14px'
      else if (rounding === 'circle') borderRadius = '0 0 9999px 9999px'
      else borderRadius = '8px 8px 0 0'
      positionStyles = {
        top: 0,
        right: 0,
        left: 0,
        margin: '0 auto',
        transform: visibleState
          ? 'none'
          : `translateY(-${height ? height : drawerHeight}px)`,
        width: '100vw',
        height: height ? height : drawerHeight,
        borderRadius: borderRadius
      }
      break
    case 'left':
      if (rounding === 'xs') borderRadius = '0 4px 4px 0'
      else if (rounding === 'sm') borderRadius = '0 6px 6px 0'
      else if (rounding === 'md') borderRadius = '0 8px 8px 0'
      else if (rounding === 'lg') borderRadius = '0 10px 10px 0'
      else if (rounding === 'xl') borderRadius = '0 14px 14px 0'
      else if (rounding === 'circle') borderRadius = '0 9999px 9999px 0'
      else borderRadius = '0 8px 8px 0'
      positionStyles = {
        left: 0,
        top: 0,
        transform: visibleState
          ? 'none'
          : `translateX(${width ? width : drawerWidth}px)`,
        height: '100vh',
        width: width ? width : drawerWidth,
        borderRadius: borderRadius
      }
      break
    case 'right':
      if (rounding === 'xs') borderRadius = '4px 0 0 4px'
      else if (rounding === 'sm') borderRadius = '6px 0 0 6px'
      else if (rounding === 'md') borderRadius = '8px 0 0 8px'
      else if (rounding === 'lg') borderRadius = '10px 0 0 10px'
      else if (rounding === 'xl') borderRadius = '14px 0 0 14px'
      else if (rounding === 'circle') borderRadius = '9999px 0 0 9999px'
      else borderRadius = '8px 0 0 8px'
      positionStyles = {
        right: 0,
        top: 0,
        transform: visibleState
          ? 'none'
          : `translateX(${width ? width : drawerWidth}px)`,
        height: '100vh',
        width: width ? width : drawerWidth,
        borderRadius: borderRadius
      }
      break
    default:
      if (rounding === 'xs') borderRadius = '4px 0 0 4px'
      else if (rounding === 'sm') borderRadius = '6px 0 0 6px'
      else if (rounding === 'md') borderRadius = '8px 0 0 8px'
      else if (rounding === 'lg') borderRadius = '10px 0 0 10px'
      else if (rounding === 'xl') borderRadius = '14px 0 0 14px'
      else if (rounding === 'circle') borderRadius = '9999px 0 0 9999px'
      else borderRadius = '8px 0 0 8px'
      positionStyles = {
        right: 0,
        top: 0,
        transform: visibleState
          ? 'none'
          : `translateX(${width ? width : drawerWidth}px)`,
        height: '100vh',
        width: width ? width : drawerWidth,
        borderRadius: borderRadius
      }
      break
  }
  return {
    textSize,
    positionStyles
  }
}
