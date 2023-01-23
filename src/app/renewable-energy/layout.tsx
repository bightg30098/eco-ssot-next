import TablePage from '@/app/TablePage'
import TablePageLayout from '@/ui/TablePageLayout'

export default function RenewableEnergyLayout({ children }: { children: React.ReactNode }) {
  return (
    <TablePage title="Renewable Energy">
      <TablePageLayout>{children}</TablePageLayout>
    </TablePage>
  )
}
