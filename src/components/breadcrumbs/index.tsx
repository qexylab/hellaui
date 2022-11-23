import React, { FC, useCallback, useRef, useState } from 'react'
import { IBreadcrumbs } from './Breadcrumbs.types'
import { useEnhancedEffect } from '@src/other/hooks/useEnhancedEffect'

export const Breadcrumbs: FC<IBreadcrumbs> = ({
  items,
  sizes = 'md',
  mobile,
  ...props
}) => {
  const visible = items.slice(1, items.length - 1)

  const wrapperRef = useRef<HTMLOListElement>(null)
  const overflowRef = useRef<HTMLDivElement>(null)
  const [visibilityMap, setVisibilityMap] = useState<{
    [index: number | string]: boolean
  }>({ 0: true })

  const renderFirstItem = useCallback(() => {
    const item = items[0]
    const id = item?.id || item.text
    return items.length > 1 ? <div key={id}>123</div> : null
  }, [items])

  useEnhancedEffect(() => {
    if (!mobile) return
    wrapperRef.current?.lastElementChild?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    })
  }, [items, mobile, wrapperRef])

  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        maxWidth: 800
      }}
      {...props}
    >
      <ol
        ref={wrapperRef}
        role="list"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
          listStyle: 'none',
          padding: 0,
          flexWrap: 'nowrap',
          overflowX: mobile ? 'scroll' : 'visible', // ?
          overflowY: 'visible' // ?
        }}
      >
        {mobile ? <>{renderFirstItem()}</> : <></>}
      </ol>
    </nav>
  )
}

Breadcrumbs.displayName = 'Breadcrumbs'
