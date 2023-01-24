'use client'

import { useMemo } from 'react'

import clsx from 'clsx'

import Button from '@/components/button/Button'
import NavLink from '@/router/NavLink'

import { routes } from './routes'

export default function Sidebar() {
  const _routes = useMemo(() => routes(), [])

  return (
    <aside className="col-span-1 row-span-2 flex flex-col rounded bg-primary-900 py-4 shadow">
      <div className="mx-4 space-y-2 border-b border-b-gray-500 px-1 pb-4">
        <p className="text-primary-600">Username</p>
        <div>Whoever</div>
      </div>
      <div className="mx-4 space-y-2 border-b border-b-gray-500 px-1 py-4">
        <p className="text-primary-600">ID</p>
        <div>3345678</div>
      </div>
      <div className="mx-4 space-y-2 border-b border-b-gray-500 px-1 py-4">
        <p className="text-primary-600">Permission</p>
        <div>management / dev / normal</div>
      </div>
      <nav className="grow overflow-auto py-4">
        <ul className="space-y-1 ">
          {_routes.map((route) => (
            <li key={route.id} className="flex w-full">
              <NavLink
                href={`/management/${route.path}`}
                className={({ isActive }) =>
                  clsx(
                    'w-inherit border-l-4 py-2 px-3',
                    isActive ? 'border-l-primary-600 bg-primary-50/10' : 'border-l-transparent',
                  )
                }
                {...(route.pathAlias !== undefined && { hrefAlias: `/management${route.pathAlias}` })}
              >
                {({ isActive }) => <span className={clsx(isActive && 'font-medium')}>{route.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mx-4 border-t border-t-gray-500 px-1 pt-4 text-center">
        <Button>Logout</Button>
      </div>
    </aside>
  )
}
