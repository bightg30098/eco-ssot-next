'use client'

import { useCallback, useRef } from 'react'

import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { useSelect } from 'downshift'
import { nanoid } from 'nanoid'
import { twMerge } from 'tailwind-merge'

import OverlayScrollbarsComponent from '@/lib/overlayscrollbars-react'

import Ellipsis from '../ellipsis/Ellipsis'

export type SelectProps = {
  options?: SelectOption[]
  containerClassName?: string
  labelClassName?: string
  triggerClassName?: string
  panelClassName?: string
  className?: string
  label?: string
  id?: string
  placeholder?: string
  by?: keyof SelectOption
  defaultSelectFirst?: boolean
  selected?: SelectOption
  onChange?: (selected: SelectOption) => void
}

export type SelectOption = {
  key: string
  value: string
  alias?: string
}

export default function Select({
  className,
  containerClassName,
  labelClassName,
  triggerClassName,
  panelClassName,
  label,
  id = nanoid(),
  placeholder = 'Select',
  by = 'key',
  defaultSelectFirst = true,
  options = [],
  selected = defaultSelectFirst ? options[0] : undefined,
  onChange = () => {},
}: SelectProps) {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const itemToString = useCallback((item: SelectOption | null) => item?.[by] || '', [by])
  const { isOpen, selectedItem, highlightedIndex, getToggleButtonProps, getLabelProps, getMenuProps, getItemProps } =
    useSelect({
      id,
      itemToString,
      items: options,
      defaultSelectedItem: selected,
      onIsOpenChange(changes) {
        if (!changes.isOpen) {
          triggerRef.current?.focus()
        }
      },
      onSelectedItemChange(changes) {
        if (changes.selectedItem) {
          onChange(changes.selectedItem)
        }
      },
    })

  return (
    <div className={twMerge(containerClassName)}>
      <div className={twMerge('flex items-center space-x-2', className)}>
        {label && (
          <label className={twMerge(labelClassName)} {...getLabelProps({ htmlFor: id })}>
            {label}
          </label>
        )}
        <button
          className={twMerge(
            'flex min-w-36 max-w-64 items-center justify-between gap-4 rounded border border-gray-500 bg-transparent py-2 px-3 shadow-sm hover:border-primary-600 focus:border-primary-600 focus:outline-none',
            !isOpen && 'focus:ring-1 focus:ring-primary-600',
            triggerClassName,
          )}
          {...getToggleButtonProps({ id, ref: triggerRef })}
        >
          <Ellipsis
            label={selectedItem ? selectedItem.value : placeholder}
            className={clsx(selectedItem ? 'font-medium' : 'text-gray-50/50')}
          />
          <ChevronDownIcon className={clsx('h-5 w-5', isOpen && 'rotate-180')} />
        </button>
      </div>

      <OverlayScrollbarsComponent
        element="ul"
        className={twMerge(
          'absolute mt-2 max-h-80 w-72 overflow-auto rounded border border-gray-500 bg-primary-900 py-1 shadow-md',
          isOpen ? 'z-20' : 'pointer-events-none -z-20 opacity-0',
          panelClassName,
        )}
        {...getMenuProps()}
      >
        {isOpen &&
          options.map((item, index) => (
            <li
              className={clsx(
                highlightedIndex === index && 'bg-primary-600',
                selectedItem === item && 'font-medium',
                'flex select-none items-center justify-between gap-4 px-3 py-2',
              )}
              key={`${item.key}${index}`}
              {...getItemProps({ item, index })}
            >
              <span>{item.value}</span>
              {selectedItem === item && (
                <CheckIcon
                  className={clsx(
                    'mx-2 h-5 w-5 shrink-0',
                    highlightedIndex === index ? 'text-gray-50' : 'text-primary-700',
                  )}
                />
              )}
            </li>
          ))}
      </OverlayScrollbarsComponent>
    </div>
  )
}
