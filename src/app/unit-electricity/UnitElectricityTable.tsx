'use client'

import { useMemo } from 'react'

import { createColumnHelper } from '@tanstack/react-table'
import clsx from 'clsx'
import { nanoid } from 'nanoid'

import { Table, ExpandCell } from '@/components/table'
import { NumericFormat } from '@/lib/react-number-format'

import type { UnitElectricity } from './types'

export default function UnitElectricityTable({ data, latestDate }: { data: UnitElectricity[]; latestDate: Date }) {
  const footer = data.at(-1)
  const columns = useMemo(() => getColumns({ footer, latestDate: new Date(latestDate) }), [footer, latestDate])

  return <Table columns={columns} data={data.slice(0, -1)} />
}

const columnHelper = createColumnHelper<UnitElectricity>()

const getColumns = ({ footer, latestDate }: { footer?: UnitElectricity; latestDate: Date }) => {
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
      header: () => <span>Production (unit)</span>,
      columns: [
        columnHelper.accessor('productionCompareYear', {
          header: () => <span>{lastYear} (c)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.productionCompareYear} />,
        }),
        columnHelper.accessor('productionCurrentYear', {
          header: () => <span>{currYear} (d)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.productionCurrentYear} />,
        }),
        columnHelper.accessor('productionGradient', {
          header: () => <span>Gap (d/c-1)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} unit={1e-2} suffix="%" />,
          footer: () => <NumericFormat value={footer?.productionGradient} unit={1e-2} suffix="%" />,
        }),
      ],
    }),
    columnHelper.group({
      id: nanoid(),
      header: () => <span>Equivalent Electricity Consumption per Product (kWh)</span>,
      columns: [
        columnHelper.accessor('singleElectricCompareYear', {
          header: () => <span>{lastYear} (e=a/c)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} precision={3} />,
          footer: () => <NumericFormat value={footer?.singleElectricCompareYear} />,
        }),
        columnHelper.accessor('singleElectricCurrentYear', {
          header: () => <span>{currYear} (f=b/d)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} precision={3} />,
          footer: () => <NumericFormat value={footer?.singleElectricCurrentYear} />,
        }),
        columnHelper.accessor('singleElectricGradient', {
          header: () => <span>Gap (f/e-1)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} unit={1e-2} suffix="%" />,
          footer: () => <NumericFormat value={footer?.singleElectricGradient} unit={1e-2} suffix="%" />,
        }),
      ],
    }),
  ]
}
