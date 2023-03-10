'use client'

import { useMemo } from 'react'

import clsx from 'clsx'

import NavLink from '@/router/NavLink'

import { routes } from './routes'

export default function NavList() {
  const _routes = useMemo(() => routes(), [])

  return (
    <nav className="px-4">
      <ul className="flex space-x-2">
        {_routes.map(({ path, pathAlias, label }) => (
          <NavLink
            href={path}
            hrefAlias={pathAlias}
            key={path}
            className={({ isActive }) => clsx(isActive ? 'text-gray-50' : 'text-gray-200 hover:text-gray-100')}
          >
            {({ isActive }) => (
              <span
                className={clsx(
                  'border-b-2 px-1 pb-1 text-lg font-medium text-current',
                  isActive ? ' border-b-primary-600' : 'border-b-transparent',
                )}
              >
                {label}
              </span>
            )}
          </NavLink>
        ))}
      </ul>
    </nav>
  )
}
