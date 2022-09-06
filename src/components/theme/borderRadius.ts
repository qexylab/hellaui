export const borderRadiusType = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
}

export const smallBorderRadius = (borderRadius: borderRadiusType): string => {
  switch (borderRadius) {
    case borderRadius.xs:
      return '0px';
    case borderRadius.sm:
      return '2px';
    case borderRadius.md:
      return '4px';
    case borderRadius.lg:
      return '6px';
    case borderRadius.xl:
      return '8px';
    default:
      return '4px';
  }
}

export const mediumGroupBorderRadius = (borderRadius: borderRadiusType): string => {
  switch (borderRadius) {
    case borderRadius.xs:
      return '4px';
    case borderRadius.sm:
      return '6px';
    case borderRadius.md:
      return '8px';
    case borderRadius.lg:
      return '10px';
    case borderRadius.xl:
      return '12px';
    default:
      return '8px';
  }
}

export const largeGroupBorderRadius = (borderRadius: borderRadiusType): string => {
  switch (borderRadius) {
    case borderRadius.xs:
      return '8px';
    case borderRadius.sm:
      return '10px';
    case borderRadius.md:
      return '12px';
    case borderRadius.lg:
      return '14px';
    case borderRadius.xl:
      return '16px';
    default:
      return '12px';
  }
}
