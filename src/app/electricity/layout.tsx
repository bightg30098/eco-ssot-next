import PageLayout from '../PageLayout'
import TablePageLayout from '../TablePageLayout'

export default function ElectricityLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout title="Electricity Consumption per Billion NTD">
      <TablePageLayout>{children}</TablePageLayout>
    </PageLayout>
  )
}
