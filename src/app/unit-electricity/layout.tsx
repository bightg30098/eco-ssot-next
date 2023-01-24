import TablePage from '@/app/TablePage'
import TablePageLayout from '@/ui/TablePageLayout'

export default function UnitElectricityLayout({ children }: { children: React.ReactNode }) {
  return (
    <TablePage title="Equivalent Electricity Consumption per Product">
      <TablePageLayout>{children}</TablePageLayout>
    </TablePage>
  )
}
