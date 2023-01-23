import TablePage from '../TablePage'
import { getLatestDate } from '../services'

import RenewableEnergyTable from './RenewableEnergyTable'
import { getRenewableEnergy } from './services'

export default async function RenewableEnergy() {
  const [renewableEnergy, latestDate] = await Promise.all([getRenewableEnergy(), getLatestDate()])

  return (
    <TablePage title="Renewable Energy">
      {renewableEnergy?.data && latestDate?.data && (
        <RenewableEnergyTable data={renewableEnergy.data} latestDate={latestDate.data} data-superjson />
      )}
    </TablePage>
  )
}
