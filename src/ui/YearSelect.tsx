'use client'

import { useCallback, useMemo } from 'react'

import Select from '@/components/select/Select'

import type { SelectProps } from '@/components/select/Select'

const MIN_YEAR = 2020

export function YearSelect({
  year,
  selectedYear,
  ...props
}: { year: number; selectedYear: string | null } & SelectProps) {
  const options = useMemo(
    () => Array.from({ length: year - MIN_YEAR + 1 }, (_, i) => ({ key: String(year - i), value: String(year - i) })),
    [year],
  )

  const getSelected = useCallback(
    () => options.find((option) => option.key === selectedYear) || options[0],
    [options, selectedYear],
  )

  return <Select id="year-select" label="Year: " options={options} {...props} selected={getSelected()} />
}
