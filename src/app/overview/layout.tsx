import PageLayout from '../PageLayout'
import TablePageLayout from '../TablePageLayout'

export default function OverviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout title="Electricity, Water, Revenue, and ASP">
      <TablePageLayout>{children}</TablePageLayout>
    </PageLayout>
  )
}
