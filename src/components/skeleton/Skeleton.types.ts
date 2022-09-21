export type SkeletonRounding = 'circle' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export interface ISkeleton {
  width: string // Skeleton width
  height: string // Skeleton height
  rounding: SkeletonRounding // Skeleton rounding
}
