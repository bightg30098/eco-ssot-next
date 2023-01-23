import TablePage from '@/app/TablePage'

import { getLatestDate } from '../services'

import CarbonTable from './CarbonTable'
import { getCarbon } from './services'

export default async function Carbon() {
  const [carbon, latestDate] = await Promise.all([getCarbon(), getLatestDate()])

  return (
    <TablePage title="Carbon">
      {carbon?.data && latestDate?.data && (
        <CarbonTable data={carbon.data} latestDate={latestDate.data} data-superjson />
      )}
    </TablePage>
  )
}
