'use client'

import { useMemo } from 'react'

import { createColumnHelper } from '@tanstack/react-table'
import clsx from 'clsx'
import { nanoid } from 'nanoid'

import { Table, ExpandCell } from '@/components/table'
import { NumericFormat } from '@/lib/react-number-format'

import type { Carbon } from './types'

const columnHelper = createColumnHelper<Carbon>()

const getColumns = ({ footer, latestDate }: { footer?: Carbon; latestDate: Date }) => {
  const currYear = latestDate.getFullYear()
  const baseYear = 2016

  return [
    columnHelper.display({
      id: nanoid(),
      cell: ExpandCell({ className: 'pl-4' }),
      meta: {
        header: { isExpander: true },
        cell: { isExpander: true },
      },
    }),
    columnHelper.accessor('name', {
      header: () => <span>Site</span>,
      cell: (info) => info.getValue(),
      footer: () => <span>{footer?.name}</span>,
      meta: {
        header: { className: clsx('-translate-y-1/2 text-center') },
        cell: { className: clsx('text-center') },
        footer: { className: clsx('text-center') },
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
        columnHelper.accessor('tRec', {
          header: () => <span>REC (c)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.tRec} />,
        }),
        columnHelper.accessor('co2Electric', {
          header: () => <span>Non-renewable (d=a-b-c)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.co2Electric} />,
        }),
      ],
    }),
    columnHelper.accessor('co2Coefficient', {
      header: () => (
        <span>{`Carbon Emission Factor (e)
      (Ton CO₂e/MWh)`}</span>
      ),
      cell: (info) => info.getValue(),
      footer: () => <span>-</span>,
      meta: {
        header: { className: clsx('-translate-y-1/2 text-center') },
        cell: { className: clsx('text-center') },
        footer: { className: clsx('text-center') },
      },
    }),
    columnHelper.group({
      id: nanoid(),
      header: () => <span>Carbon Emission (Ton)</span>,
      columns: [
        columnHelper.accessor('scope1', {
          header: () => <span>Scope1 (f)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.scope1} />,
        }),
        columnHelper.accessor('scope2', {
          header: () => <span>Scope2 (g=d*e/1000)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.scope2} />,
        }),
        columnHelper.accessor('co2CurrentYear', {
          header: () => <span>{currYear} Total (h=f+g)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.co2CurrentYear} />,
        }),
        columnHelper.accessor('co2baseYear', {
          header: () => <span>{baseYear} Total (i)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.co2baseYear} />,
        }),
        columnHelper.display({
          id: nanoid(),
          // TODO: GET TARGET FROM API
          header: () => <span>Carbon Emission Target (j=i*74.8%)</span>,
          cell: (info) => <NumericFormat value={info.cell.row.original.co2baseYear * 0.748} />,
          footer: () => <NumericFormat value={footer?.target} />,
        }),
      ],
    }),
    columnHelper.display({
      id: nanoid(),
      header: () => (
        <span>{`Wistron Internal Carbon Pricing
        (k)(EUR)`}</span>
      ),
      cell: () => <span>-</span>,
      footer: () => <span>-</span>,
      meta: {
        header: { className: clsx('-translate-y-1/2 text-center') },
      },
    }),
    columnHelper.display({
      id: nanoid(),
      header: () => (
        <span>{`Carbon Tax
        (h-j)*k`}</span>
      ),
      cell: () => <span>-</span>,
      footer: () => <span>-</span>,
      meta: {
        header: { className: clsx('-translate-y-1/2 text-center') },
      },
    }),
    columnHelper.accessor('target', {
      // TODO: GET TARGET FROM API
      header: () => (
        <span>{`REC Target for Carbon Offset
        (h-i*74.8%)*1000/e`}</span>
      ),
      cell: (info) => <NumericFormat value={info.getValue()} />,
      footer: () => <NumericFormat value={footer?.target} />,
      meta: {
        header: { className: clsx('-translate-y-1/2 text-center') },
      },
    }),
  ]
}

export default function CarbonTable({ data, latestDate }: { data: Carbon[]; latestDate: Date }) {
  const footer = data.at(-1)
  const columns = useMemo(() => getColumns({ footer, latestDate }), [footer, latestDate])

  return <Table columns={columns} data={data.slice(0, -1)} />
}
