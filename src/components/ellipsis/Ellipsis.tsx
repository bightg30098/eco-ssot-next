'use client'

import { useState, useRef, useLayoutEffect } from 'react'

import Tooltip from '../tooltip/Tooltip'

type Props = {
  label?: string
  className?: string
}

export default function Ellipsis({ label, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [isTruncated, setIsTruncated] = useState<boolean>(() => false)

  useLayoutEffect(() => {
    if (ref.current !== null) {
      setIsTruncated(ref.current.scrollWidth > ref.current.clientWidth)
    }
  }, [label])

  return (
    <Tooltip render={isTruncated ? label : null}>
      <span className="block truncate" ref={ref}>
        <span className={className}>{label}</span>
      </span>
    </Tooltip>
  )
}
