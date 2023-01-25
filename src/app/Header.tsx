import Logo from '@/components/logo/Logo'
import NavLink from '@/router/NavLink'

import NavList from './NavList'

export default function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center space-x-4 divide-x divide-gray-500 bg-primary-800 px-4 shadow-lg">
      <NavLink href="/" className="inline-flex items-center space-x-2">
        <Logo />
        <span className="text-lg font-semibold">ECO SSOT NEXT</span>
        <span className="text-sm text-gray-300">v4.1.0</span>
      </NavLink>
      <NavList />
    </header>
  )
}
