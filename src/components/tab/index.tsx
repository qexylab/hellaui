import React, {
  createRef,
  FC,
  PropsWithChildren, useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { ITab, TabProps, TabWithRefProps } from './Tab.types'
import { getTabStyle } from '@src/components/tab/Tab.style'
import { theme_color } from '@src/other/theme'
import { Badge } from '@src/components/badge'

export const Tab: FC<PropsWithChildren<ITab>> = ({
  tabs,
  sizes = 'md',
  underline = false,
  activeTab,
  onChange,
    selected,
  children,
  ...props
}) => {
  const tablistRef = useRef<HTMLDivElement>(null)
  const underlineRef = useRef<HTMLDivElement>(null)
  const [visibilityMap, _] = useState<{
    [index: string]: boolean
  }>(
      tabs.reduce<{ [index: string]: boolean }>((initialMap, _, index) => {
        initialMap[index] = true
        return initialMap
      }, {})
  )

  const { textSize, height, padding, offset } = getTabStyle(sizes)

  const getTabIndex = (id: string) => tabsWithRef.findIndex(item => item.id === id)

  const tabsWithRef: TabWithRefProps[] = useMemo(() => {
    return tabs.map((tab: TabProps) => ({
      ...tab,
      ref: createRef<HTMLButtonElement>()
    }))
  }, [tabs])

  const styleUnderline = (left: number, width: number) => {
    if (underlineRef.current) {
      underlineRef.current.style.left = left + 'px';
      underlineRef.current.style.width = width + 'px';
      if (width) {
        underlineRef.current.style.display = 'flex';
      } else {
        underlineRef.current.style.display = 'none';
      }
    }
  };

  const setUnderline = () => {
    const activeTabRef = tabsWithRef.filter((tab) => tab.id === activeTab)?.[0]?.ref.current;
    const left = parseFloat(underlineRef.current?.style.left || '0');
    const underlineWidth = parseFloat(underlineRef.current?.style.width || '0');

    if (activeTabRef && tablistRef.current) {
      // The getBoundingClientRect method is used, which gives precision to hundredths of a pixel
      const activeTabWidth = activeTabRef.getBoundingClientRect().width;
      const activeTabLeft =
          activeTabRef.getBoundingClientRect().left -
          tablistRef.current.getBoundingClientRect().left +
          tablistRef.current.scrollLeft;

      if (activeTabLeft !== left || activeTabWidth !== underlineWidth) styleUnderline(activeTabLeft, activeTabWidth);

    }
  };

  useLayoutEffect(() => setUnderline(), [tabsWithRef, activeTab, sizes, visibilityMap]);

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
        width: '100%',
        boxShadow: `inset 0 -2px 0 0 ${
          underline ? theme_color.gray : 'transparent'
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
            <button
              ref={ref}
              role="tab"
              type="button"
              tabIndex={id === activeTab ? 0 : -1}
              aria-selected={id === activeTab}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                onChange(item.id)
                event.currentTarget.blur()
              }}
              style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                height: height,
                padding: 0,
                background: 'transparent',
                appearance: 'none',
                border: 'none',
                color:
                  id === activeTab ? theme_color.white : theme_color.white_gray,
                userSelect: 'none',
                cursor: 'pointer'
              }}
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
                {icon && icon}
                <div
                  style={{
                    height: '100%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {content}
                </div>
                {typeof badge !== 'undefined' && (
                  <Badge
                    data-badge
                    sizes="md"
                    variant={
                      id === activeTab
                        ? 'info'
                        : disabled
                        ? 'lightDisable'
                        : 'lightInactive'
                    }
                  >
                    {badge}
                  </Badge>
                )}
              </span>
            </button>
            {tabNumber !== tabsWithRef.length - 1 ? (
              <div
                style={{
                  visibility: overflowMenuHidden ? 'hidden' : 'visible',
                  width: `${height}px`,
                  height: height
                }}
              >
              </div>
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
          backgroundColor: theme_color.indigo,
          height: 2,
          transition: 'all 0.2s ease-out'
        }}
      />
    </div>
  )
}

Tab.displayName = 'Tab'
