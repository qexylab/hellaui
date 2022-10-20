import React, {ForwardedRef, forwardRef} from 'react';
import {IGrid} from "@src/components/grid/Grid.types";

export const Grid = forwardRef<HTMLDivElement, IGrid>(({children}, ref: ForwardedRef<HTMLDivElement>) => {
  return (
      <div ref={ref}>
        {children}
      </div>
  )
})

Grid.displayName = 'Grid'