import { twMerge } from 'tailwind-merge'

type Props = {
  children?: React.ReactNode
  className?: string
}

export default function DummyDiv({ children, className }: Props) {
  return <div className={twMerge('min-w-16 max-w-32', className)}>{children}</div>
}
