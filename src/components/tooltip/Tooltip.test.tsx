import React, {useRef, useState} from 'react'
import { render } from '@testing-library/react'

import { Tooltip } from '.'
import {ITooltip} from "@src/components/tooltip/Tooltip.types";

describe('Tooltip', () => {

  const TooltipWrapper = ({
    children,
    withDelay
  }: Omit<ITooltip, 'visible' | 'targetRef' | 'onVisibilityChange'>) => {
    const divRef = useRef(null)
    const [visible, setVisible] = useState(false)
    return (
      <div>
        <Tooltip
          targetRef={divRef}
          visible={visible}
          onVisibilityChange={(visible: boolean) => setVisible(visible)}
          withDelay={withDelay}
        >
          {children}
        </Tooltip>
        <div ref={divRef}>
          Test component
        </div>
      </div>
    )
  }

  it('should render component', () => {
    render(
      <TooltipWrapper>
        asd
      </TooltipWrapper>
    )
  })
})
