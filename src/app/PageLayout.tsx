type Props = {
  title?: string
  children?: React.ReactNode
}

export default function PageLayout({ title, children }: Props) {
  return (
    <main className="grow overflow-auto p-4">
      <div className="flex h-full w-full flex-col space-y-4 rounded bg-primary-900 p-4 shadow">
        <h1 className="shrink-0 text-xl font-medium">{title}</h1>
        {children}
      </div>
    </main>
  )
}
