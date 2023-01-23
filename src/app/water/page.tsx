import TablePage from '../TablePage'
import { getLatestDate } from '../services'

import WaterTable from './WaterTable'
import { getWater } from './services'

export default async function Water() {
  const [water, latestDate] = await Promise.all([getWater(), getLatestDate()])

  return (
    <TablePage title="Water">
      {water?.data && latestDate?.data && <WaterTable data={water.data} latestDate={latestDate.data} data-superjson />}
    </TablePage>
  )
}
