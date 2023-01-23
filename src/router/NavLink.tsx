'use client'

import { useMemo, useContext, useCallback } from 'react'

import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'
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
  const segments = useSelectedLayoutSegments()
  const nextSegments = `/${segments.join('/')}`

  const isActive = useMemo(() => {
    const pathname = typeof href === 'string' ? href : href.pathname

    return hrefAlias
      ? pathname?.endsWith(nextSegments) || hrefAlias.endsWith(nextSegments)
      : !!pathname?.endsWith(nextSegments)
  }, [nextSegments, href, hrefAlias])

  const startChange = useContext(RouterContext)

  const isSameSearch = useCallback((href: UrlObject, search: string) => {
    if (typeof href.query === 'object' && href.query !== null) {
      return qs.stringify(href.query).slice(1) === qs.stringify(qs.parse(search)).slice(1)
    }

    return qs.stringify(qs.parse(href.search ?? '')).slice(1) === qs.stringify(qs.parse(search)).slice(1)
  }, [])

  const isSameUrl = useCallback(() => {
    const { pathname, search, hash } = window.location
    if (typeof href === 'string') return href === `${pathname}${search}${hash}`

    return pathname === href.pathname && isSameSearch(href, search) && hash === (href.hash ?? '')
  }, [href, isSameSearch])

  return (
    <Link
      {...props}
      href={href}
      className={typeof className === 'function' ? className({ isActive }) : className}
      onClick={(e) => {
        props.onClick?.(e)
        startChange(!isSameUrl())
      }}
    >
      {typeof children === 'function' ? children({ isActive }) : children}
    </Link>
  )
}
