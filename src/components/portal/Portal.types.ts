import { HTMLAttributes, RefObject } from 'react'

export interface IPortal extends HTMLAttributes<HTMLDivElement> {
  targetRef: RefObject<HTMLElement> // Ref to element, relative to which the portal is positioned
  container?: Element // The container inside which the portal will be rendered, by default the portal is rendered in document.body
  fullContainerWidth?: boolean // Portal drawing to the full width of the container,
  flexDirection?: any // Flex direction
}
