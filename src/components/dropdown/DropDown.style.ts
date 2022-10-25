import { DefaultSize } from '@src/other/utils/defaultTypes'
import {DropDownPosition} from "@src/components/dropdown/DropDown.types";
import {CSSProperties} from "react";

export const getDropDownStyle = (size: DefaultSize, position: DropDownPosition) => {
  let textSize: number,
      padding: string = '4px',
      dropdownStyles: CSSProperties

  switch (position) {
    case "bottom-left":
      dropdownStyles = {
        left: 0,
        transform: 'translateX(0) scale(0.9)',
        transformOrigin: '0 0',
      }
      break
    case "bottom-right":
      dropdownStyles = {
        left: "auto",
        right: 0,
        transform: 'translateX(0) scale(0.9)',
        transformOrigin: '100% 0',
      }
      break
    case "top-left":
      dropdownStyles = {
        top: 0,
        bottom: 'calc(100% + 25px)',
        left: 0,
        transform: 'translateX(0) scale(0.9)',
        transformOrigin: '0 0',
      }
      break
    case "top-right":
      dropdownStyles = {
        top: 0,
        bottom: 'calc(100% + 25px)',
        left: "auto",
        right: 0,
        transform: 'translateX(0) scale(0.9)',
        transformOrigin: '100% 0',
      }
      break
  }

  switch (size) {
    case 'xs':
      textSize = 12
      padding = '2px'
      break
    case 'sm':
      textSize = 14
      padding = '4px'
      break
    case 'md':
      textSize = 16
      break
    case 'lg':
      textSize = 18
      padding = '6px'
      break
    case 'xl':
      textSize = 22
      padding = '10px'
      break
    default:
      textSize = 16

  }
  return {
    textSize,
    padding,
    dropdownStyles,
  }
}
