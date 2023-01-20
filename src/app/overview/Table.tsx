'use client'

import { useMemo } from 'react'

import { createColumnHelper } from '@tanstack/react-table'
import { nanoid } from 'nanoid'

import Table from '@/components/Table'
import { NumericFormat } from '@/lib/react-number-format'

import type { Overview } from './types'
import type { NumericFormatProps } from '@/lib/react-number-format'
import type { CellContext } from '@tanstack/react-table'

const columnHelper = createColumnHelper<Overview>()

const Cell = (props?: NumericFormatProps) => (info: CellContext<Overview, unknown>) => {
  return <NumericFormat {...props} value={info.getValue() as number} />
}

const getColumns = ({ latestDate }: { latestDate: Date }) => {
  const currYear = latestDate.getFullYear()
  const lastYear = currYear - 1

  return [
    columnHelper.accessor('site', {
      header: () => <span>Site</span>,
      cell: (info) => info.getValue(),
      meta: {
        headerClassName: 'text-center',
        cellClassName: 'text-center',
      },
    }),
    columnHelper.group({
      id: nanoid(),
      header: () => <span>Electricity</span>,
      columns: [
        columnHelper.accessor('electricCompareYear', {
          header: () => <span>{lastYear}</span>,
          cell: Cell(),
        }),
        columnHelper.accessor('electricCurrentYear', {
          header: () => <span>{currYear}</span>,
          cell: Cell(),
        }),
        columnHelper.accessor('electricWeight', {
          header: () => <span>Weight</span>,
          cell: Cell(),
        }),
        columnHelper.accessor('electricGradient', {
          header: () => <span>Gap *</span>,
          cell: Cell(),
        }),
      ],
    }),
    columnHelper.group({
      id: nanoid(),
      header: () => <span>Water</span>,
      columns: [
        columnHelper.accessor('waterUseCompareYear', {
          header: () => <span>{lastYear}</span>,
          cell: Cell(),
        }),
        columnHelper.accessor('waterUseCurrentYear', {
          header: () => <span>{currYear}</span>,
          cell: Cell(),
        }),
        columnHelper.accessor('waterUseWeight', {
          header: () => <span>Weight</span>,
          cell: Cell(),
        }),
        columnHelper.accessor('waterUseGradient', {
          header: () => <span>Gap *</span>,
          cell: Cell(),
        }),
      ],
    }),
    columnHelper.group({
      id: nanoid(),
      header: () => <span>Revenue</span>,
      columns: [
        columnHelper.accessor('revenueCompareYear', {
          header: () => <span>{lastYear}</span>,
          cell: Cell(),
        }),
        columnHelper.accessor('revenueCurrentYear', {
          header: () => <span>{currYear}</span>,
          cell: Cell(),
        }),
        columnHelper.accessor('revenueWeight', {
          header: () => <span>Weight</span>,
          cell: Cell(),
        }),
        columnHelper.accessor('revenueGradient', {
          header: () => <span>Gap *</span>,
          cell: Cell(),
        }),
      ],
    }),
    columnHelper.group({
      id: nanoid(),
      header: () => <span>ASP</span>,
      columns: [
        columnHelper.accessor('ASPCompareYear', {
          header: () => <span>{lastYear}</span>,
          cell: Cell(),
        }),
        columnHelper.accessor('ASPCurrentYear', {
          header: () => <span>{currYear}</span>,
          cell: Cell(),
        }),
        columnHelper.accessor('ASPGradient', {
          header: () => <span>Gap *</span>,
          cell: Cell(),
        }),
      ],
    }),
  ]
}

export default function OverviewTable({ data, latestDate }: { data: Overview[]; latestDate: Date }) {
  const columns = useMemo(() => getColumns({ latestDate }), [latestDate])

  return <Table columns={columns} data={data} />
}
