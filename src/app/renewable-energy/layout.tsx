import PageLayout from '../PageLayout'
import TablePageLayout from '../TablePageLayout'

export default function RenewableEnergyLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout title="Renewable Energy">
      <TablePageLayout>{children}</TablePageLayout>
    </PageLayout>
  )
}
