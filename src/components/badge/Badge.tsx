import clsx from 'clsx'

type Props = {
  children?: React.ReactNode
  className?: string
  variant?: keyof typeof variants
}

const variants = {
  success: 'bg-green-900 text-green-50 border-green-600',
  warning: 'bg-yellow-900 text-yellow-50 border-yellow-600',
  error: 'bg-red-900 text-red-50 border-red-600',
  info: 'bg-blue-900 text-blue-50 border-blue-600',
} as const

export default function Badge({ children, className, variant = 'info' }: Props) {
  return <div className={clsx('inline-flex rounded border px-1', variants[variant], className)}>{children}</div>
}
