import { DefaultSize } from '@src/other/utils/defaultTypes'
import { DropDownPosition } from '@src/components/dropdown/DropDown.types'
import { CSSProperties } from 'react'

export const getDropDownStyle = (
  size: DefaultSize,
  position: DropDownPosition
) => {
  let textSize: number,
    padding: string = '4px 8px',
    dropdownStyles: CSSProperties

  switch (size) {
    case 'xs':
      textSize = 12
      padding = '2px 4px'
      break
    case 'sm':
      textSize = 14
      break
    case 'md':
      textSize = 16
      break
    case 'lg':
      textSize = 18
      padding = '6px 12px'
      break
    case 'xl':
      textSize = 22
      padding = '10px 20px'
      break
    default:
      textSize = 16
  }

  switch (position) {
    case 'bottom-left':
      dropdownStyles = {
        left: 0,
        top: `calc(100% - ${textSize - 5}px)`,
        transformOrigin: '0 0'
      }
      break
    case 'bottom-right':
      dropdownStyles = {
        left: 'auto',
        top: `calc(100% - ${textSize - 5}px)`,
        right: 0,
        transformOrigin: '100% 0'
      }
      break
    case 'top-left':
      dropdownStyles = {
        top: 'auto',
        left: 0,
        transformOrigin: '0 0',
        bottom: `calc(100% - ${textSize - 5}px)`
      }
      break
    case 'top-right':
      dropdownStyles = {
        top: 'auto',
        left: 'auto',
        right: 0,
        transformOrigin: '100% 0',
        bottom: `calc(100% - ${textSize - 5}px)`
      }
      break
    default:
      dropdownStyles = {
        left: 'auto',
        top: `calc(100% - ${textSize - 5}px)`,
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
