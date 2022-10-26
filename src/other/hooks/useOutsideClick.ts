import { Dispatch, SetStateAction, useRef, useState } from 'react'
import { useEnhancedEffect } from '@src/other/hooks/useEnhancedEffect'

type TypeOut = {
  targetRef: any
  isVisible: boolean
  setIsVisible: Dispatch<SetStateAction<boolean>>
}

export const useOutsideClick = <T extends HTMLElement = HTMLElement>(
  initialVisible: boolean
): TypeOut => {
  const [isVisible, setIsVisible] = useState<boolean>(initialVisible)
  const targetRef = useRef<T>(null)

  const handleOutsideClick = (event: any) => {
    if (targetRef.current && !targetRef.current.contains(event.target))
      setIsVisible(false)
  }

  useEnhancedEffect(() => {
    document.addEventListener('click', handleOutsideClick, true)
    return () => document.removeEventListener('click', handleOutsideClick, true)
  }, [])

  return {
    targetRef,
    isVisible,
    setIsVisible
  }
}
