'use client'

import { useCallback } from 'react'

import NavLinkGroup from '@/components/button-group/NavLinkGroup'

import TablePanel from './TablePanel'

const OPTIONS = ({ basePathname }: { basePathname: string | null }) => [
  { key: 'current', value: 'Current Year', href: `${basePathname}` },
  { key: 'history', value: 'History Years', href: `${basePathname}/history` },
]

export default function TablePageLayout({ children }: { children: React.ReactNode }) {
  const getOptions = useCallback((basePathname: string | null) => OPTIONS({ basePathname }), [])

  return (
    <>
      <TablePanel>
        {({ isHistory, pathname, basePathname }) => (
          <>
            <div className="flex items-center justify-between">
              <div></div>
              <NavLinkGroup
                options={getOptions(basePathname)}
                selected={isHistory ? getOptions(basePathname).at(-1) : getOptions(basePathname)[0]}
              />
              <div></div>
            </div>

            {children}
          </>
        )}
      </TablePanel>
    </>
  )
}
