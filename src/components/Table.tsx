'use client'

import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import clsx from 'clsx'

import type { Table, ColumnDef, ColumnDefBase } from '@tanstack/react-table'

type Props<T> =
  | {
      table: Table<T>
    }
  | {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      columns: ColumnDef<T, any>[] & ColumnDefBase<T, any>[]
      data: T[]
    }

function TableUI<T>({ table }: { table: Table<T> }) {
  return (
    <div className="flex flex-col overflow-auto">
      <table className="border-separate border-spacing-0 text-right">
        <thead className="bg-primary-800 font-medium tracking-wider">
          {table.getHeaderGroups().map((headerGroup, i) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className={clsx(header.column.columnDef.meta?.headerClassName, i === 0 && 'text-center')}
                >
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={cell.column.columnDef.meta?.cellClassName}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function TableWithoutHook<T>({ table }: { table: Table<T> }) {
  return <TableUI table={table} />
}

function TableWithHook<T>({ columns, data }: { columns: ColumnDef<T>[]; data: T[] }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return <TableUI table={table} />
}

export default function Table<T>(props: Props<T>) {
  if ('table' in props) return <TableWithoutHook table={props.table} />

  return <TableWithHook columns={props.columns} data={props.data} />
}
