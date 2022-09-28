import { ReactNode } from 'react'

export interface INoSsr {
  defer?: boolean // If `true`, the component will not only prevent server-side rendering.
  fallback?: ReactNode // The fallback content to display.
}
