'use client'

import { useMemo } from 'react'

import { createColumnHelper } from '@tanstack/react-table'
import clsx from 'clsx'
import { nanoid } from 'nanoid'

import { Table, ExpandCell } from '@/components/table'
import { NumericFormat } from '@/lib/react-number-format'

import type { Waste } from './types'

const BASE_YEAR = 2018

export default function WasteTable({ data, latestDate }: { data: Waste[]; latestDate: Date }) {
  const footer = data.at(-1)
  const columns = useMemo(() => getColumns({ footer, latestDate }), [footer, latestDate])

  return <Table columns={columns} data={data.slice(0, -1)} />
}

const columnHelper = createColumnHelper<Waste>()

const getColumns = ({ footer, latestDate }: { footer?: Waste; latestDate: Date }) => {
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
      header: () => <span>Non-recyclable Waste Weight (Ton)</span>,
      columns: [
        columnHelper.accessor('unrecoverableGeneral', {
          header: () => <span>General *¹</span>,
          cell: (info) => <NumericFormat value={info.getValue()} precision={3} />,
          footer: () => <NumericFormat value={footer?.unrecoverableGeneral} precision={3} />,
        }),
        columnHelper.accessor('unrecoverableGazardous', {
          header: () => <span>Hazardous</span>,
          cell: (info) => <NumericFormat value={info.getValue()} precision={3} />,
          footer: () => <NumericFormat value={footer?.unrecoverableGazardous} precision={3} />,
        }),
      ],
    }),
    columnHelper.group({
      id: nanoid(),
      header: () => <span>Recyclable Waste Weight (Ton)</span>,
      columns: [
        columnHelper.accessor('recoverableGeneral', {
          header: () => <span>General *²</span>,
          cell: (info) => <NumericFormat value={info.getValue()} precision={3} />,
          footer: () => <NumericFormat value={footer?.recoverableGeneral} />,
        }),
        columnHelper.accessor('recoverableResource', {
          header: () => <span>Recyclable(Compost & Recycling)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} precision={3} />,
          footer: () => <NumericFormat value={footer?.recoverableResource} />,
        }),
      ],
    }),
    columnHelper.group({
      id: nanoid(),
      header: () => (
        <span>{`Total
        (Ton)`}</span>
      ),
      columns: [
        columnHelper.accessor('total', {
          cell: (info) => <NumericFormat value={info.getValue()} precision={3} />,
          footer: () => <NumericFormat value={footer?.total} precision={3} />,
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
      header: () => (
        <span>{`Revenue of YTM
        (Billion NTD)`}</span>
      ),
      columns: [
        columnHelper.accessor('currentYTM', {
          cell: (info) => <NumericFormat value={info.getValue()} precision={3} />,
          footer: () => <NumericFormat value={footer?.currentYTM} precision={3} />,
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
      header: () => <span>Waste Generation Intensity (ton/billion NTD)</span>,
      columns: [
        columnHelper.accessor('intensityBaseYear', {
          header: () => <span>{BASE_YEAR}</span>,
          cell: (info) => <NumericFormat value={info.getValue()} precision={3} />,
          footer: () => <NumericFormat value={footer?.intensityBaseYear} />,
        }),
        columnHelper.accessor('intensityCurrentYTM', {
          header: () => <span>{currYear}</span>,
          cell: (info) => <NumericFormat value={info.getValue()} precision={3} />,
          footer: () => <NumericFormat value={footer?.intensityCurrentYTM} />,
        }),
        columnHelper.accessor('intensityGradient', {
          header: () => <span>Gap *</span>,
          cell: (info) => <NumericFormat value={info.getValue()} unit={1e-2} suffix="%" />,
          footer: () => <NumericFormat value={footer?.intensityGradient} unit={1e-2} suffix="%" />,
        }),
      ],
    }),
    columnHelper.group({
      id: nanoid(),
      header: () => <span>Waste Recycling Rate</span>,
      columns: [
        columnHelper.accessor('recoveryRate', {
          cell: (info) => <NumericFormat value={info.getValue()} unit={1e-2} suffix="%" />,
          footer: () => <NumericFormat value={footer?.recoveryRate} unit={1e-2} suffix="%" />,
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
