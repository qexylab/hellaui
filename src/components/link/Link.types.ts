import { AnchorHTMLAttributes } from 'react'
import { DefaultSize } from '@src/other/utils/defaultTypes'

export type LinkVariant = 'default' | 'success' | 'info' | 'warning' | 'danger'

export interface ILink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant // Link variant
  sizes?: DefaultSize // Link size
  disabled?: boolean // Disable link
  href: string // Link
}
