import TablePage from '@/app/TablePage'
import TablePageLayout from '@/ui/TablePageLayout'

export default function CarbonLayout({ children }: { children: React.ReactNode }) {
  return (
    <TablePage title="Carbon">
      <TablePageLayout>{children}</TablePageLayout>
    </TablePage>
  )
}
