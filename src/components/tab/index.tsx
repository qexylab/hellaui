import React, {
  createRef,
  FC,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
  useMemo,
  useRef,
  useState
} from 'react'
import { ITab, ITabButton, TabProps, TabWithRefProps } from './Tab.types'
import { getTabStyle } from '@src/components/tab/Tab.style'
import { theme_color } from '@src/other/theme'
import { Badge } from '@src/components/badge'
import { borderRadius } from '@src/other/theme/borderRadius'
import { useEnhancedEffect } from '@src/other/hooks/useEnhancedEffect'

export const Tab: FC<PropsWithChildren<ITab>> = ({
  tabs,
  sizes = 'md',
  underline = false,
  activeTab,
  onChange,
  hoverBackgroundColor = theme_color.dark_gray_2,
  selectLineColor = theme_color.indigo,
  children,
  ...props
}) => {
  const tablistRef = useRef<HTMLDivElement>(null)
  const underlineRef = useRef<HTMLDivElement>(null)
  const [visibilityMap] = useState<{
    [index: string]: boolean
  }>(
    tabs.reduce<{ [index: string]: boolean }>((initialMap, _, index) => {
      initialMap[index] = true
      return initialMap
    }, {})
  )

  const { textSize, height, padding, offset } = getTabStyle(sizes)

  const getTabIndex = (id: number) =>
    tabsWithRef.findIndex(item => item.id === id)

  const tabsWithRef: TabWithRefProps[] = useMemo(() => {
    return tabs.map((tab: TabProps) => ({
      ...tab,
      ref: createRef<HTMLButtonElement>()
    }))
  }, [tabs])

  const styleUnderline = (left: number, width: number) => {
    if (underlineRef.current) {
      underlineRef.current.style.left = left + 'px'
      underlineRef.current.style.width = width + 'px'
      if (width) {
        underlineRef.current.style.display = 'flex'
      } else {
        underlineRef.current.style.display = 'none'
      }
    }
  }

  const setUnderline = () => {
    const activeTabRef = tabsWithRef.filter(tab => tab.id === activeTab)?.[0]
      ?.ref.current
    const left = parseFloat(underlineRef.current?.style.left || '0')
    const underlineWidth = parseFloat(underlineRef.current?.style.width || '0')

    if (activeTabRef && tablistRef.current) {
      // The getBoundingClientRect method is used, which gives precision to hundredths of a pixel
      const activeTabWidth = activeTabRef.getBoundingClientRect().width
      const activeTabLeft =
        activeTabRef.getBoundingClientRect().left -
        tablistRef.current.getBoundingClientRect().left +
        tablistRef.current.scrollLeft

      if (activeTabLeft !== left || activeTabWidth !== underlineWidth)
        styleUnderline(activeTabLeft, activeTabWidth)
    }
  }

  useEnhancedEffect(
    () => setUnderline(),
    [tabsWithRef, activeTab, sizes, visibilityMap]
  )

  return (
    <div
      role="tablist"
      ref={tablistRef}
      style={{
        position: 'relative',
        display: 'flex',
        flex: '1 1 auto',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: 'fit-content',
        boxShadow: `inset 0 -2px 0 0 ${
          underline ? theme_color.dark_gray_2 : 'transparent'
        }`,
        overflow: 'hidden',
        height: height,
        maxHeight: height
      }}
      {...props}
    >
      {tabsWithRef.map((item: TabWithRefProps) => {
        const { id, ref, icon, content, badge, disabled } = item
        const tabNumber = getTabIndex(id)
        const overflowMenuHidden =
          tabNumber === tabsWithRef.length - 1 ||
          !(visibilityMap[tabNumber] && !visibilityMap[tabNumber + 1])
        const needsOffset = tabNumber !== 0 && visibilityMap[tabNumber - 1]
        return (
          <div
            key={id}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: needsOffset ? offset : 0
            }}
          >
            <TabButton
              disabled={disabled}
              hoverBackgroundColor={hoverBackgroundColor}
              ref={ref}
              id={id}
              activeTab={activeTab}
              onChange={onChange}
              height={height}
              itemID={item.id}
            >
              <span
                tabIndex={-1}
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                  padding: padding
                }}
              >
                {icon && (
                  <div
                    style={{
                      marginRight: 8
                    }}
                  >
                    {icon}
                  </div>
                )}
                <div
                  style={{
                    height: '100%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    whiteSpace: 'nowrap',
                    fontSize: textSize
                  }}
                >
                  {content}
                </div>
                {typeof badge !== 'undefined' && (
                  <Badge
                    data-badge
                    sizes={sizes}
                    variant={
                      id === activeTab
                        ? 'primary'
                        : disabled
                        ? 'lightDisable'
                        : 'lightInactive'
                    }
                    style={{
                      marginLeft: 8
                    }}
                  >
                    {badge}
                  </Badge>
                )}
              </span>
            </TabButton>
            {tabNumber !== tabsWithRef.length - 1 ? (
              <div
                style={{
                  visibility: overflowMenuHidden ? 'hidden' : 'visible',
                  width: `${height}px`,
                  height: height
                }}
              />
            ) : null}
          </div>
        )
      })}
      <div
        ref={underlineRef}
        aria-hidden
        style={{
          position: 'absolute',
          bottom: 0,
          display: 'flex',
          backgroundColor: selectLineColor,
          height: 2,
          transition: 'all 0.2s ease-out'
        }}
      />
    </div>
  )
}

Tab.displayName = 'Tab'

const TabButton = forwardRef<HTMLButtonElement, PropsWithChildren<ITabButton>>(
  (
    {
      id,
      hoverBackgroundColor,
      activeTab,
      onChange,
      height,
      itemID,
      disabled,
      children
    },
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const [isHover, setIsHover] = useState<boolean>(false)
    const [isClick, setIsClick] = useState<boolean>(false)
    return (
      <button
        ref={ref}
        role="tab"
        type="button"
        tabIndex={id === activeTab ? 0 : -1}
        aria-selected={id === activeTab}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onMouseUp={() => setIsClick(false)}
        onMouseDown={() => setIsClick(true)}
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          onChange(itemID)
          event.currentTarget.blur()
        }}
        style={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          height: height,
          padding: 0,
          background: disabled
            ? 'transparent'
            : isHover
            ? hoverBackgroundColor
            : 'transparent',
          appearance: 'none',
          border: 'none',
          color: isClick
            ? theme_color.indigo
            : isHover
            ? theme_color.white_gray_2
            : id === activeTab
            ? theme_color.white
            : theme_color.white_gray,
          userSelect: 'none',
          cursor: 'pointer',
          borderTopLeftRadius: borderRadius('md'),
          borderTopRightRadius: borderRadius('md'),
          transition: 'background .175s ease, color .175s ease'
        }}
      >
        {children}
      </button>
    )
  }
)

TabButton.displayName = 'TabButton'
