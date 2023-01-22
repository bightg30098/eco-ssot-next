import type { useTooltip } from './useTooltip'
import type { Placement } from '@floating-ui/react'

export type TooltipOptions = {
  defaultOpen?: boolean
  placement?: Placement
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export type TooltipContextType = ReturnType<typeof useTooltip> | null

export type TooltipProps = {
  children?: React.ReactNode | ((context: TooltipContextType) => React.ReactNode)
  render?: React.ReactNode | ((context: TooltipContextType) => React.ReactNode)
} & TooltipOptions
