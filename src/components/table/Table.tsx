'use client'

import { useCallback } from 'react'

import { flexRender, getCoreRowModel, getExpandedRowModel, useReactTable } from '@tanstack/react-table'
import clsx from 'clsx'

import OverlayScrollbarsComponent from '@/lib/overlayscrollbars-react'

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
    <OverlayScrollbarsComponent className="relative flex flex-col overflow-auto rounded-t-lg shadow-lg">
      <table className="w-full border-separate border-spacing-0 text-right">
        <thead className="sticky top-0 z-10 bg-primary-800 font-medium tracking-wider">
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className={clsx(
                        header.column.columnDef.meta?.header?.isExpander
                          ? 'p-0'
                          : isHeaderGroup(header)
                          ? 'px-4 pt-2.5 text-center'
                          : 'p-2.5 px-4',
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
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      key={cell.id}
                      className={clsx(
                        'py-2',
                        row.depth === 0 &&
                          clsx(
                            'border-b',
                            row.getIsExpanded() ? 'border-b-primary-600' : 'border-b-gray-500',
                            row.index === table.getRowModel().rows.length - 1 && 'border-b-0',
                          ),
                        row.depth > 0 && 'border-b border-b-primary-600 bg-primary-600/20',
                        cell.column.columnDef.meta?.header?.isExpander ? 'px-0' : 'px-4',
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
        <tfoot className="sticky bottom-0 z-10 bg-primary-900">
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
    </OverlayScrollbarsComponent>
  )
}

function TableWithoutHooks<T>({ table }: TableProps<T>) {
  return <BaseTable table={table} />
}

function TableWithHooks<T>({ columns, data }: ColumnsDataProps<T>) {
  const table = useReactTable({
    columns,
    data,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getSubRows: (row: any) => row.subRows,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  })

  return <BaseTable table={table} />
}

export default function Table<T>(props: Props<T>) {
  if ('table' in props) return <TableWithoutHooks table={props.table} />

  return <TableWithHooks columns={props.columns} data={props.data} />
}
