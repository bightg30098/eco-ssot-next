import PageLayout from '@/app/PageLayout'
import TablePageLayout from '@/ui/TablePageLayout'

export default function UnitElectricityLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout title="Equivalent Electricity Consumption per Product">
      <TablePageLayout>{children}</TablePageLayout>
    </PageLayout>
  )
}
