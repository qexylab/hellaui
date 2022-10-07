import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState
} from 'react'
import { ITooltip } from '@src/components/tooltip/Tooltip.types'
import Portal from '@src/components/portal'
import { theme_color } from '@src/other/theme'
import { borderRadius } from '@src/other/theme/borderRadius'
import { getTooltipStyle } from '@src/components/tooltip/Tooltip.style'
import { handleRef } from '@src/other/utils/handleRef'

export const Tooltip: FC<PropsWithChildren<ITooltip>> = ({
  visible = false,
  sizes = 'md',
  onVisibilityChange,
  targetRef,
  container,
  withDelay,
  tooltipRef,
  tooltipPosition = 'bottom',
    background,
    rounding = 'md',
  children
}) => {
  let showTooltipTimer: any

  const tooltipElementRef = useRef<HTMLDivElement | null>(null)
  const tooltipChildRef = useRef<HTMLDivElement>(null)
  const [portalFlexDirection, setPortalFlexDirection] = useState<string>('')

  const attachRef = (node: HTMLDivElement) =>
    handleRef(node, tooltipRef, tooltipElementRef)

  useEffect(() => {
    return () => hideTooltip()
  }, [])

  useEffect(() => {
    getTooltip()
  }, [children, targetRef, tooltipPosition, visible])

  useEffect(() => {
    if (tooltipElementRef.current) tooltipElementRef.current.style.opacity = '1'
  }, [tooltipElementRef.current, visible])

  const handleMouseEnter = () => {
    showTooltipTimer = window.setTimeout(
      () => {
        onVisibilityChange(true)
        getTooltip()
      },
      withDelay ? 1500 : 0
    )
  }

  const handleMouseLeave = () => {
    clearTimeout(showTooltipTimer)
    hideTooltip()
  }

  const hideTooltip = () => onVisibilityChange(false)

  const getTooltip = () => {
    if (!targetRef.current && !tooltipElementRef.current) return

    const tooltip = tooltipElementRef.current
    const tooltipChild = tooltipChildRef.current

    if (!tooltip || !tooltipChild) return

    const { flexDirection, margin, padding, textSize } = getTooltipStyle(
      tooltipPosition,
      sizes,
    )
    setPortalFlexDirection(flexDirection)

    tooltip.style.margin = margin
    tooltipChild.style.padding = padding
    tooltipChild.style.fontSize = textSize
  }

  useEffect(() => {
    targetRef.current?.addEventListener('mouseenter', handleMouseEnter)
    targetRef.current?.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      targetRef.current?.removeEventListener('mouseenter', handleMouseEnter)
      targetRef.current?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [targetRef.current])

  return visible ? (
    <Portal
      targetRef={targetRef}
      container={container}
      style={{
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: portalFlexDirection
          ? (portalFlexDirection as 'column')
          : 'row'
      }}
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
        ref={attachRef}
        style={{
          opacity: 0,
          transition: 'opacity .175s ease-out',
          alignSelf: 'center',
          width: 'max-content',
          minWidth: 'max-content',
          pointerEvents: 'initial'
        }}
      >
        <div
          ref={tooltipChildRef}
          style={{
            backgroundColor: background ? background : theme_color.dark_gray,
            color: theme_color.white,
            borderRadius: borderRadius(rounding),
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.4)',
            maxWidth: 'min(488px, calc(100vw - 16px))'
          }}
        >
          {children}
        </div>
      </div>
    </Portal>
  ) : null
}

Tooltip.displayName = 'Tooltip'
