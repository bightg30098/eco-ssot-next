import { getLatestDate } from '@/app/services'

import HistorySearch from './HistorySearch'

export default async function OverviewHistory() {
  const latestDate = await getLatestDate()

  return (
    <>
      <HistorySearch year={latestDate.data.getFullYear()} />
    </>
  )
}
