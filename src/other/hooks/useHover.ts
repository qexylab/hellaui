import { MutableRefObject, useEffect, useRef, useState } from 'react'

interface Option {
  onEnter?: () => void
  onLeave?: () => void
}

export const useHover = <T extends HTMLElement>(
  targetRef: T,
  option: Option
): boolean => {
  const { onEnter, onLeave } = option || {}

  const onEnterRef = useRef(onEnter)
  const onLeaveRef = useRef(onLeave)
  onEnterRef.current = onEnter
  onLeaveRef.current = onLeave

  const [hoverState, setHoverState] = useState<boolean>(false)

  useEffect(() => {
    const onMouseEnter = () => {
      if (onEnterRef.current) onEnterRef.current()
      setHoverState(true)
    }
    const onMouseLeave = () => {
      if (onLeaveRef.current) onLeaveRef.current()
      setHoverState(false)
    }
    if (!targetRef) return
    targetRef.addEventListener('mouseenter', onMouseEnter)
    targetRef.addEventListener('mouseleave', onMouseLeave)
    return () => {
      targetRef.removeEventListener('mouseenter', onMouseEnter)
      targetRef.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return hoverState
}

const ref = useRef<HTMLSelectElement>(null)

const hover = useHover(ref, {
  onEnter: () => {},
  onLeave: () => {}
})
