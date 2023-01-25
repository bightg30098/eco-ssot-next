import { twMerge } from 'tailwind-merge'

import NavLink from '@/router/NavLink'

import type { LinkProps } from 'next/link'

type Props = {
  children: React.ReactNode
  className?: string
} & LinkProps

export default function LinkButton({ children, className, href, onClick = () => {}, ...props }: Props) {
  return (
    <NavLink
      href={href}
      className={twMerge(
        'inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-gray-50 underline-offset-2 shadow-sm hover:bg-primary-700 hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-gray-900',
        className,
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </NavLink>
  )
}
