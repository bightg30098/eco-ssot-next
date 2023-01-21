'use client'

import { useMemo } from 'react'

import { createColumnHelper } from '@tanstack/react-table'
import { nanoid } from 'nanoid'

import { Table, NumericCell } from '@/components/table'

import type { Overview } from './types'

const columnHelper = createColumnHelper<Overview>()

const getColumns = ({ latestDate }: { latestDate: Date }) => {
  const currYear = latestDate.getFullYear()
  const lastYear = currYear - 1

  return [
    columnHelper.accessor('site', {
      header: () => <span>Site</span>,
      cell: (info) => info.getValue(),
      meta: {
        header: { className: '-translate-y-1/2' },
      },
    }),
    columnHelper.group({
      id: nanoid(),
      header: () => <span>Electricity</span>,
      columns: [
        columnHelper.accessor('electricCompareYear', {
          header: () => <span>{lastYear}</span>,
          cell: NumericCell(),
        }),
        columnHelper.accessor('electricCurrentYear', {
          header: () => <span>{currYear}</span>,
          cell: NumericCell(),
        }),
        columnHelper.accessor('electricWeight', {
          header: () => <span>Weight</span>,
          cell: NumericCell({ unit: 1e-2, suffix: '%' }),
        }),
        columnHelper.accessor('electricGradient', {
          header: () => <span>Gap *</span>,
          cell: NumericCell({ unit: 1e-2, suffix: '%' }),
        }),
      ],
    }),
    columnHelper.group({
      id: nanoid(),
      header: () => <span>Water</span>,
      columns: [
        columnHelper.accessor('waterUseCompareYear', {
          header: () => <span>{lastYear}</span>,
          cell: NumericCell(),
        }),
        columnHelper.accessor('waterUseCurrentYear', {
          header: () => <span>{currYear}</span>,
          cell: NumericCell(),
        }),
        columnHelper.accessor('waterUseWeight', {
          header: () => <span>Weight</span>,
          cell: NumericCell({ unit: 1e-2, suffix: '%' }),
        }),
        columnHelper.accessor('waterUseGradient', {
          header: () => <span>Gap *</span>,
          cell: NumericCell({ unit: 1e-2, suffix: '%' }),
        }),
      ],
    }),
    columnHelper.group({
      id: nanoid(),
      header: () => <span>Revenue</span>,
      columns: [
        columnHelper.accessor('revenueCompareYear', {
          header: () => <span>{lastYear}</span>,
          cell: NumericCell(),
        }),
        columnHelper.accessor('revenueCurrentYear', {
          header: () => <span>{currYear}</span>,
          cell: NumericCell(),
        }),
        columnHelper.accessor('revenueWeight', {
          header: () => <span>Weight</span>,
          cell: NumericCell({ unit: 1e-2, suffix: '%' }),
        }),
        columnHelper.accessor('revenueGradient', {
          header: () => <span>Gap *</span>,
          cell: NumericCell({ unit: 1e-2, suffix: '%' }),
        }),
      ],
    }),
    columnHelper.group({
      id: nanoid(),
      header: () => <span>ASP</span>,
      columns: [
        columnHelper.accessor('ASPCompareYear', {
          header: () => <span>{lastYear}</span>,
          cell: NumericCell(),
        }),
        columnHelper.accessor('ASPCurrentYear', {
          header: () => <span>{currYear}</span>,
          cell: NumericCell(),
        }),
        columnHelper.accessor('ASPGradient', {
          header: () => <span>Gap *</span>,
          cell: NumericCell({ unit: 1e-2, suffix: '%' }),
        }),
      ],
    }),
  ]
}

export default function OverviewTable({ data, latestDate }: { data: Overview[]; latestDate: Date }) {
  const columns = useMemo(() => getColumns({ latestDate: new Date(latestDate) }), [latestDate])

  return <Table columns={columns} data={data} />
}
