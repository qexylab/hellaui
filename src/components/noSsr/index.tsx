import React, { FC, PropsWithChildren, useEffect, useState } from 'react'
import { INoSsr } from './NoSsr.types'
import { useEnhancedEffect } from '@src/other/hooks/useEnhancedEffect'

export const NoSsr: FC<PropsWithChildren<INoSsr>> = ({
  defer,
  fallback,
  children
}) => {
  const [mountedState, setMountedState] = useState<boolean>(false)

  useEnhancedEffect(() => {
    if (!defer) setMountedState(true)
  }, [defer])

  useEffect(() => {
    if (defer) setMountedState(true)
  }, [defer])

  return <>{mountedState ? children : fallback}</>
}
