import PageLayout from '@/app/PageLayout'
import TablePageLayout from '@/ui/TablePageLayout'

export default function OverviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout title="Electricity, Water, Revenue, and ASP">
      <TablePageLayout>{children}</TablePageLayout>
    </PageLayout>
  )
}
