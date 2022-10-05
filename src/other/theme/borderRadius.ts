type borderRadiusType = 'circle' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export const borderRadius = (borderRadius: borderRadiusType): string => {
  switch (borderRadius) {
    case 'xs':
      return '4px'
    case 'sm':
      return '6px'
    case 'md':
      return '8px'
    case 'lg':
      return '10px'
    case 'xl':
      return '14px'
    case 'circle':
      return '9999px'
    default:
      return '6px'
  }
}
