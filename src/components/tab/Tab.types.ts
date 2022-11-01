import { HTMLAttributes, ReactNode, RefObject } from 'react'
import { DefaultRounding, DefaultSize } from '@src/other/utils/defaultTypes'

export type TabWithRefProps = TabProps & { ref: RefObject<HTMLButtonElement> }

export interface TabProps {
  content: ReactNode // Tab content
  id: string // Tab id
  icon?: ReactNode // Icon before content
  badge?: number // Badge after content
  disabled?: boolean // Disable tab state
}

export interface ITab extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  tabs: TabProps[] // Tab array
  activeTab: string // Active tab id
  selected?: string // Selected tab item
  onChange: (id: string) => void // Callback for changing the active tab
  sizes?: DefaultSize // Tab size
  rounding?: DefaultRounding // Tab rounding
  underline?: boolean // Displaying a gray bar at the bottom
  selectlineColor?: string // Underline color
}

export interface ITabButton
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  id: string
  activeTab: string
  onChange: (id: string) => void
  height: number
  itemID: string
  disabled?: boolean
}
