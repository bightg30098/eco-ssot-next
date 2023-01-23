import { useState } from 'react'

import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

type ButtonGroupOption = {
  key: string
  value: string
  alias?: string
}

type ButtonGroupProps = {
  className?: string
  options: ButtonGroupOption[]
  defaultSelectFirst?: boolean
  selected?: ButtonGroupOption
  by?: keyof ButtonGroupOption
  onChange?: (option: ButtonGroupOption) => void
}

export default function ButtonGroup({
  className,
  defaultSelectFirst = true,
  options = [],
  by = 'key',
  selected = defaultSelectFirst ? options[0] : undefined,
  onChange = () => {},
}: ButtonGroupProps) {
  const [_selected, setSelected] = useState<ButtonGroupOption | undefined>(() => selected)

  return (
    <span className={twMerge('isolate inline-flex rounded-md shadow-sm', className)}>
      {options.map((option, i) => (
        <button
          key={option.key}
          type="button"
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
        </button>
      ))}
    </span>
  )
}
