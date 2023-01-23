'use client'

import { useMemo } from 'react'

import Select from '@/components/select/Select'

const MIN_YEAR = 2020

export function YearSelect({ year }: { year: number }) {
  const options = useMemo(
    () => Array.from({ length: year - MIN_YEAR + 1 }, (_, i) => ({ key: String(year - i), value: String(year - i) })),
    [year],
  )

  return <Select label="Year: " options={options} />
}
