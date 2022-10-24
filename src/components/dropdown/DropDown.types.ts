import { HTMLAttributes } from 'react'
import { DefaultRounding, DefaultSize } from '@src/other/utils/defaultTypes'

export interface IDropDown extends HTMLAttributes<HTMLDivElement> {
  title: string // DropDown title
  sizes?: DefaultSize // DropDown size
  rounding?: DefaultRounding // DropDown rounding
  iconPosition?: 'right' | 'left' // Icon position
  menuWidth?: number // Dropdown width
  menuMaxHeight?: number // Dropdown width
}
