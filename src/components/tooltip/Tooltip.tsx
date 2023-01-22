'use client'

import TooltipContent from './TooltipContent'
import { TooltipContext } from './TooltipContext'
import TooltipTrigger from './TooltipTrigger'
import { useTooltip } from './useTooltip'

import type { TooltipProps } from './types'

export default function Tooltip({ children, render, ...options }: TooltipProps) {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const tooltip = useTooltip(options)

  return (
    <TooltipContext.Provider value={tooltip}>
      <TooltipTrigger>{typeof children === 'function' ? children(tooltip) : children}</TooltipTrigger>
      <TooltipContent>{typeof render === 'function' ? render(tooltip) : render}</TooltipContent>
    </TooltipContext.Provider>
  )
}
