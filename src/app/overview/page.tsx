import TablePage from '../TablePage'
import { getLatestDate } from '../services'

import Table from './Table'
import { getOverview } from './services'

export default async function Overview() {
  const [overview, latestDate] = await Promise.all([getOverview(), getLatestDate()])

  return (
    <TablePage title="Overview">
      {overview?.data && latestDate?.data && <Table data={overview.data} latestDate={latestDate.data} data-superjson />}
    </TablePage>
  )
}
