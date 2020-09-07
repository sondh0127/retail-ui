import { Spinner } from '@retail-ui/spinner'
import clsx from 'clsx'
import * as React from 'react'

import { useCardCtx } from './CardContext'
import { CardStyles } from './styles'

type ReactDivProps = React.HTMLAttributes<HTMLDivElement>
type Ref = HTMLDivElement

export type CardBodyProps = {}

export const CardBody = React.forwardRef<Ref, ReactDivProps & CardBodyProps>(
  (props) => {
    const { children, className, ...rest } = props

    const { color, isLoading } = useCardCtx()

    const headerStyle = CardStyles.body
    const cls = clsx(className, headerStyle.base)
    const childrenCls = clsx(isLoading && headerStyle.loading.base)

    const spinnerCls = clsx(
      headerStyle.loading.spinner,
      headerStyle.loading[color],
    )

    return (
      <div className={cls} {...rest}>
        <div className={childrenCls}>{children}</div>
        {isLoading && <Spinner className={spinnerCls} />}
      </div>
    )
  },
)

CardBody.displayName = 'CardBody'
