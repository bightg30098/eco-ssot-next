type Props = {
  title?: string
  children?: React.ReactNode
}

export default function TablePage({ title, children }: Props) {
  return (
    <main className="grow p-4">
      <div className="flex h-full w-full flex-col rounded bg-primary-900 p-4 shadow">
        <p className="text-xl font-medium">{title}</p>
      </div>
      {children}
    </main>
  )
}
