import { HTMLAttributes } from 'react'
import { DefaultSize } from '@src/other/utils/defaultTypes'

export interface ISpinner extends HTMLAttributes<SVGSVGElement> {
  sizes?: DefaultSize // Spinner size
}
