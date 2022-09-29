import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { ITooltip } from '@src/components/tooltip/Tooltip.types'
import Portal from '@src/components/portal'
import { theme_color } from '@src/components/theme'
import { borderRadius } from '@src/components/theme/borderRadius'
import { getTooltipStyle } from '@src/components/tooltip/Tooltip.style'
import { handleRef } from '@src/components/utils/handleRef'

export const Tooltip: FC<PropsWithChildren<ITooltip>> = ({
  visible = false,
  sizes = 'md',
  onVisibilityChange,
  targetRef,
  container,
  withDelay,
  tooltipRef,
  tooltipPosition = 'bottom',
  children,
  style
}) => {
  let showTooltipTimer: any

  const tooltipElementRef = useRef<HTMLDivElement | null>(null)
  const tooltipChildRef = useRef<HTMLDivElement>(null)
  const [portalFlexDirection, setPortalFlexDirection] = useState<string>('')

  const hideTooltip = () => onVisibilityChange(false)
  const attachRef = (node: HTMLDivElement) =>
    handleRef(node, tooltipRef, tooltipElementRef)

  let _flexDirection: string,
    _margin: string,
    _padding: string,
    _textSize: string

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

  const getTooltip = () => {
    if (!targetRef.current && !tooltipElementRef.current) return

    const tooltip = tooltipElementRef.current
    const tooltipChild = tooltipChildRef.current

    if (!tooltip || !tooltipChild) return

    setPortalFlexDirection(_flexDirection)

    // TEST VERSION

    tooltip.style.margin = _margin
    tooltipChild.style.padding = _padding
    tooltipChild.style.fontSize = _textSize
  }

  useEffect(() => {
    targetRef.current?.addEventListener('mouseenter', handleMouseEnter)
    targetRef.current?.addEventListener('focus', handleMouseEnter)
    targetRef.current?.addEventListener('mouseleave', handleMouseLeave)
    targetRef.current?.addEventListener('mousedown', handleMouseLeave)
    targetRef.current?.addEventListener('blur', handleMouseLeave)
    return () => {
      targetRef.current?.removeEventListener('mouseenter', handleMouseEnter)
      targetRef.current?.removeEventListener('focus', handleMouseEnter)
      targetRef.current?.removeEventListener('mouseleave', handleMouseLeave)
      targetRef.current?.removeEventListener('mousedown', handleMouseLeave)
      targetRef.current?.removeEventListener('blur', handleMouseLeave)
    }
  }, [targetRef.current])

  // Сделать норм версию ЮсМемо чтобы он работал как надо TEST VERSION

  useMemo(() => {
    const { flexDirection, margin, padding, textSize } = getTooltipStyle(
      tooltipPosition,
      sizes
    )
    _flexDirection = flexDirection
    _margin = margin
    _padding = padding
    _textSize = textSize
  }, [visible])

  return visible ? (
    <Portal
      targetRef={targetRef}
      container={container}
      style={{
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: portalFlexDirection
          ? (portalFlexDirection as 'column')
          : 'row',
        ...style
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
          transitionDelay: '.2s',
          transitionProperty: 'opacity',
          alignSelf: 'center',
          width: 'max-content',
          minWidth: 'max-content',
          pointerEvents: 'initial'
        }}
      >
        <div
          ref={tooltipChildRef}
          style={{
            backgroundColor: theme_color.dark_gray,
            color: theme_color.white,
            borderRadius: borderRadius('md'),
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
