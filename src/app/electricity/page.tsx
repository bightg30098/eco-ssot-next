import TablePage from '../TablePage'
import { getLatestDate } from '../services'

import ElectricityTable from './ElectricityTable'
import { getElectricity } from './services'

export default async function Electricity() {
  const [electricity, latestDate] = await Promise.all([getElectricity(), getLatestDate()])

  return (
    <TablePage title="Electricity">
      {electricity?.data && latestDate?.data && (
        <ElectricityTable data={electricity.data} latestDate={latestDate.data} data-superjson />
      )}
    </TablePage>
  )
}
