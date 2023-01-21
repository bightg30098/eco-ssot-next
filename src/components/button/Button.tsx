type Props = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLButtonElement>

export default function Button({ children, ...props }: Props) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  )
}
