import { useMemo, useState } from 'react'

import {
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react'

import type { TooltipOptions } from './types'

export function useTooltip({
  defaultOpen = false,
  placement = 'top',
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: TooltipOptions) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen)
  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = setControlledOpen ?? setUncontrolledOpen
  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({
        fallbackAxisSideDirection: 'start',
        crossAxis: placement.includes('-'),
      }),
      shift({ padding: 5 }),
    ],
  })

  const context = data.context
  const hover = useHover(context, {
    move: false,
    enabled: controlledOpen == null,
  })

  const focus = useFocus(context, {
    enabled: controlledOpen == null,
  })

  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'tooltip' })
  const interactions = useInteractions([hover, focus, dismiss, role])

  return useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
    }),
    [open, setOpen, interactions, data],
  )
}
