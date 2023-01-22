import { forwardRef } from 'react'

import { FloatingPortal, useMergeRefs } from '@floating-ui/react'

import { useTooltipContext } from './TooltipContext'

export const TooltipContent = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>((props, propRef) => {
  const context = useTooltipContext()
  const ref = useMergeRefs([context.refs.setFloating, propRef])

  return (
    <FloatingPortal>
      {context.open && (
        <div
          ref={ref}
          className="z-50"
          style={{
            position: context.strategy,
            top: context.y ?? 0,
            left: context.x ?? 0,
            visibility: context.x == null ? 'hidden' : 'visible',
            ...props.style,
          }}
          {...context.getFloatingProps(props)}
        />
      )}
    </FloatingPortal>
  )
})

export default TooltipContent
