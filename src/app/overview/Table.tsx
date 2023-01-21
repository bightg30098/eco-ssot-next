'use client'

import { useMemo } from 'react'

import { createColumnHelper } from '@tanstack/react-table'
import { nanoid } from 'nanoid'

import { Table, NumericCell } from '@/components/table'

import type { Overview } from './types'

const columnHelper = createColumnHelper<Overview>()

const getColumns = ({ footer, latestDate }: { footer?: Overview; latestDate: Date }) => {
  const currYear = latestDate.getFullYear()
  const lastYear = currYear - 1

  return [
    columnHelper.accessor('site', {
      header: () => <span>Site</span>,
      cell: (info) => info.getValue(),
      footer: () => <span>{footer?.site}</span>,
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
          footer: NumericCell({ value: footer?.electricCompareYear }),
        }),
        columnHelper.accessor('electricCurrentYear', {
          header: () => <span>{currYear}</span>,
          cell: NumericCell(),
          footer: NumericCell({ value: footer?.electricCurrentYear }),
        }),
        columnHelper.accessor('electricWeight', {
          header: () => <span>Weight</span>,
          cell: NumericCell({ unit: 1e-2, suffix: '%' }),
          footer: NumericCell({ value: footer?.electricWeight }),
        }),
        columnHelper.accessor('electricGradient', {
          header: () => <span>Gap *</span>,
          cell: NumericCell({ unit: 1e-2, suffix: '%' }),
          footer: NumericCell({ value: footer?.electricGradient }),
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
          footer: NumericCell({ value: footer?.waterUseCompareYear }),
        }),
        columnHelper.accessor('waterUseCurrentYear', {
          header: () => <span>{currYear}</span>,
          cell: NumericCell(),
          footer: NumericCell({ value: footer?.waterUseCurrentYear }),
        }),
        columnHelper.accessor('waterUseWeight', {
          header: () => <span>Weight</span>,
          cell: NumericCell({ unit: 1e-2, suffix: '%' }),
          footer: NumericCell({ value: footer?.waterUseWeight }),
        }),
        columnHelper.accessor('waterUseGradient', {
          header: () => <span>Gap *</span>,
          cell: NumericCell({ unit: 1e-2, suffix: '%' }),
          footer: NumericCell({ value: footer?.waterUseGradient }),
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
          footer: NumericCell({ value: footer?.revenueCompareYear }),
        }),
        columnHelper.accessor('revenueCurrentYear', {
          header: () => <span>{currYear}</span>,
          cell: NumericCell(),
          footer: NumericCell({ value: footer?.revenueCurrentYear }),
        }),
        columnHelper.accessor('revenueWeight', {
          header: () => <span>Weight</span>,
          cell: NumericCell({ unit: 1e-2, suffix: '%' }),
          footer: NumericCell({ value: footer?.revenueWeight }),
        }),
        columnHelper.accessor('revenueGradient', {
          header: () => <span>Gap *</span>,
          cell: NumericCell({ unit: 1e-2, suffix: '%' }),
          footer: NumericCell({ value: footer?.revenueGradient }),
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
          footer: NumericCell({ value: footer?.ASPCompareYear }),
        }),
        columnHelper.accessor('ASPCurrentYear', {
          header: () => <span>{currYear}</span>,
          cell: NumericCell(),
          footer: NumericCell({ value: footer?.ASPCurrentYear }),
        }),
        columnHelper.accessor('ASPGradient', {
          header: () => <span>Gap *</span>,
          cell: NumericCell({ unit: 1e-2, suffix: '%' }),
          footer: NumericCell({ value: footer?.ASPGradient }),
        }),
      ],
    }),
  ]
}

export default function OverviewTable({ data, latestDate }: { data: Overview[]; latestDate: Date }) {
  const footer = data.at(-1)
  const columns = useMemo(() => getColumns({ footer, latestDate: new Date(latestDate) }), [footer, latestDate])

  return <Table columns={columns} data={data.slice(0, -1)} />
}
