'use client'

import { useMemo, useState } from 'react'

import { ArrowSmallRightIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { usePathname, useSearchParams } from 'next/navigation'
import qs from 'query-string'

import DownloadButton from '@/components/button/DownloadButton'
import LinkButton from '@/components/button/LinkButton'
import DummyDiv from '@/components/dummy/DummyDiv'
import Select from '@/components/select/Select'

const MIN_YEAR = 2020

type Query = {
  year?: string
  startYear?: string
  endYear?: string
  startMonth?: string
  endMonth?: string
  monthType?: string
  dimension?: string
}

export default function HistorySearch({ year, downloadUrl }: { year: number; downloadUrl: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const startYear = searchParams.get('startYear')
  const endYear = searchParams.get('endYear')
  const startMonth = searchParams.get('startMonth')
  const endMonth = searchParams.get('endMonth')
  const monthType = searchParams.get('monthType')
  const dimension = searchParams.get('dimension')
  const startYearOptions = useMemo(() => YEAR_OPTIONS({ year }), [year])
  const endYearOptions = useMemo(() => YEAR_OPTIONS({ year }), [year])
  const startMonthOptions = useMemo(() => MONTH_OPTIONS(), [])
  const endMonthOptions = useMemo(() => MONTH_OPTIONS(), [])
  const monthTypeOptions = useMemo(() => MONTH_TYPE_OPTIONS(), [])
  const dimensionOptions = useMemo(() => DIMENSION_OPTIONS(), [])
  const [query, setQuery] = useState<Query>(() => ({}))
  const isSameYear = (query.startYear ?? startYearOptions.at(-1)?.key) === (query.endYear ?? endYearOptions[0]?.key)

  const getSelectedStartYear = () =>
    startYearOptions.find((option) => option.key === startYear) ?? startYearOptions.at(-1)

  const getSelectedEndYear = () => endYearOptions.find((option) => option.key === endYear) ?? endYearOptions[0]
  const getSelectedStartMonth = () =>
    startMonthOptions.find((option) => option.key === startMonth) ?? startMonthOptions[0]

  const getSelectedEndMonth = () => endMonthOptions.find((option) => option.key === endMonth) ?? endMonthOptions.at(-1)
  const getSelectedMonthType = () => monthTypeOptions.find((option) => option.key === monthType) ?? monthTypeOptions[0]
  const getSelectedDimension = () => dimensionOptions.find((option) => option.key === dimension) ?? dimensionOptions[0]

  const getQuery = () => ({
    startYear: query.startYear ?? startYearOptions.at(-1)?.key,
    endYear: query.endYear ?? endYearOptions[0]?.key,
    ...(isSameYear && {
      startMonth: query.startMonth ?? startMonthOptions[0]?.key,
    }),
    endMonth: query.endMonth ?? endMonthOptions.at(-1)?.key,
    monthType: query.monthType ?? monthTypeOptions[0]?.key,
    dimension: query.dimension ?? dimensionOptions[0]?.key,
  })

  return (
    <div className="grid grid-cols-8 gap-4">
      <DummyDiv className="col-span-1" />

      <div className="col-span-6 flex w-full items-center justify-center space-x-4">
        <div className="inline-flex items-center space-x-2">
          <Select
            className="w-32"
            id="start-year-select"
            label="Year : "
            options={startYearOptions}
            selected={getSelectedStartYear()}
            onChange={(option) => setQuery({ ...query, startYear: option.key })}
          />
          <Select
            className="w-32"
            id="end-year-select"
            label={<ArrowSmallRightIcon className="h-5 w-5" />}
            options={endYearOptions}
            selected={getSelectedEndYear()}
            onChange={(option) => setQuery({ ...query, endYear: option.key })}
          />
        </div>

        <div className="inline-flex items-center space-x-2">
          <Select
            id="month-type-select"
            containerClassName={clsx(isSameYear && 'hidden')}
            className="w-48"
            label="Month : "
            options={monthTypeOptions}
            selected={getSelectedMonthType()}
            onChange={(option) => setQuery({ ...query, monthType: option.key })}
          />
          <Select
            id="start-month-select"
            containerClassName={clsx(!isSameYear && 'hidden')}
            className="w-28"
            label="Month : "
            options={startMonthOptions}
            selected={getSelectedStartMonth()}
            onChange={(option) => setQuery({ ...query, startMonth: option.key })}
          />
          <Select
            id="end-month-select"
            className="w-28"
            options={endMonthOptions}
            selected={getSelectedEndMonth()}
            onChange={(option) => setQuery({ ...query, endMonth: option.key })}
          />
        </div>

        <Select
          id="dimension-select"
          label="Dimension : "
          options={dimensionOptions}
          selected={getSelectedDimension()}
          onChange={(option) => setQuery({ ...query, dimension: option.key })}
        />

        <LinkButton href={{ pathname, query: getQuery() }}>Search</LinkButton>
      </div>

      <div className="col-span-1 flex w-full items-center justify-end">
        <DownloadButton
          href={`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/${downloadUrl}/download/?${qs.stringify(query)}`}
        >
          Excel
        </DownloadButton>
      </div>
    </div>
  )
}

const YEAR_OPTIONS = ({ year }: { year: number }) =>
  Array.from({ length: year - MIN_YEAR + 1 }, (_, i) => ({
    key: String(year - i),
    value: String(year - i),
  }))

const MONTH_OPTIONS = () =>
  Array.from({ length: 12 }, (_, i) => ({
    key: String(i + 1),
    value: String(i + 1).padStart(2, '0'),
  }))

const MONTH_TYPE_OPTIONS = () => [
  { key: 'YTM', value: 'Year To Month' },
  { key: 'single', value: 'Single Month' },
]

const DIMENSION_OPTIONS = () => [
  { key: 'all', value: 'ALL' },
  { key: 'site', value: 'By Site' },
  { key: 'plant', value: 'By Plant' },
]
