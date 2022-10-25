import { DefaultSize } from '@src/other/utils/defaultTypes'
import { DropDownPosition } from '@src/components/dropdown/DropDown.types'
import { CSSProperties } from 'react'

export const getDropDownStyle = (
  size: DefaultSize,
  position: DropDownPosition
) => {
  let textSize: number,
    padding: string = '4px 8px',
    top,
    bottom,
    dropdownStyles: CSSProperties

  switch (size) {
    case 'xs':
      textSize = 12
      padding = '2px 4px'
      top = textSize + 6
      bottom = textSize + 6
      break
    case 'sm':
      textSize = 14
      top = textSize + 8
      bottom = textSize + 8
      break
    case 'md':
      textSize = 16
      top = textSize + 10
      bottom = textSize + 10
      break
    case 'lg':
      textSize = 18
      padding = '6px 12px'
      top = textSize + 12
      bottom = textSize + 12
      break
    case 'xl':
      textSize = 22
      padding = '10px 20px'
      top = textSize + 18
      bottom = textSize + 18
      break
    default:
      textSize = 16
      top = textSize + 10
      bottom = textSize + 10
  }

  switch (position) {
    case 'bottom-left':
      dropdownStyles = {
        left: 0,
        top: top,
        transformOrigin: '0 0'
      }
      break
    case 'bottom-right':
      dropdownStyles = {
        left: 'auto',
        top: top,
        right: 0,
        transformOrigin: '100% 0'
      }
      break
    case 'top-left':
      dropdownStyles = {
        top: 'auto',
        left: 0,
        transformOrigin: '0 0',
        bottom: bottom
      }
      break
    case 'top-right':
      dropdownStyles = {
        top: 'auto',
        left: 'auto',
        right: 0,
        transformOrigin: '100% 0',
        bottom: bottom
      }
      break
    default:
      dropdownStyles = {
        left: 'auto',
        top: top,
        right: 0,
        transformOrigin: '100% 0'
      }
      break
  }

  return {
    textSize,
    padding,
    dropdownStyles
  }
}
