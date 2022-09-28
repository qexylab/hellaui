import React, { FC, useEffect, useRef, useState } from 'react'
import {
  ITooltip,
  TooltipPosition
} from '@src/components/tooltip/Tooltip.types'
import Portal from '@src/components/portal'
import { theme_color } from '@src/components/theme'
import { borderRadius } from '@src/components/theme/borderRadius'
import { NoSsr } from '@src/components/noSsr'
import { getScrollbarSize } from '@src/components/utils/getScrollbarSize'
import { getTooltipStyle } from '@src/components/tooltip/Tooltip.style'

export const Tooltip: FC<ITooltip> = ({
  visible,
  onVisibilityChange,
  renderContent,
  targetRef,
  container: userContainer,
  withDelay,
  tooltipRef,
  tooltipPosition
}) => {
  const tooltipElementRef = useRef<HTMLDivElement | null>(null)
  const container: Element = userContainer || document.body
  let scrollableParents: Element[] | undefined = undefined
  let showTooltipTimer: any

  const [portalFlexDirection, setPortalFlexDirection] = useState<string>('')
  const [portalFullWidth, setPortalFullWidth] = useState<boolean>(false)

  const hideTooltip = () => onVisibilityChange(false)

  useEffect(() => {
    return () => hideTooltip()
  }, [])

  useEffect(() => {
    const scrollbarSize = getScrollbarSize()
    getTooltip(scrollbarSize)
  }, [renderContent(), targetRef, tooltipPosition, container, visible])

  useEffect(() => {
    if (tooltipElementRef.current) tooltipElementRef.current.style.opacity = '1'
  }, [tooltipElementRef.current, visible])

  const handleMouseEnter = () => {
    showTooltipTimer = window.setTimeout(
      () => {
        onVisibilityChange(true)
        getTooltip(getScrollbarSize())
      },
      withDelay ? 1500 : 0
    )
  }

  const handleMouseLeave = () => {
    clearTimeout(showTooltipTimer)
    hideTooltip()
  }

  const getTooltip = (scrollbarSize: number) => {
    const tooltip = tooltipElementRef.current
    if (!targetRef.current && !tooltipElementRef.current) return

    const { direction, flexDirection, margin, fullWidth } =
      getTooltipStyle(tooltipPosition)

    setPortalFlexDirection(flexDirection)
  }

  return visible ? (
    <NoSsr>
      <Portal
        targetRef={targetRef}
        onMouseEnter={handleMouseEnter}
        onFocus={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseLeave}
        onBlur={handleMouseLeave}
        flexDirection={portalFlexDirection}
        fullContainerWidth={portalFullWidth}
      >
        <div
          style={{
            pointerEvents: 'none',
            height: '100%',
            width: '100%',
            flex: '0 0 auto'
          }}
        />
        <div
          style={{
            opacity: 0,
            transitionDelay: '.2s',
            transitionProperty: 'opacity',
            alignSelf: 'center',
            width: 'max-content',
            minWidth: 'max-content',
            pointerEvents: 'initial'
          }}
        >
          <div
            style={{
              backgroundColor: theme_color.white_gray,
              color: theme_color.dark_gray,
              borderRadius: borderRadius('md'),
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.4)',
              padding: '4px 8px',
              maxWidth: 'min(488px, calc(100vw - 16px))'
            }}
          >
            {renderContent()}
          </div>
        </div>
        <div>TEXT</div>
      </Portal>
    </NoSsr>
  ) : null
}

Tooltip.displayName = 'Tooltip'
