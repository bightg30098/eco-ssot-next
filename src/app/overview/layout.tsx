import TablePage from '@/app/TablePage'
import TablePageLayout from '@/ui/TablePageLayout'

export default function OverviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <TablePage title="Electricity, Water, Revenue, and ASP">
      <TablePageLayout>{children}</TablePageLayout>
    </TablePage>
  )
}
