import React, { forwardRef, useState } from 'react'
import { IRadioButton } from '@src/components/radioButton/RadioButton.types'
import { getRadioButtonStyle } from '@src/components/radioButton/RadioButton.style'
import {useSetStyle} from "@src/components/utils/useSetStyle";

export const RadioButton = forwardRef<HTMLInputElement, IRadioButton>(
  (
    {
      children,
      size = 'md',
      checked,
      error = false,
      disabled,
      tooltipText,
      ...props
    },
    ref
  ) => {
    const { minWidth, height, paddingLeft } = getRadioButtonStyle(size)
    const [isHover, setIsHover] = useState<boolean>(false)
    const [isFocus, setIsFocus] = useState<boolean>(false)

    useSetStyle('hl-radio:hover ', {
      backgroundColor: 'red',
      padding: '10px 5px',
      color: 'blue',
      marginRight: 5,
    }, ``)

    return <div className="hl-radio">testText</div>
  }
)
