import HistorySearch from '../../HistorySearch'
import { getLatestDate } from '../../services'

export default async function WasteHistory({ searchParams }: { searchParams?: Record<string, string> }) {
  const [latestDate] = await Promise.all([getLatestDate()])

  return (
    <>
      <HistorySearch year={latestDate.data.getFullYear()} downloadUrl="waste" />
    </>
  )
}
