import { HTMLAttributes } from 'react'
import { DefaultRounding, DefaultSize } from '@src/other/utils/defaultTypes'

export type DropdownPosition =
  | 'bottom-left'
  | 'bottom-right'
  | 'top-left'
  | 'top-right'

type DropdownIconPosition = 'right' | 'left'

export interface IDropDown extends HTMLAttributes<HTMLButtonElement> {
  title: string // DropDown title
  position?: DropdownPosition // Dropdown position
  sizes?: DefaultSize // DropDown size
  rounding?: DefaultRounding // DropDown rounding
  iconPosition?: DropdownIconPosition // Icon position
  menuWidth?: number // Dropdown width
  menuMaxHeight?: number // Dropdown maxHeight
  backgroundColor?: string // Dropdown <ul> background
  buttonBackgroundColor?: string // Dropdown <button> background
  hoverButtonBackgroundColor?: string // Hover <button> background
  buttonTextColor?: string // Dropdown <button> text color
  hoverButtonTextColor?: string // Hover <button> text color
  rippleEffect?: boolean // Enable or disable ripple's
  rippleEffectColor?: string // Ripples color
  rippleEffectSize?: DefaultSize // Ripples size
}

export interface IDropDownItem extends HTMLAttributes<HTMLLIElement> {
  backgroundColor?: string // DropDownItem background
  textColor?: string // DropDownItem text color
  hoverBackgroundColor?: string // Hover background
  hoverTextColor?: string // Hover text color
  rounding?: DefaultRounding // DropDown rounding
  rippleEffect?: boolean // Enable or disable ripple's
  rippleEffectColor?: string // Ripples color
  rippleEffectSize?: DefaultSize // Ripples size
}
