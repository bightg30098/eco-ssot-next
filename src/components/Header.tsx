import NavLink from '@/headless/NavLink'

import Logo from './Logo'
import Navbar from './Navbar'

export default function Header() {
  return (
    <div className="flex h-16 items-center space-x-4 divide-x divide-gray-500 bg-primary-800 px-4 shadow-lg">
      <NavLink href="/" className="inline-flex items-center space-x-2">
        <Logo />
        <div className="text-lg font-medium">環境保護績效平台</div>
        <div className="text-sm text-gray-300">v4.1.0</div>
      </NavLink>
      <Navbar />
    </div>
  )
}
