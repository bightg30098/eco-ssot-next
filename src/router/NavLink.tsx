'use client'

import { useMemo, useContext } from 'react'

import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

import RouterContext from './RouterContext'

import type { LinkProps } from 'next/link'

type Props = {
  href: string
  hrefAlias?: string
  className?: string | ((props: { isActive: boolean }) => string)
  children?: React.ReactNode | ((props: { isActive: boolean }) => React.ReactNode)
}

export default function NavLink({ children, href, hrefAlias, className, ...props }: Props & LinkProps) {
  const segments = useSelectedLayoutSegments()
  const nextSegments = `/${segments.join('/')}`

  const isActive = useMemo(
    () => (hrefAlias ? href.endsWith(nextSegments) || hrefAlias.endsWith(nextSegments) : href.endsWith(nextSegments)),
    [nextSegments, href, hrefAlias],
  )

  const startChange = useContext(RouterContext)

  return (
    <Link
      {...props}
      href={href}
      className={typeof className === 'function' ? className({ isActive }) : className}
      onClick={(e) => {
        props.onClick?.(e)
        const { pathname, search, hash } = window.location
        startChange(href !== `${pathname}${search}${hash}`)
      }}
    >
      {typeof children === 'function' ? children({ isActive }) : children}
    </Link>
  )
}
