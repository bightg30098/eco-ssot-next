'use client'

import { useMemo } from 'react'

import { createColumnHelper } from '@tanstack/react-table'
import clsx from 'clsx'
import { nanoid } from 'nanoid'

import { Table, ExpandCell } from '@/components/table'
import { NumericFormat } from '@/lib/react-number-format'

import type { Water } from './types'

const BASE_YEAR = 2016

export default function WaterTable({ data, latestDate }: { data: Water[]; latestDate: Date }) {
  const footer = data.at(-1)
  const columns = useMemo(() => getColumns({ footer, latestDate }), [footer, latestDate])

  return <Table columns={columns} data={data.slice(0, -1)} />
}

const columnHelper = createColumnHelper<Water>()

const getColumns = ({ footer, latestDate }: { footer?: Water; latestDate: Date }) => {
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
      header: () => <span>Water Consumption (Ton)</span>,
      columns: [
        columnHelper.accessor('waterCompareYear', {
          header: () => <span>{lastYear}</span>,
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.waterCompareYear} />,
        }),
        columnHelper.accessor('waterCurrentYear', {
          header: () => <span>{currYear}</span>,
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.waterCurrentYear} />,
        }),
        columnHelper.accessor('waterWeight', {
          header: () => <span>Weight</span>,
          cell: (info) => <NumericFormat value={info.getValue()} unit={1e-2} suffix="%" />,
          footer: () => <NumericFormat value={footer?.waterWeight} unit={1e-2} suffix="%" />,
        }),
        columnHelper.accessor('waterGradient', {
          header: () => <span>Gap *</span>,
          cell: (info) => <NumericFormat value={info.getValue()} unit={1e-2} suffix="%" />,
          footer: () => <NumericFormat value={footer?.waterGradient} unit={1e-2} suffix="%" />,
        }),
      ],
    }),
    columnHelper.group({
      id: nanoid(),
      header: () => <span>Manpower (person)</span>,
      columns: [
        columnHelper.accessor('manpowerCompareYear', {
          header: () => <span>{lastYear}</span>,
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.manpowerCompareYear} />,
        }),
        columnHelper.accessor('manpowerCurrentYear', {
          header: () => <span>{currYear} (d)</span>,
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.manpowerCurrentYear} />,
        }),
      ],
    }),
    columnHelper.group({
      id: nanoid(),
      header: () => <span>Water Consumption per person (Ton)</span>,
      columns: [
        columnHelper.accessor('water_manpowerCompareYear', {
          header: () => <span>{lastYear}</span>,
          cell: (info) => <NumericFormat value={info.getValue()} precision={3} />,
          footer: () => <NumericFormat value={footer?.water_manpowerCompareYear} />,
        }),
        columnHelper.accessor('water_manpowerCurrentYear', {
          header: () => <span>{currYear}</span>,
          cell: (info) => <NumericFormat value={info.getValue()} precision={3} />,
          footer: () => <NumericFormat value={footer?.water_manpowerCurrentYear} />,
        }),
        columnHelper.accessor('water_manpowerWeight', {
          header: () => <span>Gap *</span>,
          cell: (info) => <NumericFormat value={info.getValue()} unit={1e-2} suffix="%" />,
          footer: () => <NumericFormat value={footer?.water_manpowerWeight} unit={1e-2} suffix="%" />,
        }),
      ],
    }),
    columnHelper.group({
      id: nanoid(),
      header: () => <span>Revenue (billion NTD)</span>,
      columns: [
        columnHelper.accessor('revenueCompareYear', {
          header: () => <span>{lastYear}</span>,
          cell: (info) => <NumericFormat value={info.getValue()} precision={3} />,
          footer: () => <NumericFormat value={footer?.revenueCompareYear} />,
        }),
        columnHelper.accessor('revenueCurrentYear', {
          header: () => <span>{currYear}</span>,
          cell: (info) => <NumericFormat value={info.getValue()} precision={3} />,
          footer: () => <NumericFormat value={footer?.revenueCurrentYear} />,
        }),
        columnHelper.accessor('revenueGradient', {
          header: () => <span>Gap *</span>,
          cell: (info) => <NumericFormat value={info.getValue()} unit={1e-2} suffix="%" />,
          footer: () => <NumericFormat value={footer?.revenueGradient} unit={1e-2} suffix="%" />,
        }),
      ],
    }),
    columnHelper.group({
      id: nanoid(),
      header: () => <span>Water Consumption per Billion NTD</span>,
      columns: [
        columnHelper.accessor('billiRevenueCompareYear', {
          header: () => <span>{lastYear}</span>,
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.billiRevenueCompareYear} />,
        }),
        columnHelper.accessor('billiRevenueCurrentYear', {
          header: () => <span>{currYear}</span>,
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.billiRevenueCurrentYear} />,
        }),
        columnHelper.accessor('billiRevenueGradient', {
          header: () => <span>Gap *</span>,
          cell: (info) => <NumericFormat value={info.getValue()} unit={1e-2} suffix="%" />,
          footer: () => <NumericFormat value={footer?.billiRevenueGradient} unit={1e-2} suffix="%" />,
        }),
      ],
    }),
    columnHelper.group({
      id: nanoid(),
      header: () => <span>Compared to Baseline</span>,
      columns: [
        columnHelper.accessor('compareBaseYear', {
          header: () => <span>{BASE_YEAR}</span>,
          cell: (info) => <NumericFormat value={info.getValue()} />,
          footer: () => <NumericFormat value={footer?.compareBaseYear} />,
        }),
        columnHelper.accessor('compareBaseGradient', {
          header: () => <span>{currYear}</span>,
          cell: (info) => <NumericFormat value={info.getValue()} unit={1e-2} suffix="%" />,
          footer: () => <NumericFormat value={footer?.compareBaseGradient} unit={1e-2} suffix="%" />,
        }),
      ],
    }),
  ]
}
