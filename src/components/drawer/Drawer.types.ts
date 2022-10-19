import { DefaultRounding, DefaultSize } from '@src/other/utils/defaultTypes'
import { HTMLAttributes } from 'react'

export type DrawerPosition = 'bottom' | 'left' | 'right' | 'top'

export interface IDrawer extends HTMLAttributes<HTMLDivElement> {
  sizes?: DefaultSize // Drawer size
  rounding?: DefaultRounding // Drawer rounding
  title?: string // Drawer title
  isVisible: boolean // Visible state
  onClose: () => void // OnClose function
  position?: DrawerPosition // Drawer position
  container?: Element // The container in which the modal window is placed (body by default)
  closeOnOutsideClick?: boolean // Closing on a click from the outside
  displayCloseIcon?: boolean // Display the close icon in the upper right corner
  backgroundColor?: string // Drawer background color
  textColor?: string // Drawer text color
  disableOutsideBackground?: boolean
}
