'use client'

import clsx from 'clsx'

import NavLink from '../headless/NavLink'

const ROUTES = [
  { href: '/home', label: '首頁', hrefAlias: '/' },
  { href: '/overview', label: '總覽比較' },
  { href: '/carbon', label: '碳排放量' },
  { href: '/renewable-energy', label: '可再生能源' },
  { href: '/electricity', label: '用電' },
  { href: '/analysis/electricity', label: '用電分析' },
  { href: '/water', label: '用水' },
  { href: '/unit-electricity', label: '約當單台用電' },
  { href: '/waste', label: '廢棄物' },
  { href: '/air-compressor', label: '空壓設備' },
  { href: '/decarbonization', label: '脫碳目標' },
  { href: '/management', label: '後台設定' },
]

export default function Navbar() {
  return (
    <nav>
      <ul className="flex space-x-4">
        {ROUTES.map(({ href, hrefAlias, label }) => (
          <NavLink
            href={href}
            hrefAlias={hrefAlias}
            key={href}
            className={({ isActive }) => clsx(isActive ? 'text-gray-50' : 'text-gray-200 hover:text-gray-100')}
          >
            {({ isActive }) => (
              <>
                <span
                  className={clsx(
                    'border-b-2 px-1 pb-1 text-lg font-medium text-current transition-colors duration-200',
                    isActive ? ' border-b-primary-600' : 'border-b-transparent',
                  )}
                >
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </ul>
    </nav>
  )
}
