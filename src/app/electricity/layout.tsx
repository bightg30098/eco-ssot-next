import TablePage from '@/app/TablePage'
import TablePageLayout from '@/ui/TablePageLayout'

export default function ElectricityLayout({ children }: { children: React.ReactNode }) {
  return (
    <TablePage title="Electricity">
      <TablePageLayout>{children}</TablePageLayout>
    </TablePage>
  )
}
