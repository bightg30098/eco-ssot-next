import { ChevronRightIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

import type { CellContext } from '@tanstack/react-table'

export default function ExpandCell(props?: { className?: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function Context<T>({ row }: CellContext<T, any>) {
    if (row.getCanExpand()) {
      return (
        <div className={clsx('flex items-center justify-center', props?.className)}>
          <button onClick={row.getToggleExpandedHandler()}>
            <ChevronRightIcon className={clsx('h-5 w-5', row.getIsExpanded() && 'rotate-90')} />
          </button>
        </div>
      )
    }

    return null
  }
}
