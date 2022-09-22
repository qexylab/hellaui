import React, { FC, PropsWithChildren, useEffect, useRef } from 'react'
import { IPortal } from '@src/components/portal/Portal.types'
import { createPortal } from 'react-dom'
import observeRect from '@src/components/utils/observeRect'

const Portal: FC<PropsWithChildren<IPortal>> = ({
  targetRef,
  container,
  fullContainerWidth,
  flexDirection = '',
  children
}) => {
  const portalContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = portalContainerRef.current
    if (node && targetRef.current) {
      const observer = observeRect(targetRef.current, rect => {
        if (rect) {
          const { x, y, height, width } = rect
          const { style } = node
          style.top = `${y}px`
          style.left = fullContainerWidth ? '0px' : `${x}px`
          style.height = `${height}px`
          style.width = fullContainerWidth ? '100%' : `${width}px`
        }
      })
      observer.observe()
      return () => observer.unobserve()
    } else return
  }, [targetRef.current, portalContainerRef.current, fullContainerWidth])

  return createPortal(
    <div
      style={{
        pointerEvents: 'none',
        position: 'fixed',
        overflow: 'visible',
        zIndex: 20,
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: flexDirection ? flexDirection : 'row'
      }}
    >
      {children}
    </div>,
    container || document.body
  )
}

export default Portal
