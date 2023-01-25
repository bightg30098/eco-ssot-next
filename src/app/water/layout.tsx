import PageLayout from '../PageLayout'
import TablePageLayout from '../TablePageLayout'

export default function WaterLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout title="Water Consumption per Billion NTD">
      <TablePageLayout>{children}</TablePageLayout>
    </PageLayout>
  )
}
