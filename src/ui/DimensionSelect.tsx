'use client'

import { useCallback } from 'react'

import Select from '@/components/select/Select'

import type { SelectProps } from '@/components/select/Select'

const OPTIONS = [
  { key: 'all', value: 'ALL' },
  { key: 'site', value: 'By Site' },
  { key: 'plant', value: 'By Plant' },
]

export default function DimensionSelect({
  selectedDimension,
  ...props
}: { selectedDimension: string | null } & SelectProps) {
  const getSelectedDimension = useCallback(
    () => OPTIONS.find((option) => option.key === selectedDimension) || OPTIONS[0],
    [selectedDimension],
  )

  return (
    <Select id="dimension-select" label="Dimension: " options={OPTIONS} selected={getSelectedDimension()} {...props} />
  )
}
