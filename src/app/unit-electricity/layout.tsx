import PageLayout from '../PageLayout'
import TablePageLayout from '../TablePageLayout'

export default function UnitElectricityLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout title="Equivalent Electricity Consumption per Product">
      <TablePageLayout>{children}</TablePageLayout>
    </PageLayout>
  )
}
