'use client'

import { useMemo } from 'react'

import { createColumnHelper } from '@tanstack/react-table'
import clsx from 'clsx'
import { nanoid } from 'nanoid'

import { Table, ExpandCell } from '@/components/table'
import { NumericFormat } from '@/lib/react-number-format'

import type { RenewableEnergy } from './types'

export default function RenewableEnergyTable({ data, latestDate }: { data: RenewableEnergy[]; latestDate: Date }) {
  const footer = data.at(-1)
  const columns = useMemo(() => getColumns({ footer, latestDate }), [footer, latestDate])

  return <Table columns={columns} data={data.slice(0, -1)} />
}

const columnHelper = createColumnHelper<RenewableEnergy>()

const getColumns = ({ footer, latestDate }: { footer?: RenewableEnergy; latestDate: Date }) => {
  const currYear = latestDate.getFullYear()

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
        columnHelper.accessor('totalElectric', {
          header: () => <span>Total (a)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.totalElectric} />,
        }),
        columnHelper.accessor('solarElectric', {
          header: () => <span>Solar Power (b)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.solarElectric} />,
        }),
        columnHelper.accessor('electricBuy', {
          header: () => <span>Purchase Green electricity</span>,
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.electricBuy} />,
        }),
        columnHelper.accessor('energyInvest', {
          header: () => <span>Green energy investment</span>,
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.energyInvest} />,
        }),
        columnHelper.accessor('tRec', {
          header: () => <span>REC (c)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.tRec} />,
        }),
      ],
    }),
    columnHelper.group({
      id: nanoid(),
      header: () => (
        <span>{`Percentage
        ( (b+c) / a )`}</span>
      ),
      columns: [
        columnHelper.accessor('percent', {
          cell: (info) => <NumericFormat value={info.getValue()} unit={1e-2} suffix="%" />,
          footer: () => <NumericFormat value={footer?.percent} />,
          meta: {
            header: { isPlaceholder: true },
          },
        }),
      ],
      meta: {
        header: { rowSpan: 2 },
      },
    }),
    columnHelper.group({
      id: nanoid(),
      // TODO: GET TARGET FROM API
      header: () => (
        <span>{`REC Target for Renewable Energy (kWh)
        ( a*57% - b )`}</span>
      ),
      columns: [
        columnHelper.accessor('target', {
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.target} />,
          meta: {
            header: { isPlaceholder: true },
          },
        }),
      ],
      meta: {
        header: { rowSpan: 2 },
      },
    }),
    columnHelper.group({
      id: nanoid(),
      header: () => <span>Usable Roof Area (M²) </span>,
      columns: [
        columnHelper.accessor('area', {
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.area} />,
          meta: {
            header: { isPlaceholder: true },
          },
        }),
      ],
      meta: {
        header: { rowSpan: 2 },
      },
    }),
    columnHelper.group({
      id: nanoid(),
      header: () => <span>Roof Structure (RC / Steel Structure)</span>,
      columns: [
        columnHelper.accessor('structure', {
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.structure} />,
          meta: {
            header: { isPlaceholder: true },
          },
        }),
      ],
      meta: {
        header: { rowSpan: 2 },
      },
    }),
  ]
}
