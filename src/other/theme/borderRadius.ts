type borderRadiusType = 'circle' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export const borderRadius = (borderRadius?: borderRadiusType): number => {
  switch (borderRadius) {
    case 'xs':
      return 4
    case 'sm':
      return 6
    case 'md':
      return 8
    case 'lg':
      return 10
    case 'xl':
      return 14
    case 'circle':
      return 9999
    default:
      return 8
  }
}
