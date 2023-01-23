import { getLatestDate } from '../services'

import OverviewTable from './OverviewTable'
import { getOverview } from './services'

export default async function Overview({ searchParams }: { searchParams?: Record<string, string> }) {
  const [overview, latestDate] = await Promise.all([getOverview(searchParams), getLatestDate()])

  return (
    overview?.data &&
    latestDate?.data && <OverviewTable data={overview.data} latestDate={latestDate.data} data-superjson />
  )
}
