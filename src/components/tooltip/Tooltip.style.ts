import { TooltipPosition } from '@src/components/tooltip/Tooltip.types'

export const getTooltipStyle = (position?: TooltipPosition) => {
  let direction: TooltipPosition = 'bottom',
    margin: string = '0',
    flexDirection: string = 'column',
    fullWidth: boolean = true

  switch (direction) {
    case 'bottom':
      flexDirection = 'column'
      fullWidth = false
      margin = '8px 0 0 0'
      break
    // case 'topPageCenter':
    //   setPortalFlexDirection('column-reverse')
    //   setPortalFullWidth(true)
    //   tooltip.style.margin = '0 0 8px 0'
    //   break
    // case 'bottomPageCenter':
    //   setPortalFlexDirection('column')
    //   setPortalFullWidth(true)
    //   tooltip.style.margin = '8px 0 0 0'
    //   break
    // case 'left':
    //   setPortalFlexDirection('row-reverse')
    //   setPortalFullWidth(false)
    //   tooltip.style.margin = '0 8px 0 0'
    //   break
    // case 'right':
    //   setPortalFlexDirection('row')
    //   setPortalFullWidth(false)
    //   tooltip.style.margin = '0 0 0 8px'
    //   break
    // case 'top':
    //   setPortalFlexDirection('column-reverse')
    //   setPortalFullWidth(false)
    //   tooltip.style.margin = '0 0 8px 0'
    //   break
    // default:
    //   setPortalFlexDirection('column')
    //   setPortalFullWidth(false)
    //   tooltip.style.margin = '8px 0 0 0'
  }
  return {
    direction,
    margin,
    flexDirection,
    fullWidth
  }
}
