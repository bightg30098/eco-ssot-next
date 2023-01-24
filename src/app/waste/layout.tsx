import PageLayout from '@/app/PageLayout'
import TablePageLayout from '@/ui/TablePageLayout'

export default function WasteLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout title="Waste">
      <TablePageLayout>{children}</TablePageLayout>
    </PageLayout>
  )
}
