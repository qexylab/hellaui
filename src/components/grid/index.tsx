import React, {
  createContext,
  ForwardedRef,
  forwardRef,
  useContext,
  useLayoutEffect
} from 'react'
import { IGrid } from '@src/components/grid/Grid.types'

const GridContext = createContext(0)

export const Grid = forwardRef<HTMLDivElement, IGrid>(
  (
    {
      children,
      xl,
      lg,
      md,
      sm,
      xs,
      direction = 'row',
      rowSpacing = 0,
      columnSpacing = 0,
      columns = 14,
      gap,
      container = false
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const columnsContext = useContext(GridContext)
    const GridColumns = container ? columns || 14 : columnsContext

    const generateDirection = () => {}
    const generateGrid = () => {
      let size
    }

    useLayoutEffect(() => {
      generateDirection()
      generateGrid()
    }, [])

    return (
      <GridContext.Provider value={GridColumns}>
        <div
          ref={ref}
          style={{
            flex: '0 1 auto',
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            alignItems: 'flex-start',
            flexWrap: container ? 'wrap' : 'nowrap',
            justifyContent: 'flex-start'
          }}
        >
          {children}
        </div>
      </GridContext.Provider>
    )
  }
)

Grid.displayName = 'Grid'
