'use client'

import { useState } from 'react'

import { useSearchParams } from 'next/navigation'

import LinkButton from '@/components/button/LinkButton'
import DimensionSelect from '@/ui/DimensionSelect'
import { YearSelect } from '@/ui/YearSelect'

export default function HistorySearch({ year }: { year: number }) {
  const searchParams = useSearchParams()
  const _year = searchParams.get('year') || String(year)
  const dimension = searchParams.get('dimension')
  const [query, setQuery] = useState(() => ({ dimension, year: _year }))

  return (
    <div className="flex items-center space-x-8 self-center">
      <YearSelect
        year={year}
        selectedYear={_year}
        onChange={(option) => setQuery((query) => ({ ...query, year: option.key }))}
      />
      <DimensionSelect
        selectedDimension={dimension}
        onChange={(option) => setQuery((query) => ({ ...query, dimension: option.key }))}
      />
      <LinkButton onClick={() => console.log({ query })}>Search</LinkButton>
    </div>
  )
}
