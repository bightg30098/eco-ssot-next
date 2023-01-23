'use client'

import { useCallback, useMemo, useState } from 'react'

import { usePathname, useSearchParams } from 'next/navigation'

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
    <div className="flex items-center justify-between">
      <DummyDiv />
      <div className="inline-flex items-center space-x-8">
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
      <LinkButton href={`${pathname}`} passHref legacyBehavior>
        Excel
      </LinkButton>
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
