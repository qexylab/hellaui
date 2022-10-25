import { HTMLAttributes } from 'react'
import { DefaultRounding, DefaultSize } from '@src/other/utils/defaultTypes'

export type DropDownPosition =
  | 'bottom-left'
  | 'bottom-right'
  | 'top-left'
  | 'top-right'

export interface IDropDown extends HTMLAttributes<HTMLDivElement> {
  title: string // DropDown title
  position?: DropDownPosition // Dropdown position
  sizes?: DefaultSize // DropDown size
  rounding?: DefaultRounding // DropDown rounding
  iconPosition?: 'right' | 'left' // Icon position
  menuWidth?: number // Dropdown width
  menuMaxHeight?: number // Dropdown maxHeight
  backgroundColor?: string // Dropdown <ul> background
  textColor?: string // Dropdown <ul> text color
  buttonBackgroundColor?: string // Dropdown <button> background
  buttonTextColor?: string // Dropdown <button> text color
  rippleEffect?: boolean // Enable or disable ripple's
  rippleEffectColor?: string // Ripples color
  rippleEffectSize?: DefaultSize // Ripples size
}

export interface IDropDownItem extends HTMLAttributes<HTMLDivElement> {
  backgroundColor?: string // DropDownItem background
  textColor?: string // DropDownItem text color
  rounding?: DefaultRounding // DropDown rounding
}
