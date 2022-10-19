import { DefaultRounding, DefaultSize } from '@src/other/utils/defaultTypes'
import { HTMLAttributes } from 'react'

export interface IModal extends HTMLAttributes<HTMLDivElement> {
  sizes?: DefaultSize // Modal size
  rounding?: DefaultRounding // Modal rounding
  container?: Element // The container in which the modal window is placed (body by default)
  closeOnOutsideClick?: boolean // Closing on a click from the outside
  displayCloseIcon?: boolean // Display the close icon in the upper right corner
  backgroundColor?: string // Modal background color
  textColor?: string // Modal text color
  onClose: () => void // onClose function
  title?: string // Modal title
  isVisible: boolean // Visible state
}
