'use client'

import { NumericFormat } from '@/lib/react-number-format'

import type { NumericFormatProps } from '@/lib/react-number-format'
import type { CellContext, HeaderContext } from '@tanstack/react-table'

type Props = NumericFormatProps

export default function NumericCell<T>(props?: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function Context(info: CellContext<T, any> | HeaderContext<T, any>) {
    if ('getValue' in info) return <NumericFormat {...props} value={props?.value ?? info.getValue()} />

    return <NumericFormat {...props} value={props?.value} />
  }
}
