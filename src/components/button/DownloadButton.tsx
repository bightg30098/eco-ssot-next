'use client'

import { twMerge } from 'tailwind-merge'

type Props = {
  children?: React.ReactNode
  className?: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export default function DownloadButton({
  children,
  className,
  href,
  target = '_blank',
  download = true,
  rel = 'noopener noreferrer',
  ...props
}: Props) {
  return (
    <a
      download={download}
      target={target}
      rel={rel}
      href={href}
      className={twMerge(
        'inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-gray-50 underline-offset-2 shadow-sm hover:bg-primary-700 hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-gray-900',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
