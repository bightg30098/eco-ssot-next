import PageLayout from '@/app/PageLayout'
import TablePageLayout from '@/ui/TablePageLayout'

export default function RenewableEnergyLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout title="Renewable Energy">
      <TablePageLayout>{children}</TablePageLayout>
    </PageLayout>
  )
}
