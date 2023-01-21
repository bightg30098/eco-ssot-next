import 'overlayscrollbars/overlayscrollbars.css'
import './overlayscrollbars.css'

import clsx from 'clsx'
import { OverlayScrollbarsComponent as OverlayScrollbars } from 'overlayscrollbars-react'

import type { OverlayScrollbarsComponentProps } from 'overlayscrollbars-react'

export default function OverlayScrollbarsComponent(props?: OverlayScrollbarsComponentProps) {
  return (
    <OverlayScrollbars
      {...props}
      element="div"
      options={{ scrollbars: { theme: 'os-theme-dark' } }}
      className={clsx(props?.className)}
      defer
    />
  )
}
