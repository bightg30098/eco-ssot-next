import PageLayout from '@/app/PageLayout'
import TablePageLayout from '@/ui/TablePageLayout'

export default function CarbonLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout title="Carbon Emission">
      <TablePageLayout>{children}</TablePageLayout>
    </PageLayout>
  )
}
