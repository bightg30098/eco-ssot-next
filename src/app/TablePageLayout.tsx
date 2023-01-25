'use client'

import Badge from '@/components/badge/Badge'
import LinkButtonGroup from '@/components/button-group/LinkButtonGroup'
import DummyDiv from '@/components/dummy/DummyDiv'
import Legend from '@/components/legend/Legend'

import TablePanel from './TablePanel'

export default function TablePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TablePanel>
        {({ isHistory, basePathname, getOptions }) => (
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
