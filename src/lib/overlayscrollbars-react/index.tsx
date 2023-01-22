'use client'

import clsx from 'clsx'
import { OverlayScrollbarsComponent as _OverlayScrollbarsComponent } from 'overlayscrollbars-react'

import 'overlayscrollbars/overlayscrollbars.css'
import './overlayscrollbars.css'

import type { OverlayScrollbarsComponentProps } from 'overlayscrollbars-react'

export default function OverlayScrollbarsComponent(props?: OverlayScrollbarsComponentProps) {
  return (
    <_OverlayScrollbarsComponent
      {...props}
      element="div"
      options={{ scrollbars: { theme: 'os-theme-dark' } }}
      className={clsx(props?.className)}
      defer
    />
  )
}
