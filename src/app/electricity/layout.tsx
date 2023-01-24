import PageLayout from '@/app/PageLayout'
import TablePageLayout from '@/ui/TablePageLayout'

export default function ElectricityLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout title="Electricity Consumption per Billion NTD">
      <TablePageLayout>{children}</TablePageLayout>
    </PageLayout>
  )
}
