import { HTMLAttributes, RefCallback, RefObject } from 'react'
import { DefaultRounding, DefaultSize } from '@src/other/utils/defaultTypes'

export type TooltipPosition = 'bottom' | 'top' | 'left' | 'right'

export interface ITooltip extends HTMLAttributes<HTMLDivElement> {
  visible: boolean // Visible state
  sizes?: DefaultSize // Tooltip size
  /*  Callback for changing the visibility of the tooltip
    On hover/focus on the target element, the callback will be called with the value visible=true,
    when the hover/focus is lost on the target element, the callback will be called with the visible=false value.*/
  onVisibilityChange: (visible: boolean) => void
  targetRef: RefObject<HTMLElement> // Ref to the element relative to which the tooltip is positioned
  container?: Element // The container in which the tooltip will be rendered via React.createPortal. By default, the tooltip is rendered in document.body
  withDelay?: boolean // Display tooltip with delay
  tooltipRef?: RefCallback<HTMLDivElement> | RefObject<HTMLDivElement> // Tooltip ref
  tooltipPosition?: TooltipPosition // Tooltip position
  background?: string // Tooltip background
  rounding?: DefaultRounding // Tooltip rounding
}
