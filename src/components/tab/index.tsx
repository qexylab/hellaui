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

  const { textSize, height } = getTabStyle(sizes)

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
        const { id } = item
        const tabNumber = getTabIndex(id)
        // const needsOffset = tabNumber !== 0 && visibilityMap[tabNumber - 1]
        return (
          <div
            key={id}
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {/*{renderTab(item)}*/}
            {/*{mobile || tabNumber === tabsWithRef.length - 1 ? null : renderOverflowMenu(id)}*/}
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
