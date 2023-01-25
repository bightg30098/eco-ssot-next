'use client'

import { useCallback, useMemo } from 'react'

import { usePathname } from 'next/navigation'

type TablePanelProps = {
  children:
    | React.ReactNode
    | ((context: {
        isHistory: boolean
        pathname: string | null
        basePathname: string | null
        getOptions: (basePathname: string | null) => ReturnType<typeof OPTIONS>
      }) => React.ReactNode)
}

export default function TablePanel({ children }: TablePanelProps) {
  const pathname = usePathname()
  const isHistory = !!pathname?.endsWith('/history')
  const basePathname = isHistory ? pathname?.replace(/\/history/gi, '') || pathname : pathname
  const getOptions = useCallback((basePathname: string | null) => OPTIONS({ basePathname }), [])

  const context = useMemo(
    () => ({ isHistory, pathname, basePathname, getOptions }),
    [isHistory, pathname, basePathname, getOptions],
  )

  return <>{typeof children === 'function' ? children(context) : children}</>
}

const OPTIONS = ({ basePathname }: { basePathname: string | null }) => [
  { key: 'current', value: 'Current Year', href: `${basePathname}` },
  { key: 'history', value: 'History Years', href: `${basePathname}/history` },
]
