import React, { FC, useRef, useState } from 'react'
import { ITooltip } from '@src/components/tooltip/Tooltip.types'
import Portal from '@src/components/portal'
import {theme_color} from "@src/components/theme";
import {borderRadius} from "@src/components/theme/borderRadius";

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
  const [portalFlexDirection, setPortalFlexDirection] = useState<string>('')
  const [portalFullWidth, setPortalFullWidth] = useState<boolean>(false)
  let showTooltipTimer: any

  const hideTooltip = () => onVisibilityChange(false)

  return visible ? (
      <Portal targetRef={targetRef}>
        <div style={{pointerEvents: "none", height: '100%', width: '100%', flex: '0 0 auto' }}/>
        <div style={{opacity: 0, transitionDelay: '.2s', transitionProperty: 'opacity', alignSelf: 'center', width: "max-content", minWidth: 'max-content', pointerEvents: "initial" }}>
          <div style={{
            backgroundColor: theme_color.white_gray,
            color: theme_color.dark_gray,
            borderRadius: borderRadius('md'),
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.4)',
            padding: '4px 8px',
            maxWidth: 'min(488px, calc(100vw - 16px))'
          }}>
            {renderContent()}
          </div>
        </div>
      </Portal>
  ) : null
}

Tooltip.displayName = 'Tooltip'
