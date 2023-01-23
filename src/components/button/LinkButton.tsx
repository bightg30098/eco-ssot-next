type Props = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLButtonElement>

export default function LinkButton({ children, ...props }: Props) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  )
}
