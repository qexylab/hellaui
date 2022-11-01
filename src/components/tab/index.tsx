import React, {
  createRef,
  FC,
  PropsWithChildren,
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
  children,
  ...props
}) => {
  const tablistRef = useRef<HTMLDivElement>(null)
  const underlineRef = useRef<HTMLDivElement>(null)

  const { textSize, height, padding, offset } = getTabStyle(sizes)

  const getTabIndex = (id: string) =>
    tabsWithRef.findIndex(item => item.id === id)

  const [visibilityMap, setVisibilityMap] = useState<{
    [index: string]: boolean
  }>(
    tabs.reduce<{ [index: string]: boolean }>((initialMap, _, index) => {
      initialMap[index] = true
      return initialMap
    }, {})
  )

  const tabsWithRef: TabWithRefProps[] = useMemo(() => {
    return tabs.map((tab: TabProps) => ({
      ...tab,
      ref: createRef<HTMLButtonElement>()
    }))
  }, [tabs])

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
      {tabsWithRef.map((item: TabWithRefProps, index) => {
        const { id, ref, icon, content, badge, disabled } = item
        const tabNumber = getTabIndex(id)
        const overflowMenuHidden =
          tabNumber === tabsWithRef.length - 1 ||
          !(visibilityMap[tabNumber] && !visibilityMap[tabNumber + 1])
        // const tabsForMenu = modelAllTabs.slice(tabNumber + 1);
        // const tabIndex = overflowMenuHidden || !tabsForMenu?.filter((item) => item.id === activeTab).length ? -1 : 0;
        // const overflowRef = overflowMenuRefs[tabNumber] ? overflowMenuRefs[tabNumber].ref : null;
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
                onChange(event.currentTarget.id)
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
                {/*StyledOverflowMenu*/}
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
