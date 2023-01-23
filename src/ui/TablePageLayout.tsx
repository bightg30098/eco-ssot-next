'use client'

import { useCallback } from 'react'

import LinkButtonGroup from '@/components/button-group/LinkButtonGroup'
import DummyDiv from '@/components/dummy/DummyDiv'

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
            <div className="relative flex items-center justify-between">
              <DummyDiv />
              <LinkButtonGroup
                options={getOptions(basePathname)}
                selected={isHistory ? getOptions(basePathname).at(-1) : getOptions(basePathname)[0]}
              />
              <DummyDiv />
            </div>

            {children}
          </>
        )}
      </TablePanel>
    </>
  )
}
