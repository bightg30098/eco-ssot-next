import { cloneElement, forwardRef, isValidElement } from 'react'

import { useMergeRefs } from '@floating-ui/react'

import { useTooltipContext } from './TooltipContext'

const TooltipTrigger = forwardRef<
  HTMLElement,
  React.HTMLProps<HTMLElement> & {
    children?: React.ReactNode
  }
>(({ children, ...props }, propRef) => {
  const context = useTooltipContext()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const childrenRef = (children as any)?.ref
  const ref = useMergeRefs([context.refs.setReference, propRef, ...(childrenRef ? [childrenRef] : [])])

  if (isValidElement(children)) {
    return cloneElement(
      children,
      context.getReferenceProps({
        ref,
        ...props,
        ...children.props,
      }),
    )
  }

  return (
    <span ref={ref} {...context.getReferenceProps(props)}>
      {children}
    </span>
  )
})

export default TooltipTrigger
