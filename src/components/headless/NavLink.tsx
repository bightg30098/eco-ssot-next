'use client'

import { useMemo } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import type { LinkProps } from 'next/link'

type Props = {
  href: string
  hrefAlias?: string
  className?: string | ((props: { isActive: boolean }) => string)
  children?: React.ReactNode | ((props: { isActive: boolean }) => React.ReactNode)
}

export default function NavLink({ children, href, hrefAlias, className, ...rest }: Props & LinkProps) {
  const pathname = usePathname()
  const isActive = useMemo(
    () => (hrefAlias ? pathname === href || pathname === hrefAlias : pathname === href),
    [pathname, href, hrefAlias],
  )

  return (
    <Link {...rest} href={href} className={typeof className === 'function' ? className({ isActive }) : className}>
      {typeof children === 'function' ? children({ isActive }) : children}
    </Link>
  )
}
