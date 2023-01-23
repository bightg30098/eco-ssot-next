import { getLatestDate } from '@/app/services'

import OverviewTable from '../OverviewTable'
import { getOverviewHistory } from '../services'

import HistorySearch from './HistorySearch'

export default async function OverviewHistory({ searchParams }: { searchParams?: Record<string, string> }) {
  const year = searchParams?.year
  const [overviewHistory, latestDate] = await Promise.all([getOverviewHistory(searchParams), getLatestDate()])

  return (
    <>
      <HistorySearch year={latestDate.data.getFullYear()} />
      {overviewHistory?.data && latestDate?.data && (
        <OverviewTable
          data={overviewHistory.data}
          latestDate={year ? new Date(Number(year), 0, 1) : latestDate.data}
          data-superjson
        />
      )}
    </>
  )
}
