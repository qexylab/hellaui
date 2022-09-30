export type BadgeVariant =
    | 'default'
    | 'info'
    | 'warning'
    | 'success'
    | 'error'
    | 'grey'
    | 'dark'
    | 'lightInactive'
    | 'lightDisable'
    | 'white'
    | 'whiteInactive'
    | 'whiteDisable'
    | 'whiteBlue'

export type BadgeSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export interface IBadge {
  sizes: BadgeSize
}
