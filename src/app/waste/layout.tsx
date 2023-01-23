import TablePage from '@/app/TablePage'
import TablePageLayout from '@/ui/TablePageLayout'

export default function WasteLayout({ children }: { children: React.ReactNode }) {
  return (
    <TablePage title="Waste">
      <TablePageLayout>{children}</TablePageLayout>
    </TablePage>
  )
}
