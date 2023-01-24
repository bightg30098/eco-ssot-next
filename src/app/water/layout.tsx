import TablePage from '@/app/TablePage'
import TablePageLayout from '@/ui/TablePageLayout'

export default function WaterLayout({ children }: { children: React.ReactNode }) {
  return (
    <TablePage title="Water Consumption per Billion NTD">
      <TablePageLayout>{children}</TablePageLayout>
    </TablePage>
  )
}
