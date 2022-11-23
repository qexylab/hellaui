import { HTMLAttributes } from 'react'
import { DefaultSize } from '@src/other/utils/defaultTypes'

export interface BreadcrumbProps {
  id: number // / Breadcrumb id
  text: string // breadcrumb text
  url?: string // breadcrumb href
  sizes?: DefaultSize
}

export interface IBreadcrumbs extends HTMLAttributes<HTMLElement> {
  sizes?: DefaultSize // Breadcrumbs size
  items: BreadcrumbProps[] // Breadcrumb array
  mobile?: boolean // Mobile display of a component
}
