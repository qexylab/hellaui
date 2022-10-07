import { AnchorHTMLAttributes } from 'react'

export type LinkVariant = 'default' | 'success' | 'info' | 'warning' | 'danger'

export type LinkSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export interface ILink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant // Link variant
  sizes?: LinkSize // Link size
  disabled?: boolean // Disable link
  href: string // Link
}
