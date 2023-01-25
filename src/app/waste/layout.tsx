import PageLayout from '../PageLayout'
import TablePageLayout from '../TablePageLayout'

export default function WasteLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout title="Waste">
      <TablePageLayout>{children}</TablePageLayout>
    </PageLayout>
  )
}
