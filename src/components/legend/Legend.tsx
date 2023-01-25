import clsx from 'clsx'

type Props = {
  children?: React.ReactNode
  className?: string
  variant?: keyof typeof variants
}

const variants = {
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  error: 'bg-red-500',
  info: 'bg-blue-500',
  none: 'bg-gray-50',
} as const

export default function Legend({ children, className, variant = 'none' }: Props) {
  return (
    <div className="inline-flex items-center space-x-2">
      <div className={`inline-block h-2.5 w-2.5 shrink-0 rounded-full ${variants[variant]}`}></div>
      <div className={clsx(className)}>{children}</div>
    </div>
  )
}
