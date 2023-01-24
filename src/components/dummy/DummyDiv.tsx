import { twMerge } from 'tailwind-merge'

type Props = {
  children?: React.ReactNode
  className?: string
}

export default function DummyDiv({ children, className }: Props) {
  return <div className={twMerge(className)}>{children}</div>
}
