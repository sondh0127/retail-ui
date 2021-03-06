import clsx from 'clsx'
import * as React from 'react'

import { CollapseProvider } from './CollapseContext'
import { CollapseStyles } from './styles'

type ReactDivProps = React.HTMLAttributes<HTMLDivElement>
type Ref = HTMLDivElement

export type CollapseProps = {
  hasBorder?: boolean
}

export const Collapse = React.forwardRef<Ref, ReactDivProps & CollapseProps>(
  (props, ref) => {
    const { children, hasBorder, className, ...rest } = props

    const [collapses, setCollapses] = React.useState([
      // eslint-disable-next-line lodash/prefer-constant
      ...[...Array(React.Children.count(children))].map(() => false),
    ])

    const renderChildren = React.useMemo(() => {
      return React.Children.map(children, (el, idx) => {
        return React.isValidElement(el)
          ? React.cloneElement(el, { index: `${idx}` })
          : null
      })
    }, [children])

    const callapseValue = React.useMemo(() => {
      return {
        collapses,
        setCollapses,
      }
    }, [collapses])

    const collapseCls = clsx(
      className,
      CollapseStyles.base,
      hasBorder && CollapseStyles.bordered,
    )

    return (
      <CollapseProvider value={callapseValue} {...rest}>
        <div ref={ref} className={collapseCls}>
          {renderChildren}
        </div>
      </CollapseProvider>
    )
  },
)

Collapse.displayName = 'Collapse'
