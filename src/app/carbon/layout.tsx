import PageLayout from '../PageLayout'
import TablePageLayout from '../TablePageLayout'

export default function CarbonLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout title="Carbon Emission">
      <TablePageLayout>{children}</TablePageLayout>
    </PageLayout>
  )
}
