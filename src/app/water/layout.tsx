import PageLayout from '@/app/PageLayout'
import TablePageLayout from '@/ui/TablePageLayout'

export default function WaterLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout title="Water Consumption per Billion NTD">
      <TablePageLayout>{children}</TablePageLayout>
    </PageLayout>
  )
}
