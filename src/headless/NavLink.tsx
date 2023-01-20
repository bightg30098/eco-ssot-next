'use client'

import { useMemo, useContext } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import RouterContext from '@/router/RouterContext'

import type { LinkProps } from 'next/link'

type Props = {
  href: string
  hrefAlias?: string
  className?: string | ((props: { isActive: boolean }) => string)
  children?: React.ReactNode | ((props: { isActive: boolean }) => React.ReactNode)
}

export default function NavLink({ children, href, hrefAlias, className, ...props }: Props & LinkProps) {
  const pathname = usePathname()
  const isActive = useMemo(
    () => (hrefAlias ? pathname === href || pathname === hrefAlias : pathname === href),
    [pathname, href, hrefAlias],
  )

  const startChange = useContext(RouterContext)
  return (
    <Link
      {...props}
      href={href}
      className={typeof className === 'function' ? className({ isActive }) : className}
      onClick={(e) => {
        props.onClick?.(e)
        if (href !== `${window.location.pathname}${window.location.search}${window.location.hash}`) {
          startChange()
        }
      }}
    >
      {typeof children === 'function' ? children({ isActive }) : children}
    </Link>
  )
}
