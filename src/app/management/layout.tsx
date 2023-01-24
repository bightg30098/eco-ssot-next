import Sidebar from './Sidebar'

export default function ManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grow overflow-auto p-4">
      <div className="grid h-full w-full grid-cols-8 grid-rows-2 gap-4">
        <Sidebar />
        {children}
      </div>
    </main>
  )
}
