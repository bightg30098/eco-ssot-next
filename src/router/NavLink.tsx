'use client'

import { useMemo, useContext } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import qs from 'query-string'

import RouterContext from './RouterContext'

import type { LinkProps } from 'next/link'
import type { UrlObject } from 'url'

type Props = {
  hrefAlias?: string
  className?: string | ((props: { isActive: boolean }) => string)
  children?: React.ReactNode | ((props: { isActive: boolean }) => React.ReactNode)
}

export default function NavLink({ children, href, hrefAlias, className, ...props }: Props & LinkProps) {
  const pathname = usePathname()

  const isActive = useMemo(() => {
    const _pathname = typeof href === 'string' ? href : href.pathname ?? '/'

    if (hrefAlias) return hrefAlias === pathname || !!pathname?.startsWith(_pathname)

    return !!pathname?.startsWith(_pathname)
  }, [pathname, href, hrefAlias])

  const startChange = useContext(RouterContext)

  const isSameSearch = (href: UrlObject, search: string) => {
    if (typeof href.query === 'object' && href.query !== null) {
      return qs.stringify(href.query).slice(1) === qs.stringify(qs.parse(search)).slice(1)
    }

    return qs.stringify(qs.parse(href.search ?? '')).slice(1) === qs.stringify(qs.parse(search)).slice(1)
  }

  const isSameUrl = () => {
    const { pathname, search, hash } = window.location
    if (typeof href === 'string') return href === `${pathname}${search}${hash}`

    return pathname === href.pathname && isSameSearch(href, search) && hash === (href.hash ?? '')
  }

  return (
    <Link
      {...props}
      href={href}
      className={typeof className === 'function' ? className({ isActive }) : className}
      {...(!props.legacyBehavior && {
        onClick: (e) => {
          props.onClick?.(e)
          startChange(!isSameUrl())
        },
      })}
    >
      {typeof children === 'function' ? children({ isActive }) : children}
    </Link>
  )
}
