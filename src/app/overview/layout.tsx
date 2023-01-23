import TablePage from '@/app/TablePage'
import TablePageLayout from '@/ui/TablePageLayout'

export default function OverviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <TablePage title="Overview">
      <TablePageLayout>{children}</TablePageLayout>
    </TablePage>
  )
}
