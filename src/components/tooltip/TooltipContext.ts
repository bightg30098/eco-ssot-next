import { createContext, useContext } from 'react'

import type { TooltipContextType } from './types'

export const TooltipContext = createContext<TooltipContextType>(null)

export const useTooltipContext = () => {
  const context = useContext(TooltipContext)

  if (context == null) {
    throw new Error('Tooltip components must be wrapped in <Tooltip />')
  }

  return context
}
