'use client'

import { Fragment, useCallback } from 'react'

import { autoUpdate, flip, offset, useFloating } from '@floating-ui/react'
import { Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { useSelect } from 'downshift'
import { nanoid } from 'nanoid'
import { twMerge } from 'tailwind-merge'

import OverlayScrollbarsComponent from '@/lib/overlayscrollbars-react'

import Ellipsis from '../ellipsis/Ellipsis'

import type { Placement, Strategy } from '@floating-ui/react'

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
  placement?: Placement
  strategy?: Strategy
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
  placement = 'bottom',
  strategy = 'absolute',
  onChange = () => {},
}: SelectProps) {
  const itemToString = useCallback((item: SelectOption | null) => item?.[by] || '', [by])
  const {
    x,
    y,
    refs,
    reference,
    floating,
    strategy: _strategy,
  } = useFloating({
    placement,
    strategy,
    whileElementsMounted: autoUpdate,
    middleware: [offset(5), flip({ padding: 10 })],
  })

  const { isOpen, selectedItem, highlightedIndex, getToggleButtonProps, getLabelProps, getMenuProps, getItemProps } =
    useSelect({
      id,
      itemToString,
      items: options,
      defaultSelectedItem: selected,
      onSelectedItemChange(changes) {
        if (changes.selectedItem) {
          onChange(changes.selectedItem)
        }
      },
    })

  return (
    <div className={twMerge('inline-flex items-center space-x-2', containerClassName)}>
      {label && (
        <label className={twMerge(labelClassName)} {...getLabelProps({ htmlFor: id })}>
          {label}
        </label>
      )}

      <div className={twMerge('inline-flex w-36 flex-col', className)}>
        <button
          className={twMerge(
            'flex items-center justify-between gap-4 rounded border border-gray-500 bg-transparent py-2 px-3 shadow-sm hover:border-primary-600 focus:border-primary-600 focus:outline-none',
            !isOpen && 'focus:ring-1 focus:ring-primary-600',
            triggerClassName,
          )}
          {...getToggleButtonProps({ id, ref: reference })}
        >
          <Ellipsis
            label={selectedItem ? selectedItem.value : placeholder}
            className={clsx(selectedItem ? 'font-medium' : 'text-gray-50/50')}
          />
          <ChevronDownIcon className={clsx('mx-2 h-5 w-5 shrink-0', isOpen && 'rotate-180')} />
        </button>

        <div {...getMenuProps()} className="relative z-20 w-inherit">
          <Transition
            show={isOpen}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            beforeLeave={() => (refs.reference.current as HTMLButtonElement)?.focus()}
          >
            <div
              ref={floating}
              className="w-inherit"
              style={{
                position: _strategy,
                top: y ?? 0,
                left: x ?? 0,
              }}
            >
              <OverlayScrollbarsComponent
                className={twMerge(
                  'max-h-80 overflow-auto rounded border border-gray-500 bg-primary-900 py-1 shadow-md',
                  panelClassName,
                )}
              >
                {options.map((item, index) => (
                  <div
                    className={clsx(
                      highlightedIndex === index && 'bg-primary-600',
                      selectedItem === item && 'font-medium',
                      'flex select-none items-center justify-between gap-4 px-3 py-2',
                    )}
                    key={`${item.key}${index}`}
                    {...getItemProps({ item, index })}
                  >
                    <Ellipsis label={item.value} />
                    {selectedItem === item && (
                      <CheckIcon
                        className={clsx(
                          'mx-2 h-5 w-5 shrink-0',
                          highlightedIndex === index ? 'text-gray-50' : 'text-primary-700',
                        )}
                      />
                    )}
                  </div>
                ))}
              </OverlayScrollbarsComponent>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  )
}
