'use client'

import { useCallback, useMemo, useState } from 'react'

import { usePathname, useSearchParams } from 'next/navigation'
import qs from 'query-string'

import DownloadButton from '@/components/button/DownloadButton'
import LinkButton from '@/components/button/LinkButton'
import DummyDiv from '@/components/dummy/DummyDiv'
import Select from '@/components/select/Select'

const MIN_YEAR = 2020

export default function HistorySearch({ year }: { year: number }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const _year = searchParams.get('year') || String(year)
  const dimension = searchParams.get('dimension')
  const yearOptions = useMemo(() => YEAR_OPTIONS({ year }), [year])
  const dimensionOptions = useMemo(() => DIMENSION_OPTIONS(), [])
  const [query, setQuery] = useState(() => ({ year: _year, dimension: dimension ?? dimensionOptions[0].key }))

  const getSelectedYear = useCallback(
    () => yearOptions.find((option) => option.key === _year) || yearOptions[0],
    [_year, yearOptions],
  )

  const getSelectedDimension = useCallback(
    () => dimensionOptions.find((option) => option.key === dimension) || dimensionOptions[0],
    [dimension, dimensionOptions],
  )

  return (
    <div className="grid grid-cols-4 gap-4">
      <DummyDiv className="col-span-1" />
      <div className="col-span-2 flex w-full items-center justify-center space-x-8">
        <Select
          id="year-select"
          label="Year : "
          options={yearOptions}
          selected={getSelectedYear()}
          onChange={(option) => setQuery({ ...query, year: option.key })}
        />
        <Select
          id="dimension-select"
          label="Dimension : "
          options={dimensionOptions}
          selected={getSelectedDimension()}
          onChange={(option) => setQuery({ ...query, dimension: option.key })}
        />
        <LinkButton href={{ pathname, query }}>Search</LinkButton>
      </div>
      <div className="col-span-1 flex w-full items-center justify-end">
        <DownloadButton href={`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/overall/download/?${qs.stringify(query)}`}>
          Excel
        </DownloadButton>
      </div>
    </div>
  )
}

const YEAR_OPTIONS = ({ year }: { year: number }) =>
  Array.from({ length: year - MIN_YEAR + 1 }, (_, i) => ({ key: String(year - i), value: String(year - i) }))

const DIMENSION_OPTIONS = () => [
  { key: 'all', value: 'ALL' },
  { key: 'site', value: 'By Site' },
  { key: 'plant', value: 'By Plant' },
]
