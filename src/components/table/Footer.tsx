'use client'

import { NumericFormat } from '@/lib/react-number-format'

import type { NumericFormatProps } from '@/lib/react-number-format'
import type { HeaderContext } from '@tanstack/react-table'

type Props = NumericFormatProps

export default function Footer<T>(props?: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function Context(info: HeaderContext<T, any>) {
    return <NumericFormat {...props} value={info.table.getCoreRowModel().rows.at(-1)?.getValue(info.column.id)} />
  }
}
