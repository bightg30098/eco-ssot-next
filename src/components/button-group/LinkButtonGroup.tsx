'use client'

import React, { useState } from 'react'

import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import NavLink from '@/app/NavLink'

type LinkButtonGroupOption = {
  key: string
  value: string
  alias?: string
  href: string
}

type LinkButtonGroupProps = {
  className?: string
  options: LinkButtonGroupOption[]
  defaultSelectFirst?: boolean
  selected?: LinkButtonGroupOption
  by?: keyof LinkButtonGroupOption
  onChange?: (option: LinkButtonGroupOption) => void
}

export default function LinkButtonGroup({
  className,
  defaultSelectFirst = true,
  options = [],
  by = 'key',
  selected = defaultSelectFirst ? options[0] : undefined,
  onChange = () => {},
}: LinkButtonGroupProps) {
  const [_selected, setSelected] = useState<LinkButtonGroupOption | undefined>(() => selected)

  return (
    <span className={twMerge('isolate inline-flex rounded-md shadow-sm', className)}>
      {options.map((option, i) => (
        <NavLink
          key={option.key}
          href={option.href}
          className={clsx(
            'relative inline-flex items-center border border-primary-800 px-4 py-2 focus:z-10 focus:border-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-600',
            i === 0 && 'rounded-l-md',
            i > 0 && '-ml-px',
            i === options.length - 1 && 'rounded-r-md',
            _selected?.[by] === option[by]
              ? 'bg-primary-800 font-medium text-primary-50'
              : 'bg-primary-900 text-gray-50',
          )}
          onClick={() => {
            setSelected(option)
            onChange(option)
          }}
        >
          {option.alias ?? option.value}
        </NavLink>
      ))}
    </span>
  )
}
