'use client'

import { useMemo } from 'react'

import { createColumnHelper } from '@tanstack/react-table'
import clsx from 'clsx'
import { nanoid } from 'nanoid'

import { Table, ExpandCell } from '@/components/table'
import { NumericFormat } from '@/lib/react-number-format'

import type { Electricity } from './types'

export default function ElectricityTable({ data, latestDate }: { data: Electricity[]; latestDate: Date }) {
  const footer = data.at(-1)
  const columns = useMemo(() => getColumns({ footer, latestDate }), [footer, latestDate])

  return <Table columns={columns} data={data.slice(0, -1)} />
}

const columnHelper = createColumnHelper<Electricity>()

const getColumns = ({ footer, latestDate }: { footer?: Electricity; latestDate: Date }) => {
  const currYear = latestDate.getFullYear()
  const lastYear = currYear - 1

  return [
    columnHelper.display({
      id: nanoid(),
      cell: ExpandCell({ className: 'pl-4' }),
      meta: {
        header: { isExpander: true },
        cell: { isExpander: true },
      },
    }),
    columnHelper.group({
      id: nanoid(),
      header: () => <span>Site</span>,
      columns: [
        columnHelper.accessor('name', {
          cell: (info) => info.getValue(),
          footer: () => <span>{footer?.name}</span>,
          meta: {
            header: { isPlaceholder: true },
            cell: { className: clsx('whitespace-nowrap text-center') },
            footer: { className: clsx('text-center') },
          },
        }),
      ],
      meta: {
        header: { rowSpan: 2 },
      },
    }),
    columnHelper.group({
      id: nanoid(),
      header: () => <span>Electricity Consumption (kWh)</span>,
      columns: [
        columnHelper.accessor('electricCompareYear', {
          header: () => <span>{lastYear} (a)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.electricCompareYear} />,
        }),
        columnHelper.accessor('electricCurrentYear', {
          header: () => <span>{currYear} (b)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.electricCurrentYear} />,
        }),
        columnHelper.accessor('electricGradient', {
          header: () => <span>Gap (b/a-1)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} unit={1e-2} suffix="%" />,
          footer: () => <NumericFormat value={footer?.electricGradient} unit={1e-2} suffix="%" />,
        }),
      ],
    }),
    columnHelper.group({
      id: nanoid(),
      header: () => <span>Revenue (billion NTD)</span>,
      columns: [
        columnHelper.accessor('revenueCompareYear', {
          header: () => <span>{lastYear} (c)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} precision={3} />,
          footer: () => <NumericFormat value={footer?.revenueCompareYear} precision={3} />,
        }),
        columnHelper.accessor('revenueCurrentYear', {
          header: () => <span>{currYear} (d)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} precision={3} />,
          footer: () => <NumericFormat value={footer?.revenueCurrentYear} precision={3} />,
        }),
        columnHelper.accessor('revenueGradient', {
          header: () => <span>Gap (d/c-1)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} unit={1e-2} suffix="%" />,
          footer: () => <NumericFormat value={footer?.revenueGradient} unit={1e-2} suffix="%" />,
        }),
      ],
    }),
    columnHelper.group({
      id: nanoid(),
      header: () => <span>Electricity Consumption per Billion NTD</span>,
      columns: [
        columnHelper.accessor('billiRevenueElectricCompareYear', {
          header: () => <span>{lastYear} (e=a/c)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.billiRevenueElectricCompareYear} />,
        }),
        columnHelper.accessor('billiRevenueElectricCurrentYear', {
          header: () => <span>{currYear} (f=b/d)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.billiRevenueElectricCurrentYear} />,
        }),
        columnHelper.accessor('billiRevenueElectricGradient', {
          header: () => <span>Gap (f/e-1)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} unit={1e-2} suffix="%" />,
          footer: () => <NumericFormat value={footer?.billiRevenueElectricGradient} unit={1e-2} suffix="%" />,
        }),
      ],
    }),
    columnHelper.group({
      id: nanoid(),
      header: () => <span>ASP (Thousand NTD/unit)</span>,
      columns: [
        columnHelper.accessor('ASPCompareYear', {
          header: () => <span>{lastYear} (g)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} precision={3} />,
          footer: () => <NumericFormat value={footer?.ASPCompareYear} />,
        }),
        columnHelper.accessor('ASPCurrentYear', {
          header: () => <span>{currYear} (h)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} precision={3} />,
          footer: () => <NumericFormat value={footer?.ASPCurrentYear} />,
        }),
        columnHelper.accessor('ASPGradientYear', {
          header: () => <span>Gap (h/g-1)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} unit={1e-2} suffix="%" />,
          footer: () => <NumericFormat value={footer?.ASPGradientYear} unit={1e-2} suffix="%" />,
        }),
      ],
    }),
  ]
}
