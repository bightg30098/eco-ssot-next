'use client'

import { useMemo } from 'react'

import { NumericFormat as _NumericFormat, PatternFormat as _PatternFormat } from 'react-number-format'

import type { NumericFormatProps as _NumericFormatProps, PatternFormatProps as _PFProps } from 'react-number-format'

export type NumericFormatProps = {
  precision?: number
  unit?: number
} & _NumericFormatProps

export type PatternFormatProps = {
  precision?: number
  unit?: number
} & _PFProps

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
    <_NumericFormat
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
  return <_PatternFormat displayType={displayType} {...props} />
}
