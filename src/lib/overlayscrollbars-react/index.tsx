'use client'

import { forwardRef } from 'react'

import { OverlayScrollbarsComponent as _OverlayScrollbarsComponent } from 'overlayscrollbars-react'

import 'overlayscrollbars/overlayscrollbars.css'
import './overlayscrollbars.css'

import type { OverlayScrollbarsComponentProps } from 'overlayscrollbars-react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const OverlayScrollbarsComponent = forwardRef<any, OverlayScrollbarsComponentProps>((props, ref) => {
  return (
    <_OverlayScrollbarsComponent
      {...props}
      ref={ref}
      element={props?.element ?? 'div'}
      options={{ scrollbars: { theme: 'os-theme-dark' } }}
      className={props?.className}
      defer
    />
  )
})

export default OverlayScrollbarsComponent
