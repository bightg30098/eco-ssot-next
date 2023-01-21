'use client'

import { useCallback } from 'react'

import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import clsx from 'clsx'

import type { Table, ColumnDef, ColumnDefBase, Header } from '@tanstack/react-table'

type TableProps<T> = {
  table: Table<T>
}

type ColumnsDataProps<T> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<T, any>[] & ColumnDefBase<T, any>[]
  data: T[]
}

type Props<T> = TableProps<T> | ColumnsDataProps<T>

function BaseTable<T>({ table }: TableProps<T>) {
  const isHeaderGroup = useCallback((header: Header<T, unknown>) => header.subHeaders.length > 0, [])

  return (
    <div className="flex flex-col overflow-auto rounded-t-lg shadow-lg">
      <table className="border-separate border-spacing-0 text-right">
        <thead className="bg-primary-800 font-medium tracking-wider">
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className={clsx(
                        'px-4',
                        isHeaderGroup(header) ? 'pt-2.5 text-center' : 'p-2.5',
                        header.column.columnDef.meta?.header?.className,
                      )}
                    >
                      {header.isPlaceholder ? null : (
                        <div className={clsx(isHeaderGroup(header) && 'border-b border-b-gray-500 pb-2.5')}>
                          {flexRender(header.column.columnDef.header, header.getContext())}
                        </div>
                      )}
                    </th>
                  )
                })}
              </tr>
            )
          })}
        </thead>
        <tbody className="bg-primary-900">
          {table.getRowModel().rows.map((row, i) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      key={cell.id}
                      className={clsx(
                        'border-t border-t-gray-500 py-2 px-4',
                        i === 0 && 'border-t-0',
                        cell.column.columnDef.meta?.cell?.className,
                      )}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => {
            return (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className={clsx(
                        !isHeaderGroup(header) && 'border-y-2 border-y-primary-600 px-4 py-2.5',
                        header.column.columnDef.meta?.footer?.className,
                      )}
                    >
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.footer, header.getContext())}
                    </th>
                  )
                })}
              </tr>
            )
          })}
        </tfoot>
      </table>
    </div>
  )
}

function TableWithoutHook<T>({ table }: TableProps<T>) {
  return <BaseTable table={table} />
}

function TableWithHook<T>({ columns, data }: ColumnsDataProps<T>) {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  })

  return <BaseTable table={table} />
}

export default function Table<T>(props: Props<T>) {
  if ('table' in props) return <TableWithoutHook table={props.table} />

  return <TableWithHook columns={props.columns} data={props.data} />
}
