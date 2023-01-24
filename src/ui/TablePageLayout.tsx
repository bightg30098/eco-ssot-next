'use client'

import { useCallback } from 'react'

import Badge from '@/components/badge/Badge'
import LinkButtonGroup from '@/components/button-group/LinkButtonGroup'
import DummyDiv from '@/components/dummy/DummyDiv'
import Legend from '@/components/legend/Legend'

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
        {({ isHistory, basePathname }) => (
          <>
            <div className="grid grid-cols-3 items-center gap-4">
              <DummyDiv className="col-span-1" />

              <LinkButtonGroup
                className="col-span-1 w-full justify-center"
                options={getOptions(basePathname)}
                selected={isHistory ? getOptions(basePathname).at(-1) : getOptions(basePathname)[0]}
              />

              <div className="col-span-1 flex w-full items-center justify-end space-x-4">
                <Legend variant="error">Miss Target</Legend>
                <Legend variant="success">Miss Target</Legend>
                <Badge variant="error">Missing Data</Badge>
              </div>
            </div>

            {children}
          </>
        )}
      </TablePanel>
    </>
  )
}
