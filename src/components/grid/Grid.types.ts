import {CSSProperties, HTMLAttributes} from "react";

export interface IGrid extends HTMLAttributes<HTMLDivElement> {
  columns?: number // The number of columns. Default - 12
  columnSpacing?: number | string // Defines the horizontal space between the type `children` components
  container?: boolean // You should be wrapping children with a container.
  direction: 'row' | 'column' | 'column-reverse' | 'row-reverse'
}