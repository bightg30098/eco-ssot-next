'use client'

import { useMemo } from 'react'

import { NumericFormat as NF, PatternFormat as PF } from 'react-number-format'

import type { NumericFormatProps as NFProps, PatternFormatProps as PFProps } from 'react-number-format'

export type NumericFormatProps = {
  precision?: number
  unit?: number
} & NFProps

export type PatternFormatProps = {
  precision?: number
  unit?: number
} & PFProps

export function NumericFormat({
  value,
  className,
  displayType = 'text',
  precision = 0,
  unit = 1,
  defaultValue = '-',
  thousandSeparator = ',',
  ...props
}: NumericFormatProps) {
  const nextValue = useMemo(() => {
    const v = Number(value) / unit
    if (Number.isNaN(v) || !Number.isFinite(v)) return defaultValue

    return v
  }, [value, unit, defaultValue])

  return (
    <NF
      displayType={displayType}
      decimalScale={precision}
      defaultValue={defaultValue}
      value={nextValue}
      thousandSeparator={thousandSeparator}
      className={className}
      {...props}
    />
  )
}

export function PatternFormat({ displayType = 'text', ...props }: PatternFormatProps) {
  return <PF displayType={displayType} {...props} />
}
