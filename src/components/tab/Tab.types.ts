import { HTMLAttributes, ReactNode, RefObject } from 'react'
import { DefaultSize } from '@src/other/utils/defaultTypes'

export type TabWithRefProps = TabProps & { ref: RefObject<HTMLButtonElement> }

export interface TabProps {
  content: ReactNode // Tab content
  id: number // Tab id
  icon?: ReactNode // Icon before content
  badge?: number // Badge after content
  disabled?: boolean // Disable tab state
}

export interface ITab extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  tabs: TabProps[] // Tab array
  activeTab: number // Active tab id
  // selected?: string // Selected tab item
  hoverBackgroundColor?: string // Hover background color
  onChange: (id: number) => void // Callback for changing the active tab
  sizes?: DefaultSize // Tab size
  // rounding?: DefaultRounding // Tab rounding
  underline?: boolean // Displaying a gray bar at the bottom
  selectLineColor?: string // Underline color
}

export interface ITabButton {
  id: number
  hoverBackgroundColor?: string
  activeTab: number
  onChange: (id: number) => void
  height: number
  itemID: number
  disabled?: boolean
}
