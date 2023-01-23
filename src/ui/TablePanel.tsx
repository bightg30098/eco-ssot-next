'use client'

import { useMemo } from 'react'

import { usePathname } from 'next/navigation'

type TablePanelProps = {
  children:
    | React.ReactNode
    | ((context: { isHistory: boolean; pathname: string | null; basePathname: string | null }) => React.ReactNode)
}

export default function TablePanel({ children }: TablePanelProps) {
  const pathname = usePathname()
  const isHistory = !!pathname?.endsWith('/history')
  const basePathname = isHistory ? pathname?.replace(/\/history/gi, '') || pathname : pathname
  const context = useMemo(() => ({ isHistory, pathname, basePathname }), [isHistory, pathname, basePathname])

  return <>{typeof children === 'function' ? children(context) : children}</>
}
